import { DMMF, GeneratorOptions } from '@prisma/generator-helper'

type ItemType = {
  dataType: string | undefined
  gqlAttrsObj: GqlAttrsObject
  isRequired: boolean
}

type GqlAttrsObject = {
  ['@gqlIgnore']?: boolean
  ['@gqlType']?: string
  ['@gqlNonNullElement']?: boolean
}

export const genEnum = ({ name, values }: DMMF.DatamodelEnum) => {
  const enumValues = values.map(({ name: n }) => n).join('\n  ')

  return `
enum ${name} {
  ${enumValues}
}
`
}

const createList = (itemType: ItemType, item: DMMF.Field) => {
  const requiredSuffix = itemType.isRequired ? '!' : ''
  const nonNullSuffix = itemType.gqlAttrsObj['@gqlNonNullElement'] ? '!' : ''
  if (item.isList) {
    return `[${itemType.dataType}${nonNullSuffix}]${requiredSuffix}`
  }
  return `${itemType.dataType}${requiredSuffix}`
}

const getGqlAttrs = (item: DMMF.Field) => {
  const attrs = item.documentation?.split(' ')
  if (!attrs) {
    return {} as GqlAttrsObject
  }
  const isNonNullElement = item.documentation?.includes('@gqlNonNullElement')
  return {
    [attrs[0]]: attrs[1] || true,
    ['@gqlNonNullElement']: isNonNullElement,
  }
}

const createDataType = (data: string) => {
  if (data === 'Decimal') {
    return 'Float'
  }
  if (data === 'Bytes') {
    return 'Byte'
  }
  if (data === 'Unsupported') {
    return 'String'
  }
  return data
}

const createType = (item: DMMF.Field) => {
  const gqlAttrsObj = getGqlAttrs(item)
  const { isRequired } = item

  if (gqlAttrsObj['@gqlIgnore']) {
    return null
  }
  if (gqlAttrsObj['@gqlType']) {
    return {
      dataType: gqlAttrsObj['@gqlType'],
      gqlAttrsObj,
      isRequired,
    }
  }
  const t = item.type

  const dataType = createDataType(t)

  return {
    dataType,
    gqlAttrsObj,
    isRequired,
  }
}

export const generateModels = (
  models: GeneratorOptions['dmmf']['datamodel']['models'],
) =>
  models.reduce(
    (prev, current) => {
      const fields = current.fields
        .map((item) => {
          const itemType = createType(item)
          if (!itemType) {
            return null
          }
          return `${item.name}: ${createList(itemType, item)}`
        })
        .filter((d: string | null) => d)
        .join('\n  ')
      const data = `type ${current.name} {
  ${fields}
}

`
      return prev.concat(data)
    },

    '',
  )

export const generateEnums = (
  enums: GeneratorOptions['dmmf']['datamodel']['enums'],
) => enums.reduce((prev, current) => prev.concat(genEnum(current)), '')
