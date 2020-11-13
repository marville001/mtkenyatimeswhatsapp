import { makeStyles, Paper } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import React from "react";
import PageHeader from "../../components/PageHeader";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
  },
}));

const Users = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Manage Admins"
        subTitle="Add or Remove admins"
        icon={<VerifiedUserIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <h1>Users</h1>
      </Paper>
    </>
  );
};

export default Users;
