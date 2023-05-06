import fs from 'fs'
import path from 'path'
// import { formatFile } from './formatFile'

export const writeFileSafely = async (writeLocation: string, content: any) => {
  fs.mkdirSync(path.dirname(writeLocation), {
    recursive: true,
  })

  /**
  const data = await formatFile(content)
  console.log({ data })
   */
  fs.writeFileSync(writeLocation, content)
}
