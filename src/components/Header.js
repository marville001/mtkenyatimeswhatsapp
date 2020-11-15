import React from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { logoutUser } from "../_actions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
    color: "#fff",
    display: "inline-block",
    fontSize: "15px",
    textDecoration: "none",
    margin: "20px",
  },
  menuLinks: {
    display: "flex",
    justifyFlex: "flex-start",
    alignItems: "center",
    width: "100%",
  },
  logBtn: {
    marginLeft: "auto",
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar>
          {!matches && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          )}
          <div className={classes.menuLinks}>
            <Link to="/" className={classes.link}>
              Share
            </Link>
            <Link to="/mails" className={classes.link}>
              All Mails
            </Link>
            <Link to="/users" className={classes.link}>
              Users
            </Link>
            <Button
              onClick={() => dispatch(logoutUser())}
              className={classes.logBtn}
              color="inherit"
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
