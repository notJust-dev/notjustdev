import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex flex-row justify-center items-center">
      <button
        type="button"
        onClick={() => setCounter((c) => c - 1)}
        className="text-3xl border-2 border-secondary text-secondary px-2 rounded-md mx-3 focus:outline-none"
      >
        -
      </button>
      <h3 className="text-3xl text-primary pb-1">{counter}</h3>
      <button
        type="button"
        onClick={() => setCounter((c) => c + 1)}
        className="text-3xl  border-2 border-secondary text-secondary px-2 rounded-md mx-3 focus:outline-none"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
