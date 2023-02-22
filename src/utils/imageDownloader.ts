import fs from 'fs';
import https from 'https';
import { join, parse } from 'path';

const publicDir = join(process.cwd(), 'public');

export const downloadImage = (
  url: string,
  filepath: string,
): Promise<string> => {
  const fullPath = filepath.includes(publicDir)
    ? filepath
    : join(publicDir, filepath);

  const dir = parse(fullPath).dir;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        res
          .pipe(fs.createWriteStream(fullPath))
          .on('error', reject)
          .once('close', () => resolve(filepath));
      } else {
        // Consume response data to free up memory
        res.resume();
        reject(
          new Error(`Request Failed With a Status Code: ${res.statusCode}`),
        );
      }
    });
  });
};
