import { DMMF } from '@prisma/generator-helper'
import { genEnum, generateModels } from '../helpers'
import { getSampleDMMF } from './__fixtures__/getSampleDMMF'

test('enum generation', async () => {
  const sampleDMMF = await getSampleDMMF()

  sampleDMMF.datamodel.enums.forEach((enumInfo: DMMF.DatamodelEnum) => {
    expect(genEnum(enumInfo)).toMatchSnapshot(enumInfo.name)
  })
})

test('model generation', async () => {
  const sampleDMMF = await getSampleDMMF()

  const data = generateModels(sampleDMMF.datamodel.models)
  expect(data).toMatchSnapshot('model')
})
