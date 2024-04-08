import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ListItemText from "@mui/material/ListItemText";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Outlet} from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import TaskIcon from '@mui/icons-material/Task';

const drawerWidth = 240;
const navItems = ['Project', 'Employee' , 'Task', 'Sprint'];


const IconArray=[<AssignmentIcon/>,<PersonIcon/>,<TaskIcon/>,<SafetyDividerIcon/>]
function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });

  const handleItemClick = (item) => {
    switch (item) {
      case "User":
        navigate("/Gym_Side/User");
        break;
      case "Trainer":
        navigate("/Gym_Side/Trainer");
        break;
      case "Exercise Master":
        navigate("/Gym_Side/ExerciseMaster");
        break;
      case "Dashboard":
        navigate("/Gym_Side/Dashboard");
        break;
      case "AssignExercise":
        navigate("/Gym_Side/AssignExercise");
        break;
      default:
        break;
    }
    handleDrawerToggle();
  };

  const drawer = (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          border: "3px",
        },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        
        <Typography variant="h6" sx={{ my: 2 }}>
          PMT
        </Typography>

        <List>
          {navItems.map((item,index) => (
            <ListItem key={item} disablePadding>
              <ListItemIcon
                  sx={{
                    minWidth: 0,
                    px:2,
                
                    justifyContent: 'center',
                  }}
                >
                  {IconArray[index]}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                </ListItemIcon>
              <ListItemButton onClick={() => handleItemClick(item)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
    <Box sx={{ display: "flex" }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav" position="static" color="primary">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              
           PMT
            </Typography>
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                style={{ width: "220px" }}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}> Profile </MenuItem>
                <MenuItem onClick={handleClose}> My Account </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  {" "}
                  Log Out{" "}
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      {drawer}
    </Box>
    <Box>

      <Outlet/>
    </Box>
      </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
