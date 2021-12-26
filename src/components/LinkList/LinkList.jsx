import LinkItem from "../LinkItem/LinkItem";
import FilterList from "../FilterList/FilterList";
import { useContext, useState } from "react";
import { ToDoContext } from "../../App";
import style from "./LinkList.module.css";
const LinkList = () => {
  /* const thingsToDoArr = ["выучить реакт", "поесть"]; */
  const { todo } = useContext(ToDoContext);
  const [thingsToDo, setThingsToDo] = useState(todo);

  function filterInputHandler(evt) {
    const todoCopy = todo.slice();
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
