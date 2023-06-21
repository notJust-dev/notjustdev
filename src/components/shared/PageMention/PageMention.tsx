// WIP
// import { useEffect } from 'react';
// import { getPage } from '../../../lib/notion';

type PageMentionProps = {
  id: string;
};

const PageMention = ({ id }: PageMentionProps) => {
  // useEffect(() => {
  //   getPage(id);
  // }, []);

  return (
    <div>
      <h3>Page with id: {id}</h3>
    </div>
  );
};

export default PageMention;
