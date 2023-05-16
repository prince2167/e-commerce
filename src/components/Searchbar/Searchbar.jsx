import React from "react";
import classes from "./Searchbar.module.css";
import { CiSearch } from "../../assets/icon";
const Searchbar = () => {
  return (
    <div className={classes.group}>
      <CiSearch className={classes.icon}  />
      <input
        placeholder="Search here"
        type="search"
        className={classes.input}
      />
    </div>
  );
};

export default Searchbar;
