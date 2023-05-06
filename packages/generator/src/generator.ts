import {
  DMMF,
  generatorHandler,
  GeneratorOptions,
} from '@prisma/generator-helper'
import { logger } from '@prisma/internals'
import path from 'path'
import { GENERATOR_NAME } from './constants'
// import { genEnum } from './helpers/genEnum'
import { writeFileSafely } from './utils/writeFileSafely'

const { version } = require('../package.json')

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

const generateModels = (
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

const generateEnums = (enums: GeneratorOptions['dmmf']['datamodel']['enums']) =>
  enums.reduce((prev, current) => prev.concat(genEnum(current)), '')

generatorHandler({
  onManifest() {
    logger.info(`${GENERATOR_NAME}:Registered`)
    return {
      version,
      defaultOutput: '../generated',
      prettyName: GENERATOR_NAME,
    }
  },
  onGenerate: async (options: GeneratorOptions) => {
    const { enums, models } = options.dmmf.datamodel
    const schemaModel = generateModels(models)
    const schemaEnum = generateEnums(enums)
    const basePath = options.generator.output?.value!
    const content = `export default \`${schemaModel.concat(schemaEnum)}\``

    await writeFileSafely(path.join(basePath, 'schema.ts'), content)

    /**
     enums.forEach(async (enumInfo) => {
      const tsEnum = genEnum(enumInfo)

      const writeLocation = path.join(basePath, `${enumInfo.name}.ts`)

      await writeFileSafely(writeLocation, tsEnum)
    })
     */
  },
})
