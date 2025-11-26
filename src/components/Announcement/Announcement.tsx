'use client';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Announcement = () => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  } | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const calculateTimeLeft = () => {
      // December 1st, 2025 at 23:59:59 UTC
      const endDate = new Date('2025-12-01T23:59:59Z');
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return null;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Don't show the banner if the sale has ended
  if (isMounted && !timeLeft) {
    return null;
  }

  return (
    <Link
      href="/react-native-mastery"
      className="justify-center p-3 py-3 sm:py-5 sticky top-0 z-[60] bg-gradient-to-r from-gray-900 via-red-950/60 to-yellow-950/50 backdrop-blur-xl drop-shadow-lg"
    >
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 sm:gap-6">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="bg-red-600 text-white text-lg font-bold px-2 py-1 rounded">
                BLACK FRIDAY
              </span>
              <b className="text-lg sm:text-2xl bg-gradient-to-r from-primary to-yellow-100 inline-block text-transparent bg-clip-text">
                50% OFF React Native Mastery
              </b>
            </div>
          </div>

          {isMounted && timeLeft && (
            <div className="hidden sm:flex items-center gap-3 sm:gap-4">
              <div className="flex gap-2 text-center">
                <div className="flex flex-col bg-black/40 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-primary font-bold text-lg">
                    {timeLeft.days}
                  </span>
                  <span className="text-gray-400 text-[10px]">DAYS</span>
                </div>
                <div className="flex flex-col bg-black/40 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-primary font-bold text-lg">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-gray-400 text-[10px]">HRS</span>
                </div>
                <div className="flex flex-col bg-black/40 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-primary font-bold text-lg">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-gray-400 text-[10px]">MIN</span>
                </div>
                <div className="flex flex-col bg-black/40 rounded px-2 py-1 min-w-[40px]">
                  <span className="text-primary font-bold text-lg">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-gray-400 text-[10px]">SEC</span>
                </div>
              </div>
              <span className="hidden sm:block shadow-md rounded-md font-bold text-sm py-2 px-5 text-custom-blue-500 bg-primary whitespace-nowrap">
                Get 50% OFF
              </span>
            </div>
          )}
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
