import style from "./FilterList.module.css";
import {FC, useRef} from "react";

interface FilterListProps {
  filterInputHandler: (e: any) => void;
}


const FilterList: FC<FilterListProps> = ({filterInputHandler}): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        if (inputRef.current !== null) {
            inputRef.current.style.border = '1 px solid red'
        }

    }
  return (
    <input
        ref={inputRef}
    onInput={(e) => {
        handleFocus()
      filterInputHandler(e);
    }}
    className={style.filterList}
    />
  );
};

export default FilterList;
