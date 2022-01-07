import style from "./Main.module.css";
import cn from "classnames";
import { FC } from "react";
import Counter from "../Counter/Counter";
import Todo from "../Todo/Todo";

interface MainInterface {
  className: string;
}

const Main: FC<MainInterface> = (props) => {
  return (
    <div className={cn(props.className, style.main)}>
      <h1>Main</h1>
      <Counter />
      <Todo />
    </div>
  );
};

export default Main;
