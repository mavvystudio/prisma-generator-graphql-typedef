import { DMMF, GeneratorOptions } from '@prisma/generator-helper'

export const genEnum = ({ name, values }: DMMF.DatamodelEnum) => {
  const enumValues = values.map(({ name: n }) => n).join('\n  ')

  return `
enum ${name} {
  ${enumValues}
}
`
}

const createList = (t: string, item: DMMF.Field) => {
  if (item.isList) {
    return `${t}[]`
  }
  return t
}

type GqlAttrsObject = {
  ['@gqlIgnore']?: boolean
}

const gqlAttrs = ['@gqlIgnore']

const getGqlAttrs = (item: DMMF.Field) => {
  const attrs = item.documentation?.split(' ')
  if (!attrs) {
    return {} as GqlAttrsObject
  }
  return attrs.reduce((prev, current) => {
    const item = current.trim()
    if (!gqlAttrs.includes(item)) {
      return prev
    }
    return { ...prev, [item]: true }
  }, {} as GqlAttrsObject)
}

const createType = (item: DMMF.Field) => {
  const gqlAttrs = getGqlAttrs(item)

  if (gqlAttrs['@gqlIgnore']) {
    return null
  }
  const t = item.type
  if (t === 'Decimal') {
    return 'Float'
  }
  if (t === 'Bytes') {
    return 'Byte'
  }
  if (t === 'Unsupported') {
    return 'String'
  }
  return t
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
