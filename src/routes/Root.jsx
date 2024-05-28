// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

// import { Outlet, useNavigate } from "react-router-dom";

// const drawerWidth = 240;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate();
//   const [selectedRoute, setSelectedRoute] = React.useState(null);
 
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       {isSignedIn ? (
//         <>
//           <CssBaseline />
//           <AppBar
//             position="fixed"
//             open={open}
//             sx={{ backgroundColor: "#673AB7" }}
//           >
//             <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//               <Box display={"flex"} alignItems={"center"}>
//                 <IconButton
//                   color="inherit"
//                   aria-label="open drawer"
//                   onClick={handleDrawerOpen}
//                   edge="start"
//                   sx={{ mr:{md:2}, ...(open && { display: "none" }) }}
//                 >
//                   <MenuIcon />
//                 </IconButton>
//                 <Typography
//                   variant="h6"
//                   noWrap
//                   component="div"
//                   style={{
//                     fontFamily: "Source Serif Pro, serif",
//                     fontWeight: "bold",
//                   }}
//                   sx={{fontSize: { xs: '0.9rem',md:'1rem' }}}
//                 >
//                   takeleap.
//                 </Typography>
//               </Box>
//               <>
//                 <Button
//                   variant="outlined"
//                   startIcon={<PersonIcon />}
//                   onClick={handleUsernameClick}
//                   sx={{
//                     color: "#673AB7", // Text color
//                     textTransform: "none",
//                     backgroundColor: "white", // Background color
//                     fontSize: { xs: '0.8rem',md:'1rem' },
//                     // Hover styles
//                     "&:hover": {
//                       backgroundColor: "#fff", // Keep background color white on hover
//                       borderColor: "#673AB7", // Keep border color
//                       color: "#673AB7", // Keep text color
//                     },
//                   }}
//                 >
//                   {user?.firstName ? user.firstName : "Username"}
//                 </Button>
//                 <Menu
//                   anchorEl={anchorEl}
//                   open={Boolean(anchorEl)}
//                   onClose={handleClose}
//                   MenuListProps={{
//                     "aria-labelledby": "basic-button",
//                   }}
//                 >
//                   <MenuItem
//                     onClick={handleLogout}
//                     sx={{
//                       fontSize: "0.875rem", // Smaller font size
//                       minHeight: "32px", // Smaller height
//                       padding: "0px 12px", // Reduced padding
//                     }}
//                   >
//                     Logout
//                   </MenuItem>{" "}
//                 </Menu>
//               </>
//             </Toolbar>
//           </AppBar>

//           <Drawer
//             sx={{
//               width: drawerWidth,
//               flexShrink: 0,
//               "& .MuiDrawer-paper": {
//                 width: drawerWidth,
//                 boxSizing: "border-box",
//                 backgroundColor: "#673AB7",
//               },
//             }}
//             variant="permanent"
//             anchor="left"
//             open={open}
//           >
//             <DrawerHeader>
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === "ltr" ? (
//                   <ChevronLeftIcon />
//                 ) : (
//                   <ChevronRightIcon />
//                 )}
//               </IconButton>
//             </DrawerHeader>
//             <Divider />
//             <List>
//               <ListItem
//                 key={"Dashboard"}
//                 // onClick={() => navigate("/mentorDashboard")}
//                 onClick={() => {
//                   navigate("/mentorDashboard");
//                   setSelectedRoute("Dashboard"); // Update selected route on click
//                 }}
//                 disablePadding
//                 sx={{
//                   color: selectedRoute === "Dashboard" ? "#673AB7" : "#fff", // Set text color based on selected route
//                   backgroundColor:
//                     selectedRoute === "Dashboard" ? "#fff" : "#673AB7", // Set background color based on selected route
//                   "&:hover": {
//                     // Maintain hover styles
//                     backgroundColor: "#fff",
//                     color: "#673AB7",
//                   },
//                 }}
//               >
//                 <ListItemButton>
//                   <ListItemIcon sx={{ color: "inherit" }}>
//                     <DashboardIcon />
//                   </ListItemIcon>
//                   <ListItemText primary={"Dashboard"} />
//                 </ListItemButton>
//               </ListItem>

//               <ListItem
//                 key={"Profile"}
//                 onClick={() => {
//                   navigate("/mentorForm");
//                   setSelectedRoute("Profile"); // Update selected route on click
//                 }}
//                 disablePadding
//                 sx={{
//                   color: selectedRoute === "Profile" ? "#673AB7" : "#fff",
//                   backgroundColor:
//                     selectedRoute === "Profile" ? "#fff" : "#673AB7",
//                   "&:hover": {
//                     backgroundColor: "#fff",
//                     color: "#673AB7",
//                   },
//                 }}
//               >
//                 <ListItemButton>
//                   <ListItemIcon sx={{ color: "inherit" }}>
//                     <PersonIcon />
//                   </ListItemIcon>
//                   <ListItemText primary={"Profile"} />
//                 </ListItemButton>
//               </ListItem>
//             </List>
//           </Drawer>
//           <Main open={open}>
//             <DrawerHeader />
//             <Outlet />
//           </Main>
//         </>
//       ) : (
//         <Box
//           display="flex"
//           flexDirection="column"
//           justifyContent="center"
//           alignItems="center"
//           width={'100%'}
//         >
//           <Typography variant="h6" sx={{ mb: 3 }}>
//             Please sign-in to continue
//           </Typography>
//           <Button size="small" variant="contained" onClick={() => navigate("/signin")}>
//             SignIn
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// }
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
      <Toolbar sx={{ backgroundColor: "#673AB7" }} >
        <Typography variant="h6" noWrap 
        style={{
                    fontFamily: "Source Serif Pro, serif",
                    fontWeight: "bold",
                    color:'white'
                  }}>
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
          // sx={{
          //   color: selectedRoute === "Dashboard" ? "#673AB7" : "#fff", // Set text color based on selected route
          //   backgroundColor:
          //     selectedRoute === "Dashboard" ? "#fff" : "#673AB7", // Set background color based on selected route
          //   "&:hover": {
          //     // Maintain hover styles
          //     backgroundColor: "#fff",
          //     color: "#673AB7",
          //   },
          // }}
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={"Dashboard"} />
          </ListItemButton>
        </ListItem>
        <ListItem
          key={"Profile"}
          onClick={() => {
            navigate("/mentorForm");
            setSelectedRoute("Profile"); // Update selected route on click
          }}
          disablePadding
          // sx={{
          //   color: selectedRoute === "Profile" ? "#673AB7" : "#fff",
          //   backgroundColor:
          //     selectedRoute === "Profile" ? "#fff" : "#673AB7",
          //   "&:hover": {
          //     backgroundColor: "#fff",
          //     color: "#673AB7",
          //   },
          // }}
        >
          <ListItemButton>
            <ListItemIcon sx={{ color: "inherit" }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={"Profile"} />
          </ListItemButton>
        </ListItem>
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
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
          <Box sx={{display:'flex',alignItems:'center'}}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: { xs: 0, md: 2 }, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography fontWeight={'bold'}>
            {selectedRoute}
        </Typography>
        </Box>
               <Button
                  variant="outlined"
                  startIcon={<PersonIcon />}
                  onClick={handleUsernameClick}
                  sx={{
                    color: "#673AB7", // Text color
                    textTransform: "none",
                    backgroundColor: "white", // Background color
                    fontSize: { xs: '0.8rem',md:'0.9rem' },
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
