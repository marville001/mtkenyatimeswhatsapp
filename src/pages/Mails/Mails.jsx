import { makeStyles, Paper, TextField, Button, Grid } from "@material-ui/core";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PageHeader from "../../components/PageHeader";
import EmailsTable from "../../components/EmailsTable";
import { Form } from "../../components/useForm";
import { saveEmail } from "../../_actions/shareActions";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
  },
  addForm: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Employees = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { addLoading, addError, mails } = useSelector(
    (state) => state.shareReducer
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    dispatch(saveEmail({ name, email }));
    setName("");
    setEmail("");
  };

  return (
    <>
      <PageHeader
        title="All Emails"
        subTitle="View, add or delete emails"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Paper className={classes.addForm}>
              {addError && addError.length > 0 ? (
                <>
                  <AlertTitle>Error!</AlertTitle>
                  <Alert severity="error">
                    <AlertTitle>Error!</AlertTitle>
                    {addError}
                  </Alert>
                </>
              ) : null}
              <Form>
                <Grid container>
                  <Grid item xs={12}>
                    <TextField
                      value={name}
                      variant="outlined"
                      label="Name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={email}
                      variant="outlined"
                      label="Email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      className={classes.button}
                      onClick={handleSubmit}
                      disabled={addLoading ? true : false}
                    >
                      {addLoading ? "loading.." : "Add"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </Paper>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <EmailsTable mails={mails} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Employees;
