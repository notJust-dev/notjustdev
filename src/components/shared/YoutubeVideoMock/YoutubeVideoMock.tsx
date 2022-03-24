import React from 'react';
import YtIcon from './YtIcon';

interface IYoutubeVideoMock {
  title: string;
  url: string;
  description?: string;
  imageUri?: string;
}

const YoutubeVideoMock = ({
  title,
  url,
  description,
  imageUri,
}: IYoutubeVideoMock) => (
  <a href={url} target="_blank" rel="noreferrer">
    <div className="border-2 border-gray-600 rounded-md flex flex-col md:flex-row">
      <div className="flex flex-col justify-between mx-3">
        <div>
          <h4>{title}</h4>
          <span className="text-gray-400 text-sm">{description}</span>
        </div>

        <div className="text-gray-300 my-2">
          <YtIcon />
          {url}
        </div>
      </div>
      <img
        className="h-48 object-cover"
        src={imageUri}
        alt={`Thumbnail for ${title}`}
      />
    </div>
  </a>
);

YoutubeVideoMock.defaultProps = {
  description: '',
  imageUri: undefined,
} as Partial<IYoutubeVideoMock>;

export default YoutubeVideoMock;
