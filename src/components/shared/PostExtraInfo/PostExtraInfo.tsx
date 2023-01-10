import React from 'react';
import { HiLightBulb } from 'react-icons/hi';

export default function PostExtraInfo({ info = '' }: { info: string }) {
  return (
    <div className="flex flex-row p-5 bg-black rounded-2xl">
      <div className="mt-2">
        <HiLightBulb color="yellow" size={24} />
      </div>

      <span className="flex-1 pl-4 text-sm">{info}</span>
    </div>
  );
}
