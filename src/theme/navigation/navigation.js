import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ContactsIcon from "@mui/icons-material/Contacts";
import React, { memo, useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../navigation/styles.scss";
import { ThemeContext } from "../theme/ThemeContext";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "News"];
const icons = {
  Home: HomeIcon,
  About: InfoIcon,
  Contact: ContactsIcon,
  News: NewspaperIcon,
};
const Navigation = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { theme, toggle } = useContext(ThemeContext);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    toggle();
  };
  const drawer = (
    <nav
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MOVIE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <nav sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MOVIE
          </Typography>
          <nav sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                sx={{ color: "#fff" }}
                style={{ color: theme.color }}
              >
                {React.createElement(icons[item], { sx: { marginRight: 1 } })}
                {item}
              </Button>
            ))}
          </nav>
          {/* <input type="checkbox" onChange={handleChange} /> */}
          <div className="switch_nav">
            <label className="switch">
              <input type="checkbox" onClick={handleChange} />
              <span
                className="slider mode"
                href="#switchmode"
                style={{
                  outline: "none",
                }}
                data-testid="toggle-theme-btn"
              ></span>
            </label>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </nav>
  );
};

export default memo(Navigation);
