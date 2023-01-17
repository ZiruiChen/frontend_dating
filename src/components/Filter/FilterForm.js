import classes from "./FilterForm.module.css";
import { useRef, useState } from "react";

const FilterForm = (props) => {
  const filteredAgeInputRef = useRef();
  const [hide, setHide] = useState(true);

  const onHide = (event) => {
    event.preventDefault();
    setHide(true);
  };
  const onOpen = (event) => {
    event.preventDefault();
    setHide(false);
  };
  const onClear = (event) => {
    event.preventDefault();
    // console.log("onclear")
    filteredAgeInputRef.current.value = null;
    testSubmitHandler(event);
  };
  const testSubmitHandler = (event) => {
    event.preventDefault();
    props.onFilter(filteredAgeInputRef.current.value);
    // console.log("submitted");
  };

  if (hide) {
    return (
      <div className={classes.action}>
        <button onClick={onOpen}>
          {
            <img
              src={require("../../search icon.jpeg")}
              alt=""
              width="30"
              height="30"
            />
          }
        </button>
      </div>
    );
  }

  return (
    <form
      className={classes.form}
      onSubmit={testSubmitHandler}
      autoComplete="off"
    >
      <div className={classes.control}>
        <label htmlFor="filter-age">年龄</label>
        <input type="number" id="inputNmae" ref={filteredAgeInputRef} />
      </div>
      <div className={classes.action}>
        <button>筛选</button>
        <button onClick={onClear}>清空</button>
        <button onClick={onHide}>收起</button>
      </div>
    </form>
  );
};

export default FilterForm;
