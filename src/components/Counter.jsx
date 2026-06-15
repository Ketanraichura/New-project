import { useState } from 'react';
import Button from './Button.jsx';
import SectionCard from './SectionCard.jsx';

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
    <SectionCard>
      <h2 className="text-2xl font-semibold">Counter</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        A quick warmup for state updates with button clicks.
      </p>

      <div className="mt-6 flex items-center gap-4">
        <Button onClick={decreaseCount} variant="secondary">
          -1
        </Button>
        <p className="min-w-16 text-center text-4xl font-bold">{count}</p>
        <Button onClick={increaseCount}> 
          +1
        </Button>
      </div>

      <Button className="mt-4 px-0 text-sm" onClick={resetCount} variant="ghost">
        Reset counter
      </Button>
    </SectionCard>
  );
}

export default Counter;
