import { generatorHandler, GeneratorOptions } from '@prisma/generator-helper'
import { logger } from '@prisma/internals'
import path from 'path'
import { GENERATOR_NAME } from './constants'
import { generateEnums, generateModels } from './helpers'
// import { genEnum } from './helpers/genEnum'
import { writeFileSafely } from './utils/writeFileSafely'

const { version } = require('../package.json')

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

    const json = JSON.stringify(options, null, 2)
    const jsonOptions = `export default ${json}`

    await writeFileSafely(path.join(basePath, 'schema.ts'), content)
    await writeFileSafely(path.join(basePath, 'options.ts'), jsonOptions)
  },
})
