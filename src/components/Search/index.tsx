import React, {  useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../redux/filter/slice";

const Search:React.FC = () => {
  const dispatch = useDispatch();
  const [ value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
   dispatch(setSearchValue(''));
    setValue("");
    inputRef.current?.focus();
  }

  const updateSearchValue = useCallback(
    debounce((str:string) => {
      dispatch(setSearchValue(str));
    }, 500), []
  )

  const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  }

  return (
    <div className={styles.root}>
      <svg
      className={styles.icon}
        height="18px"
        version="1.1"
        viewBox="0 0 18 18"
        width="18px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <desc />
        <defs />
        <g
          fill="none"
          fillRule="evenodd"
          id="Page-1"
          stroke="none"
          strokeWidth="1"
        >
          <g
            fill="#000000"
            id="Core"
            transform="translate(-339.000000, -381.000000)"
          >
            <g id="search" transform="translate(339.000000, 381.000000)">
              <path
                d="M12.5,11 L11.7,11 L11.4,10.7 C12.4,9.6 13,8.1 13,6.5 C13,2.9 10.1,0 6.5,0 C2.9,0 0,2.9 0,6.5 C0,10.1 2.9,13 6.5,13 C8.1,13 9.6,12.4 10.7,11.4 L11,11.7 L11,12.5 L16,17.5 L17.5,16 L12.5,11 L12.5,11 Z M6.5,11 C4,11 2,9 2,6.5 C2,4 4,2 6.5,2 C9,2 11,4 11,6.5 C11,9 9,11 6.5,11 L6.5,11 Z"
                id="Shape"
              />
            </g>
          </g>
        </g>
      </svg>
      <input
        ref={inputRef}
        onChange={onChangeInput} 
        value={value} 
        className={styles.input} 
        placeholder="Поиск пиццы..." 
       />
      {value &&
      <svg 
       onClick={() => onClickClear()}
       className={styles.clear} 
       data-name="Layer 1" height="200" id="Layer_1" viewBox="0 0 200 200" width="200" xmlns="http://www.w3.org/2000/svg"><title/><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
      }
    </div>
  );
}
export default Search;
