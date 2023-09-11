// TODO why eslint complains?
import {
  S3Client,
  PutObjectCommand,
  HeadObjectCommand,
} from '@aws-sdk/client-s3';
import fs from 'fs';

import { downloadFile } from './utils/fileDownloader';

const { S3_BUCKET } = process.env;
const s3BaseUrl = 'https://notjustdev-media.s3.amazonaws.com/';

// Create an Amazon S3 service client object.
const s3Client = new S3Client({});

const fileNameRegex = /(?<=secure\.notion-static\.com\/)[^?]+/;
const fileNameRegexNew =
  /https:\/\/prod-files-secure\.s3\.us-west-2\.amazonaws\.com\/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\/([^?]+)/;
const unsplashFileNameRegex = /https:\/\/images\.unsplash\.com\/([^?/]+)/;
const giphyRegex = /https:\/\/[^\/]+\.giphy\.com\/media\/([^\/]+\/giphy\.gif)/;

const uploadLocalFileToS3 = async (localUri: string, key: string) => {
  // Create an object and upload it to the Amazon S3 bucket.
  const command = new PutObjectCommand({
    Bucket: S3_BUCKET,
    Key: key,
    Body: fs.createReadStream(localUri),
  });
  try {
    await s3Client.send(command);
    console.log(`Successfully uploaded: ${key}`);
  } catch (err) {
    console.log('Error uploading to S3', err);
  }
};

const existsInS3 = async (fileName: string) => {
  try {
    const bucketParams = {
      Bucket: S3_BUCKET,
      Key: `static-files/${fileName}`,
    };
    const cmd = new HeadObjectCommand(bucketParams);
    const data = await s3Client.send(cmd);

    // I always get 200 for my testing if the object exists
    return data.$metadata.httpStatusCode === 200;
  } catch (error) {
    //@ts-ignore
    if (error.$metadata?.httpStatusCode === 404) {
      // doesn't exist and permission policy includes s3:ListBucket
      return false;
      //@ts-ignore
    } else if (error.$metadata?.httpStatusCode === 403) {
      // doesn't exist, permission policy WITHOUT s3:ListBucket
      return false;
    } else {
      // some other error
      console.log('Unexpected error getting the Head of the S3 Object.');
      throw error;
    }
  }
};

export const copyFileToS3 = async (fileUrl: string) => {
  const fileName =
    fileUrl.match(fileNameRegex)?.[0] ||
    fileUrl.match(unsplashFileNameRegex)?.[1] ||
    fileUrl.match(giphyRegex)?.[1] ||
    fileUrl.match(fileNameRegexNew)?.[1];

  if (!fileName) {
    throw Error(`Can't parse the S3 image url from Notion: ${fileUrl}`);
  }
  const fileKey = `static-files/${fileName}`;

  if (await existsInS3(fileName)) {
    return s3BaseUrl + fileKey;
  }

  // TODO: Q: is tmp folder automaticaly deleted after? or should I handle it
  // do we have to actually download or can we create the ReadStream from the remote url?
  const localUri = await downloadFile(fileUrl, `/tmp/${fileName}`);

  await uploadLocalFileToS3(localUri, fileKey);

  return s3BaseUrl + fileKey;
};
