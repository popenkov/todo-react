import { useState, FC } from "react";
let renderCount = 0;
const Counter1: FC = () => {
  const [number1, setNumber1] = useState(0);

  console.log("Counter 1 rerendered:", ++renderCount);

  return (
    <div id="counter1">
      <p>{number1}</p>
      <button
        onClick={() => {
          setNumber1(number1 + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber1(number1 - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter1;
