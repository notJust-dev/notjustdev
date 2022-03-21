import React, { useEffect, useState } from 'react';

const Number = ({ value, label }: { value: number; label: string }) => (
  <div className="m-1 md:m-5 flex-1">
    <div className="bg-secondary rounded-md p-3 md:py-6 flex justify-center">
      <span className="text-lg md:text-6xl font-bold text-center">
        {String(value).padStart(2, '0')}
      </span>
    </div>
    <div className="text-center text-md md:text-2xl m-1 md:m-3">{label}</div>
  </div>
);

const CountdownTimer = ({ endDateStr }: { endDateStr: string }) => {
  const [msLeft, setMsLeft] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const now = new Date();
    const endDate = new Date(endDateStr);
    const millisecondsTillEnd = endDate.getTime() - now.getTime();

    if (millisecondsTillEnd > 0) {
      setMsLeft(millisecondsTillEnd);

      interval = setInterval(() => {
        setMsLeft((ms) => ms - 1000);
      }, 1000);
    }

    return () => interval && clearInterval(interval);
  }, [endDateStr]);

  const millisecondsToTime = (milliseconds: number) => {
    const msConversions = {
      s: 1000,
      m: 1000 * 60,
      h: 1000 * 60 * 60,
      d: 1000 * 60 * 60 * 24,
    };

    const days = Math.floor(milliseconds / msConversions.d);

    const hoursLeft = milliseconds % msConversions.d;
    const hours = Math.floor(hoursLeft / msConversions.h);

    const minutesLeft = hoursLeft % msConversions.h;
    const minutes = Math.floor(minutesLeft / msConversions.m);

    const secondsLeft = minutesLeft % msConversions.m;
    const seconds = Math.ceil(secondsLeft / msConversions.s);

    const obj = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  };

  const time = millisecondsToTime(msLeft);

  return (
    <div className="flex flex-row">
      <Number value={time.d} label="DAYS" />
      <Number value={time.h} label="HOURS" />
      <Number value={time.m} label="MINS" />
      <Number value={time.s} label="SECS" />
    </div>
  );
};

export default CountdownTimer;
