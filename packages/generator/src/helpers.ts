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

const createType = (item: DMMF.Field) => {
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
) => {
  const schema = models.reduce(
    (prev, current) => {
      const fields = current.fields
        .map((item) => {
          const itemType = createType(item)
          return `${item.name}: ${createList(itemType, item)}`
        })
        .join('\n  ')
      const data = `type ${current.name} {
  ${fields}
}

`
      return prev.concat(data)
    },

    '',
  )
  return schema
}

export const generateEnums = (
  enums: GeneratorOptions['dmmf']['datamodel']['enums'],
) => enums.reduce((prev, current) => prev.concat(genEnum(current)), '')
