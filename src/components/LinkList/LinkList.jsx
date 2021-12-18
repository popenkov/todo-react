import LinkItem from "../LinkItem/LinkItem";
import FilterList from "../FilterList/FilterList";
import { useState } from "react";
const LinkList = () => {
  const thingsToDoArr = ["выучить реакт", "поесть"];
  const [thingsToDo, setThingsToDo] = useState(thingsToDoArr);

  function filterInputHandler(evt) {
    const filteredArray = thingsToDo.filter((item) => {
      return item.includes(evt.target.value);
    });
    setThingsToDo(filteredArray);
    console.log(thingsToDo);
  }
  return (
    <>
      <FilterList filterInputHandler={filterInputHandler} />
      <ul>
        {thingsToDo.map((link, id) => {
          return <LinkItem key={id} value={link} />;
        })}
      </ul>
    </>
  );
};

export default LinkList;
