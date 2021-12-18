import style from "./FilterList.module.css";
import cn from "classnames";

const FilterList = (props: any): JSX.Element => {
  return (
    <input
      onInput={(e) => {
        props.filterInputHandler(e);
      }}
      className="{cn(style.FilterList)}"
    ></input>
  );
};

export default FilterList;
