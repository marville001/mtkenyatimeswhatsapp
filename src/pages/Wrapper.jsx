import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    width: "100%",
  },
});

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.appMain}>
      <Header />
      {children}
    </div>
  );
};

export default Wrapper;
