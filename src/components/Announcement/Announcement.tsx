// import Link from 'next/link';
// import MaxWidthWrapper from '../MaxWidthWrapper';
// import { useCallback, useEffect, useState } from 'react';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';

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
    <Link
      href="/react-native-mastery"
      className="justify-center p-3 py-3 sm:py-7 sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-yellow-950/50 backdrop-blur-xl drop-shadow-lg"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between text-center">
          <div
            className={`transition-all flex flex-col items-center sm:items-start gap-1`}
          >
            <b className="text-lg sm:text-2xl bg-gradient-to-r from-primary to-yellow-100  inline-block text-transparent bg-clip-text">
              React Native Mastery
            </b>
            <span className="text-gray-200 text-sm sm:text-base">
              The Ultimate React Native and Expo Course. Launching{' '}
              <b>November 26</b>
            </span>
          </div>

          <div className="hidden sm:block">
            <span className="shadow-md rounded-md font-bold text-lg py-3 px-7 text-custom-blue-500 bg-primary ">
              Learn more
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </Link>
  );
};

export default Announcement;

// Incubator announcement

// return (
//   <div className="justify-center p-3 py-7 sticky top-0 z-50 bg-gradient-to-br from-indigo-950 to-purple-800">
//     <MaxWidthWrapper>
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
//         <div>
//           <div className={`text-gray-100 transition-all text-md lg:text-lg`}>
//             We are looking for the next projects for{' '}
//             <b>notJust.Incubator</b>
//             🚀
//           </div>
//         </div>

//         <div className="mt-5 sm:mt-0">
//           <Link href="/incubator">
//             <span className="shadow-md rounded-md font-bold text-md lg:text-lg py-2 lg:py-3 px-4 lg:px-7 text-custom-blue-500 bg-primary ">
//               Read more
//             </span>
//           </Link>
//         </div>
//       </div>
//     </MaxWidthWrapper>
//   </div>
// );
