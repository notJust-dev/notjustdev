import fs from 'fs';
import client from 'https';
import { join } from 'path';

const publicDir = join(process.cwd(), 'public');

export const downloadImage = (
  url: string,
  filepath: string,
): Promise<string> => {
  const fullPath = join(publicDir, filepath);
  return new Promise((resolve, reject) => {
    client.get(url, (res) => {
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
