import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import { userLogin } from "../../_actions/userActions";
import { useHistory } from "react-router";

const Login = () => {
  const { user, loading, error } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [values, setValues] = useState({ username: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  let history = useHistory();

  useEffect(() => {
    if (user._id) {
      history.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user._id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin(values));
  };

  return (
    <Grid container spacing={0} justify="center" direction="row">
      <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={2}
          className="login-form"
        >
          <Paper variant="elevation" elevation={2} className="login-background">
            <Grid item>
              {error && (
                <Typography
                  style={{ margin: "20px", color: "red" }}
                  component="h1"
                  variant="h5"
                >
                  {error}
                </Typography>
              )}
              <Typography
                style={{ margin: "20px" }}
                component="h1"
                variant="h5"
              >
                Sign in
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      type="text"
                      placeholder="Username"
                      fullWidth
                      name="username"
                      variant="outlined"
                      value={values.username}
                      onChange={handleChange}
                      required
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      variant="outlined"
                      value={values.password}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className="button-block"
                      disabled={loading ? true : false}
                    >
                      {loading ? "Loading...." : "Submit"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Login;
