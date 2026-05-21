import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    if (count < 20) setCount(count+1);
  }

  function decrement() {
    if (count > 0) setCount(count-1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-blue-100">

      <div className="bg-white w-[320px] p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center">

        {/* Title */}
        <h1 className="text-xl font-semibold text-slate-700 mb-6">
          Counter App
        </h1>

        {/* Counter Value */}
        <div className="text-6xl font-bold text-slate-900 mb-8">
          {count}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">

          <button
            onClick={increment}
            className="py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-105 transition"
          >
            Increment +
          </button>

          <button
            onClick={decrement}
            className="py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-105 transition"
          >
            Decrement -
          </button>

          <button
            onClick={reset}
            className="py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-900 hover:scale-105 transition"
          >
            Reset
          </button>

        </div>

        {/* Limit info */}
        <p className="text-sm text-slate-500 mt-6">
          Range: 0 to 20
        </p>

      </div>

    </div>
  );
}

export default Counter;