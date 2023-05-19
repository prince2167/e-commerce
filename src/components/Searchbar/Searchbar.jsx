import React from "react";
import classes from "./Searchbar.module.css";
import { CiSearch } from "../../assets/icon";
import { useProducts } from "../../contexts/product-contex";
const Searchbar = () => {
  const { dispatch } = useProducts();
  return (
    <div className={classes.group}>
      <CiSearch className={classes.icon} />
      <input
        placeholder="Search here"
        type="search"
        className={classes.input}
        onChange={(event) =>
          dispatch({ type: "SEARCH_TERM", payload: event.target.value })
        }
      />
    </div>
  );
};

export default Searchbar;
