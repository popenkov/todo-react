import { useState, useMemo, FC } from "react";
import IsFive from "./isFive";
let renderCount = 0;
const Counter2: FC = () => {
  const [number2, setNumber2] = useState(0);

  const setRightAmount = (num: number): string => {
    let i = 0;
    while (i < 600000000) i++;
    return num === 5 ? "This is 5" : "This is not 5";
  };

  const rightAmount = useMemo(() => setRightAmount(number2), [number2]);

  console.log("Counter 2 rerendered:", ++renderCount);

  return (
    <>
      <div id="counter2">
        <p>
          {number2} - <IsFive value={number2} />
        </p>
        <button
          onClick={() => {
            setNumber2(number2 + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setNumber2(number2 - 1);
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter2;
