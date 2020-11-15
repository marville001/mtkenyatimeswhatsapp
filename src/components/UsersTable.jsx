import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Menu } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ArrowDropDown } from "@material-ui/icons";

const useStyles2 = makeStyles({
  table: {
    minWidth: 400,
  },
});

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ display: "inline-block" }}>
      <Avatar
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <ArrowDropDown />
      </Avatar>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem> */}
      </Menu>
    </div>
  );
};

export default function UsersTable({ users }) {
  const classes = useStyles2();

  return (
    <TableContainer component={Paper}>
      <Table
        className={classes.table}
        size="small"
        aria-label="custom pagination table"
      >
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Username
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              hasFullnAccess
            </TableCell>
            <TableCell style={{ width: 160 }} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {row.username}
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                {row.hasFullAccess ? "Yes" : "No"}
              </TableCell>
              <TableCell style={{ width: 100 }} align="right">
                <ActionMenu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
