import { makeStyles, Paper, TextField, Button, Grid } from "@material-ui/core";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import React from "react";
import PageHeader from "../../components/PageHeader";
import ContactsTable from "../../components/ContactsTable";
import { useForm, Form } from "../../components/useForm";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
  },
  addForm: {
    padding: theme.spacing(3),
    margin: theme.spacing(5),
  },
  fac: {
    display: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const initialFValues = {
  name: "",
  contact: "",
};

const Employees = () => {
  const classes = useStyles();
  const { values, handleInputChange } = useForm(initialFValues);

  const handleSubmit = () => {};

  return (
    <>
      <PageHeader
        title="All Contacts"
        subTitle="View, add or delete Contact"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Paper className={classes.addForm}>
          <Form>
            <Grid container>
              <Grid item xs={12} md={4}>
                <TextField
                  value={values.name}
                  variant="outlined"
                  label="Name"
                  name="name"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  value={values.contact}
                  variant="outlined"
                  label="Contact"
                  name="contact"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid className={classes.fac} item xs={12} md={4}>
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  className={classes.button}
                  onClick={handleSubmit}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Paper>
        <ContactsTable />
      </Paper>
    </>
  );
};

export default Employees;
