import LinkItem from "../LinkItem/LinkItem";
import FilterList from "../FilterList/FilterList";
import { useContext, useState } from "react";
import { ToDoContext } from "../../App";
import style from "./LinkList.module.css";
const LinkList = () => {
  const { todo } = useContext(ToDoContext);
  const [thingsToDo, setThingsToDo] = useState(todo);

  function filterInputHandler(evt) {
    const todoCopy = todo.slice();
    if (evt.target.value === "bomb") {
      throw new Error("Caboom");
    }
    const filteredArray = todoCopy.filter((item) => {
      return item.includes(evt.target.value);
    });
    setThingsToDo(filteredArray);
  }
  return (
    <>
      <FilterList filterInputHandler={filterInputHandler} />
      <ul className={style.LinkList}>
        {thingsToDo.map((link, id) => {
          return <LinkItem key={id} value={link} />;
        })}
      </ul>
    </>
  );
};

export default LinkList;
