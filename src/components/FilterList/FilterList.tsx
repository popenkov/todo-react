import style from "./FilterList.module.css";
import {FC} from "react";

interface FilterListProps {
  filterInputHandler: (e: any) => void;
}


const FilterList: FC<FilterListProps> = ({filterInputHandler}): JSX.Element => {
  return (
    <input
    onInput={(e) => {
      filterInputHandler(e);
    }}
    className={style.filterList}
    />
  );
};

export default FilterList;
