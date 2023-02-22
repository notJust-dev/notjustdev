import { MdBlock } from 'notion-to-md/build/types';
import { downloadImage } from './imageDownloader';
import { v4 as uuidv4 } from 'uuid';

export const processVideos = async (
  block: MdBlock,
  postSlug: string,
): Promise<MdBlock> => {
  if (block.type !== 'video') {
    return block;
  }

  const remoteUri = block.parent.match(/\((.*?)\)/)?.[1];
  if (!remoteUri) {
    return block;
  }

  const uri = await downloadImage(
    remoteUri,
    `/images/notion/${postSlug}/${uuidv4()}.mp4`,
  );

  return {
    type: 'paragraph',
    parent: `<VideoPlayer height={500} width={300} url="${uri}" />`,
    children: [],
  };
};
