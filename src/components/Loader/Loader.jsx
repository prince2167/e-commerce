import React from "react";
import classes from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={classes.spinnerContainer}>
      <div className={classes.spinner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
