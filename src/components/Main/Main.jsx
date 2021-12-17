import style from "./Main.module.css";
import cn from "classnames";
const Main = (props) => {
  return (
    <div className={cn(props.className, style.main)}>
      <h1>Main</h1>
    </div>
  );
};

export default Main;
