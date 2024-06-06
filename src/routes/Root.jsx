import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";

import { useUser, useClerk } from "@clerk/clerk-react";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [selectedRoute, setSelectedRoute] = React.useState(null);
  const { isSignedIn, user, isLoaded } = useUser();
  const { signOut } = useClerk();
  const navigate = useNavigate();

  const [listOpen, setListOpen] = React.useState(true);

  const handleListExpand = () => {
    setListOpen(!listOpen);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleUsernameClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLogout = async () => {
    handleClose();
    try {
      await signOut();
      navigate("/signin"); // Redirect to sign-in page after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar sx={{ backgroundColor: "#673AB7" }}>
        <Typography
          variant="h6"
          noWrap
          style={{
            fontFamily: "Source Serif Pro, serif",
            fontWeight: "bold",
            color: "white",
          }}
        >
          takeleap.
        </Typography>
      </Toolbar>
      <List>
        <ListItem
          key={"Dashboard"}
          onClick={() => {
            navigate("/mentorDashboard");
            setSelectedRoute("Dashboard"); // Update selected route on click
          }}
          disablePadding
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Profile"} onClick={handleListExpand} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
            {listOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>

        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 7 }}>
            <ListItem
              key={"Personal"}
              onClick={() => {
                navigate("/personalMentorForm");
                setSelectedRoute("Personal Mentor Form");
              }}
              disablePadding
            >
              <ListItemButton>
                {/* <ListItemIcon sx={{ color: "inherit" }}>
                <DashboardIcon />
              </ListItemIcon> */}
                <ListItemText primary={"Personal"} />
              </ListItemButton>
            </ListItem>

            <ListItem
              key={"Academic"}
              onClick={() => {
                navigate("/academicMentorForm");
                setSelectedRoute("Academic Mentor Form");
              }}
              disablePadding
            >
              <ListItemButton>
                {/* <ListItemIcon sx={{ color: "inherit" }}>
                <DashboardIcon />
              </ListItemIcon> */}
                <ListItemText primary={"Academic"} />
              </ListItemButton>
            </ListItem>

            <ListItem
              key={"Professional"}
              onClick={() => {
                navigate("/professionalMentorForm");
                setSelectedRoute("Professional Mentor Form");
              }}
              disablePadding
            >
              <ListItemButton>
                {/* <ListItemIcon sx={{ color: "inherit" }}>
                <DashboardIcon />
              </ListItemIcon> */}
                <ListItemText primary={"Professional"} />
              </ListItemButton>
            </ListItem>

            <ListItem
              key={"Mentorship"}
              onClick={() => {
                navigate("/mentorshipMentorForm");
                setSelectedRoute("Mentorship Mentor Form");
              }}
              disablePadding
            >
              <ListItemButton>
                {/* <ListItemIcon sx={{ color: "inherit" }}>
                <DashboardIcon />
              </ListItemIcon> */}
                <ListItemText primary={"Mentorship"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: { xs: 0, md: 2 }, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography fontWeight={"bold"}>{selectedRoute}</Typography>
          </Box>
          <Button
            variant="outlined"
            startIcon={<PersonIcon />}
            onClick={handleUsernameClick}
            sx={{
              color: "#673AB7", // Text color
              textTransform: "none",
              backgroundColor: "white", // Background color
              fontSize: { xs: "0.8rem", md: "0.9rem" },
              // Hover styles
              "&:hover": {
                backgroundColor: "#fff", // Keep background color white on hover
                borderColor: "#673AB7", // Keep border color
                color: "#673AB7", // Keep text color
              },
            }}
          >
            {user?.firstName ? user.firstName : "Username"}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleLogout}
              sx={{
                fontSize: "0.875rem", // Smaller font size
                minHeight: "32px", // Smaller height
                padding: "0px 12px", // Reduced padding
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
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
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
