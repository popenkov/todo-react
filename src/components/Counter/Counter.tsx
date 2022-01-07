import { FC } from "react";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import style from "./Counter.module.css";

const Counter: FC = () => {
  /*   const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const setRightAmount = (num: number): string => {
    let i = 0;
    while (i < 600000000) i++;
    return num === 5 ? "This is 5" : "This is not 5";
  }; */

  /*   const rightAmount = useMemo(() => setRightAmount(number2), [number2]); */
  console.log("Counter main rerendered");
  return (
    <section className={style.counter}>
      <Counter1 />
      <Counter2 />
    </section>
  );
};

export default Counter;
