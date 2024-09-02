import fs from 'fs';
import path from 'path';

export async function getJsonData<T>(
  fileName: string,
  directory: string = 'constants',
): Promise<T> {
  const filePath = path.join(process.cwd(), directory, `${fileName}.json`);
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}
