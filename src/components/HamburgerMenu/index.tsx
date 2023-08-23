import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const HamburgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => () => {
    setOpen(isOpen);
  };

  return (
    <div>
      <AppBar position="static" color="transparent" elevation={0}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Drawer
        classes={{
          paper: "w-4/5",
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List>
          <ListItem button key="Desitnations">
            <ListItemText primary="Desitnations" />
          </ListItem>
          <ListItem button key="Hotels">
            <ListItemText primary="Hotels" />
          </ListItem>
          <ListItem button key="Flights">
            <ListItemText primary="Flights" />
          </ListItem>
          <ListItem button key="Bookings">
            <ListItemText primary="Bookings" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default HamburgerMenu;
