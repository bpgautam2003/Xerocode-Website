import React, { useEffect , useState} from "react";
import { Button, Typography, AppBar } from "@mui/material";
import XerocodeLogo from "../assets/XerocodeLogo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <header className={navbarClasses.join(" ")}>
      <img src={XerocodeLogo} alt="logo"></img>
      <div className="nav-item">
        <h3>Home</h3>
        <h3>Team</h3>
        <h3>Contact</h3>
        <h3>Career</h3>
      </div>
      <Button
        variant="outlined"
        color="primary"
        style={{
          textTransform: "none",
          fontSize: "18px",
          borderRadius: "10px",
        }}
      >
        Sign in
      </Button>
    </header>
  );
};

export default Navbar;
