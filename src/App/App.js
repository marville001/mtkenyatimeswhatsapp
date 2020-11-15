import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";
import Home from "../pages/Home/Home";
import Mails from "../pages/Mails/Mails";
import Login from "../pages/Login/Login";
import Wrapper from "../pages/Wrapper";
import { Route, Switch } from "react-router-dom";
import { getProfileFetch } from "../_actions";
import { loadEmails } from "../_actions/shareActions";
import Users from "../pages/Users/Users";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: { default: "#f4f5fd" },
  },
});

const App = (props) => {
  // const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfileFetch());
    dispatch(loadEmails());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Wrapper>
              <Home />
            </Wrapper>
          )}
        />
        <Route
          exact
          path="/mails"
          component={() => (
            <Wrapper>
              <Mails />
            </Wrapper>
          )}
        />
        <Route
          exact
          path="/users"
          component={() => (
            <Wrapper>
              <Users />
            </Wrapper>
          )}
        />
        <Route exact path="/login" component={Login} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default App;
