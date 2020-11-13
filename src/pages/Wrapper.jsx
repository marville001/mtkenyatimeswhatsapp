import React from "react";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "250px",
    width: "100%",
  },
});

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        {children}
      </div>
    </>
  );
};

export default Wrapper;
