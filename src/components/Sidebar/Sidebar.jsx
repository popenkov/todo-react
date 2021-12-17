import style from "./Sidebar.module.css";
import cn from "classnames";
const Sidebar = (props) => {
  return (
    <div className={cn(props.className, style.sidebar)}>
      <h1>Sidebar</h1>
    </div>
  );
};

export default Sidebar;
