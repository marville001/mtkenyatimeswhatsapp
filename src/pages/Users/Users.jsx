import {
  makeStyles,
  Paper,
  TextField,
  Button,
  Grid,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import React, { useState } from "react";
import {
  useSelector,
  // useDispatch
} from "react-redux";
import PageHeader from "../../components/PageHeader";
import UsersTable from "../../components/UsersTable";
import { Form } from "../../components/useForm";
// import { addUser } from "../../_actions/shareActions";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: theme.spacing(3),
    margin: theme.spacing(3),
  },
  addForm: {
    padding: theme.spacing(3),
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Users = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const { addUserLoading, addUserError } = useSelector(
    (state) => state.shareReducer
  );

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [hasFullAccess, setHasFullAccess] = useState(false);

  const handleSubmit = () => {
    // dispatch(addUser({ name, username,password,hasFullAccess }));
    setPassword("");
    setName("");
    setUsername("");
    setHasFullAccess(false);
  };

  return (
    <>
      <PageHeader
        title="All Users"
        subTitle="View, add or delete users"
        icon={<PeopleOutlineTwoTone fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <div className={classes.addForm}>
              {addUserError && addUserError.length > 0 ? (
                <>
                  <AlertTitle>Error!</AlertTitle>
                  <Alert severity="error">
                    <AlertTitle>Error!</AlertTitle>
                    {addUserError}
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
                      value={username}
                      variant="outlined"
                      label="Username"
                      name="username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      value={password}
                      variant="outlined"
                      label="Password"
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      component="fieldset"
                      className={classes.formControl}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={hasFullAccess}
                              onChange={(e) =>
                                setHasFullAccess(e.target.checked)
                              }
                              name="Full Access"
                            />
                          }
                          label="Gilad Gray"
                        />
                      </FormGroup>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="primary"
                      size="medium"
                      className={classes.button}
                      onClick={handleSubmit}
                      disabled={addUserLoading ? true : false}
                    >
                      {addUserLoading ? "loading.." : "Add"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <UsersTable
              users={[
                {
                  name: "Martin Mwangi",
                  username: "marvilleoo1",
                  hasFullAccess: true,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Users;
