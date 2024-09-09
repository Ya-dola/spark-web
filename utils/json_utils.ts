import fs from 'fs';
import path from 'path';

export async function getJsonData<T>({
  directory = 'constants',
  page,
  fileName,
}: {
  directory?: string;
  page: string;
  fileName: string;
}): Promise<T> {
  const filePath = path.join(
    process.cwd(),
    directory,
    page,
    `${fileName}.json`,
  );
  const fileContents = await fs.promises.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}
