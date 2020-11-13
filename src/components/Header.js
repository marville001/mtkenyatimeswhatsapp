import React from "react";
import { useDispatch } from "react-redux";
import {
  AppBar,
  Grid,
  Avatar,
  Menu,
  MenuItem,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Link } from "react-router-dom";
import { logoutUser } from "../_actions";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1), //1===8,2===16
    },
  },
  link: {
    textDecoration: "none",
    color: "#000",
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm></Grid>
          <Grid item>
            <Avatar
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              style={{ cursor: "pointer" }}
            >
              <AccountCircleIcon />
            </Avatar>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link className={classes.link} to="/">
                  Profile
                </Link>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  dispatch(logoutUser());
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
