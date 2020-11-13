import { makeStyles, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PageHeader from "../../components/PageHeader";
import EmailForm from "./EmailForm";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
    // minHeight: "60vh",
  },
}));

const Home = (props) => {
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
    <>
      <PageHeader
        title="Share Link"
        subTitle="Enter the link to send and an image"
        icon={<SendIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmailForm />
      </Paper>
    </>
  );
};

export default Home;
