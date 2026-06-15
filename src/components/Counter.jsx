import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <section className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 className="text-2xl font-semibold">Counter</h2>
      <p className="mt-2 text-slate-600">
        A quick warmup for state updates with button clicks.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <button
          className="rounded-md bg-slate-200 px-4 py-2 font-medium text-slate-800 hover:bg-slate-300"
          onClick={decreaseCount}
          type="button"
        >
          -1
        </button>
        <p className="min-w-16 text-center text-4xl font-bold">{count}</p>
        <button
          className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
          onClick={increaseCount}
          type="button"
        >
          +1
        </button>
      </div>

      <button
        className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-700"
        onClick={resetCount}
        type="button"
      >
        Reset counter
      </button>
    </section>
  );
}

export default Counter;
