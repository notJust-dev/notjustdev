import { MdBlock } from 'notion-to-md/build/types';
import { copyFileToS3 } from '../s3Client';

export const processVideos = async (block: MdBlock): Promise<MdBlock> => {
  if (block.type !== 'video') {
    return block;
  }

  const remoteUri = block.parent.match(/\((.*?)\)/)?.[1];
  if (!remoteUri) {
    return block;
  }

  const uri = await copyFileToS3(remoteUri);

  return {
    blockId: block.blockId,
    type: 'paragraph',
    parent: `<VideoPlayer height={450} url="${uri}" />`,
    children: [],
  };
};
