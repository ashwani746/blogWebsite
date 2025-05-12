import {
  Badge,
  Divider,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { makeStyles } from "@material-ui/core";
import SideDrawer from "./SideDrawer";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  tagline: {
    fontSize: 20,
    textTransform: "uppercase",
    justifyContent: "center",
    fontFamily: "Montserrat",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Toolbar>
        <SideDrawer>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        </SideDrawer>
       
        <Typography color="inherit" className={classes.title} variant="h6">
          Blogg website
        </Typography>

        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <CircleNotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider/>
      <Toolbar className={classes.tagline}>
        
        express your emotions through words
      </Toolbar>
    </>
  );
};

export default Header;
