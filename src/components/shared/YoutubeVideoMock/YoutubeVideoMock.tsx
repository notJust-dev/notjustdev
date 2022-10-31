import React from 'react';

const YtIcon = () => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 461.001 461.001"
    xmlSpace="preserve"
    className="w-6 h-6 inline mr-1"
    stroke="currentColor"
    fill="#F61C0D"
  >
    <path
      d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
    />
  </svg>
);

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
