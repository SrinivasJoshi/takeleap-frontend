import { Link } from "react-router-dom";
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import logo from "./image.png";

const App = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "75vh" }}
    >
      <AppBar position="static" sx={{ width: "100%", backgroundColor: "#e8e4fc" }}>
  <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
    <Typography
      variant="h5"
      noWrap
      component="div"
      sx={{ color: "#7339C9", fontWeight: "bold" }}
    >
      takeleap.
    </Typography>
    <div sx={{ display: "flex", gap: 3 }}>
    <Button variant="text" sx={{ color: "#7339C9" }}>
        Offerings
      </Button>
      <Button variant="text" sx={{ color: "#7339C9" }}>
        About Us
      </Button>
      <Link to="/sign-in">
        <Button variant="contained" sx={{ backgroundColor: "#7339C9", color: "white" }}>
          Sign In
        </Button>
      </Link>
    </div>
  </Toolbar>
</AppBar>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="topleap Logo"
          width="450px"
          height="320px"
          style={{ marginLeft: "40px" }}
        />
      </div>
      <div style={{
  position: 'absolute',
  width: '618px',
  height: '481px',
  top: '206px',
  left: '718px',
  fontSize: '30px', /* Increased font size here */
  textAlign: 'center' /* Center align the text for better readability */
}}>
  Craft a Winning Application With the Guidance from Mentors Who've Been There!
</div>
<div style={{
  position: 'absolute',
  width: '618px',
  height: '481px',
  top: '280px',
  left: '718px',
  fontSize: '30px', 
  textAlign: 'center',
  color: '#7339C9',
  fontWeight: 'bold'
}}>
  Sign Up Now!
</div>

    </div>
  );
};

export default App;
