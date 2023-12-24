// import Link from 'next/link';
// import MaxWidthWrapper from '../MaxWidthWrapper';
// import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';

const Announcement = () => {
  // const [minimized, setMinimized] = useState(false);
  // const [scrollY, setScrollY] = useState(0);

  // const onScroll = useCallback((event) => {
  //   const { scrollY } = window;
  //   console.log('scrollY', scrollY);
  //   setMinimized(scrollY > 100);
  //   setScrollY(scrollY);
  // }, []);

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener('scroll', onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener('scroll', onScroll);
  //   };
  // }, []);

  // // let height = scrollY > 100 ? 100 : 300;
  // // let height = 300 ->  300 - scrollY -> 100
  // let height = Math.max(300 - scrollY, 100);

  return (
    <div className="justify-center p-3 py-7 sticky top-0 z-50 bg-gradient-to-br from-indigo-950 to-purple-800">
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <div className={`text-gray-100 transition-all text-md lg:text-lg`}>
              We are looking for the next projects for{' '}
              <b>notJust.Accelerator</b>
              🚀
            </div>
          </div>

          <div className="mt-5 sm:mt-0">
            <Link href="/accelerator">
              <span className="shadow-md rounded-md font-bold text-md lg:text-lg py-2 lg:py-3 px-4 lg:px-7 text-custom-blue-500 bg-primary ">
                Read more
              </span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Announcement;
