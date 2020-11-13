import React from "react";
import {
  withStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import Image from "../images/l.png";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import { Link } from "react-router-dom";

const style = (theme) => ({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: "0px",
    width: "250px",
    height: "100%",
    backgroundColor: "#253053",
  },
  sideMenuHead: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: "auto%",
    overflow: "hidden",
    marginTop: "30px",
  },
  sideMenuHeadImg: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  list: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background,
    color: "#fff",
    marginTop: "30px",
  },
  link: {
    textDecoration: "none",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
  },
});

const SideMenu = (props) => {
  const { classes } = props;
  return (
    <div className={classes.sideMenu}>
      <div className={classes.sideMenuHead}>
        <img className={classes.sideMenuHeadImg} src={Image} alt="Contact" />
      </div>
      <div className={classes.list}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem button>
            <Link className={classes.link} to="/">
              <ListItemIcon>
                <InboxIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText style={{ color: "#fff" }} primary="Send Email" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link className={classes.link} to="/mails">
              <ListItemIcon>
                <DraftsIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText style={{ color: "#fff" }} primary="All Email" />
            </Link>
          </ListItem>
          {/* <ListItem button>
            <Link className={classes.link} to="/users">
              <ListItemIcon>
                <DraftsIcon style={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText style={{ color: "#fff" }} primary="Manage Users " />
            </Link>
          </ListItem> */}
        </List>
      </div>
    </div>
  );
};

export default withStyles(style)(SideMenu);
