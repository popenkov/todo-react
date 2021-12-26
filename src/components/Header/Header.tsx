import style from "./Header.module.css";
import cn from "classnames";
import {FunctionComponent} from "react";

interface HeaderInterface {
    className: string;
}

const Header: FunctionComponent<HeaderInterface> = ({className}) => {
  return (
    <header className={cn(className, style.header)}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
