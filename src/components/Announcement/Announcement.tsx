import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
// import { useCallback, useEffect, useState } from 'react';

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

  // return null;

  return (
    <div
      className="justify-center p-3 py-7 sticky top-0 z-50"
      style={{ backgroundColor: '#F3EAC0' }}
    >
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <div
              className={`text-custom-blue-500 transition-all text-lg lg:text-2xl`}
            >
              <b>🚨 Black Friday Deal: 50% off </b> on our Academy courses 🎓
            </div>
          </div>

          <div className="mt-5 sm:mt-0">
            <Link href="https://academy.notjust.dev/">
              <span className="shadow-md rounded-md font-bold text-lg lg:text-xl py-2 lg:py-4 px-5 lg:px-10 bg-custom-blue-500 text-primary ">
                View Offer
              </span>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Announcement;
