import { makeStyles, Paper } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";
import PageHeader from "../../components/PageHeader";
import EmailForm from "./EmailForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
    // minHeight: "60vh",
  },
}));

const Home = (props) => {
  const classes = useStyles();

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
