import React from "react";
import Plane from "../assets/Plane.png";
import { Button } from "@mui/material";

const Subscribe = () => {
  return (
    <section className="subscribe-container" data-aos="zoom-in">
      <img src={Plane}></img>
      <h2>Subscribe to Our Newsletter & get the Coupon code.</h2>
      <p>All your information is completely confidential</p>
      <div className="subscribe-form">
        <input type="text" placeholder="Type your email" />
        <Button variant="contained">Subscribe</Button>
      </div>
    </section>
  );
};

export default Subscribe;
