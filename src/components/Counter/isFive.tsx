import React from "react";
import { useMemo, FC } from "react";
let renderCount = 0;

interface IsFiveInterface {
  value: number;
}
const IsFive: FC<IsFiveInterface> = React.memo(
  (props) => {
    const setRightAmount = (num: number): string => {
      let i = 0;
      while (i < 600000000) i++;
      return num === 5 ? "This is 5" : "This is not 5";
    };

    const rightAmount = useMemo(
      () => setRightAmount(props.value),
      [props.value]
    );

    console.log("IsFive rerendered:", ++renderCount);

    return <span>{rightAmount}</span>;
  },
  (prevProps, nextProps) => {
    if (nextProps.value === 5) {
      return false;
    } else {
      return true;
    }
  }
);

export default IsFive;
