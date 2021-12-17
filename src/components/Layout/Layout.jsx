import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
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
