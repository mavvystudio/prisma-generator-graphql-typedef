import { DMMF } from '@prisma/generator-helper'

export const genEnum = ({ name, values }: DMMF.DatamodelEnum) => {
  const enumValues = values.map(({ name: n }) => n).join('\n  ')

  return `export default \`enum ${name} {
  ${enumValues}\n }\``
}
