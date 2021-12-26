import style from "./Sidebar.module.css";
import cn from "classnames";
import LinkList from "../LinkList/LinkList";
import {FC} from "react";
interface SidebarInterface {
    className: string;
}
const Sidebar: FC<SidebarInterface> = (props) => {
  return (
    <div className={cn(props.className, style.sidebar)}>
      <h1>Sidebar</h1>
      <LinkList />
    </div>
  );
};

export default Sidebar;
