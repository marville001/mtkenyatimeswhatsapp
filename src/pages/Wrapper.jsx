import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";

import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  appMain: {
    width: "100%",
  },
});

const Wrapper = ({ children }) => {
  const classes = useStyles();
  const { user } = useSelector((state) => state.userReducer);

  let history = useHistory();

  useEffect(() => {
    if (!user._id) {
      history.push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user._id]);

  return (
    <div className={classes.appMain}>
      <Header />
      {children}
    </div>
  );
};

export default Wrapper;
