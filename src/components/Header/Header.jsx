import style from "./Header.module.css";
import cn from "classnames";
const Header = (props) => {
  return (
    <header className={cn(props.className, style.header)}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
