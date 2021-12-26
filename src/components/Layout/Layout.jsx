import Header from "../Header/Header.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";
import Main from "../Main/Main.tsx";
import style from "./Layout.module.css";
const Layout = () => {
  return (
    <div className={style.layout}>
      <Header className={style.header} />

      <Sidebar className={style.sidebar} />
      <Main className={style.main} />
    </div>
  );
};

export default Layout;
