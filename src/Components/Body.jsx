import { Button } from "@mui/material";
import React from "react";
import img1 from "../assets/img1.png";
import l1 from "../assets/l1.png";
import l2 from "../assets/l2.png";
import l3 from "../assets/l3.png";
import l4 from "../assets/l4.png";
import l5 from "../assets/l5.png";
import l6 from "../assets/l6.png";
import l7 from "../assets/l7.png";
import l8 from "../assets/l8.png";
import Frame from "../assets/Frame.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

const Body = () => {
  return (
    <>
      <section className="container">
        <div className="intro">
          <h2 data-aos="fade-right">Build your audience and grow your brand</h2>
          <p data-aos="fade-left">
            no more, no less. Deploy from our single pane of glass, manage them
            with ease and scale up as fast as your workload grows.
          </p>
          <button
            style={{
              textTransform: "none",
              fontSize: "18px",
              backgroundColor: "#0c5bc6",
              color: "white",
              height: "50px",
              width: "170px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          >
            Get Started Now
          </button>
        </div>
        <div className="img1">
          <img src={img1}></img>
        </div>
      </section>
      <section className="logos">
        <div className="logos-1">
          <img src={l2}></img>
          <img src={l3}></img>
          <img src={l4}></img>
          <img src={l1}></img>
        </div>
        <div className="logos-1">
          <img src={l2}></img>
          <img src={l3}></img>
          <img src={l4}></img>
          <img src={l1}></img>
        </div>
      </section>

      <section className="features-container">
        <button className="feature-btn" data-aos="zoom-in-up">
          Features
        </button>
        <h3 data-aos="fade-right">
          <span>Save 1000s</span> of expensive coder hours
        </h3>
        <p data-aos="fade-left">
          With cloud native technologies, we assist in modernising
          infrastructure and applications for resilience and scalability.
        </p>
        <div className="feature-bar">
          <button className="feature-btn2">Apps</button>
          <button className="feature-btn2">App Configs</button>
          <button className="feature-btn2">Pipelines</button>
          <button className="feature-btn2">Infra creation</button>
          <button className="feature-btn2">Cost</button>
          <button className="feature-btn2">Add-Ons</button>
          <button className="feature-btn2">Monitoring</button>
          <button className="feature-btn2">Connections</button>
        </div>
        <img src={Frame}></img>
      </section>

      <section className="diff-btwn">
        <div className="with" data-aos="fade-right">
          <h2>Without Xerocodee</h2>
          <img src={img2}></img>
        </div>
        <div className="with" data-aos="fade-left">
          <h2>With Xerocodee</h2>
          <img src={img3}></img>
        </div>
      </section>

      <section className="scaling" data-aos="zoom-in-up">
        <h2>
          Self serve infrastructure platform for <span>scaling teams</span>
        </h2>
        <div className="card-container">
          <div className="card">
            <div className="logo-container">
              <img src={l5}></img>
            </div>
            <div className="logo-name">
              <h3>Infrastructure</h3>
              <p>Automated Cloud Infrastructure Workflow</p>
            </div>
          </div>
          <div className="card">
            <div className="logo-container">
              <img src={l7}></img>
            </div>
            <div className="logo-name">
              <h3>Security</h3>
              <p>Modern Secure Infrastructure Approach</p>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <div className="logo-container">
              <img src={l6}></img>
            </div>
            <div className="logo-name">
              <h3>Networking</h3>
              <p>Flexible Secure Application Connectivity</p>
            </div>
          </div>
          <div className="card">
            <div className="logo-container">
              <img src={l8}></img>
            </div>
            <div className="logo-name">
              <h3>Applications</h3>
              <p>Automate Application Deployment for Agility</p>
            </div>
          </div>
        </div>
      </section>
      <section className="blue-container">
        <h2>
          Modernize apps, infrastructure with cloud native tech for resilience,
          scalability.
        </h2>
        <div className="screen">
          <img src={img4}></img>
          <div className="screen-text">
            <h3>Real-time risk monitoring</h3>
            <p>
              Real-time risk monitoring across your infrastructure and
              application ecosystem will help you maintain ongoing compliance
              with more than 05+ different regulatory standards.
            </p>
          </div>
        </div>
        <div className="screen-1">
          <div className="screen-text1">
            <h3>Collaborative workflows</h3>
            <p>
              Share artefacts easily and collaborate with team members,
              auditors, and pen testers via automated procedures. To manage
              daily compliance with automatic notifications and reminders,
              create, assign, and track tasks.
            </p>
          </div>
          <img src={img5}></img>
        </div>
      </section>
    </>
  );
};

export default Body;
