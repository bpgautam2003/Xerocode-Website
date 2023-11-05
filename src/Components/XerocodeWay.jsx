import React from "react";
import Rocket from "../assets/Rocket.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";
import img131 from "../assets/img131.png";
import img132 from "../assets/img132.png";
import Testimonial from "./Testimonial";
import Subscribe from "./Subscribe";
import Slider from "../Components/Slider"

const XerocodeWay = () => {
  return (
    <div className="xerocode-container">
      <div className="heading" data-aos="zoom-in">
        <h2>The XeroCode Way</h2>
        <img src={Rocket}></img>
      </div>
      <div className="first-part">
        <div className="number" data-aos="zoom-out">
          <h2>01</h2>
        </div>
        <div className="body-text" data-aos="zoom-out">
          <h2>Self serve Infrastructure</h2>
          <p>
            Accelerate by self-serving production-ready infrastructure and
            customize as you scale.
          </p>
        </div>
        <div className="body-content">
          <div className="types">
            <button className="feature-btn3">Your Cloud</button>
            <button className="feature-btn3">Infra Components</button>
            <button className="feature-btn3">Self-hosted Apps</button>
          </div>
          <div className="description">
            <img src={img6} data-aos="fade-right"></img>
            <div className="desc-text" data-aos="fade-left">
              <h3>In Your Cloud</h3>
              <p>
                Your infrastructure runs on your AWS or GCP account. Never get
                locked in. Infinitely scalable.Azure support coming soon)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="first-part">
        <div className="number" data-aos="zoom-out">
          <h2>02</h2>
        </div>
        <div className="body-text" data-aos="zoom-out">
          <h2>Deploy applications, fast!</h2>
          <p>
            Set up automated deployments of your application in 5 minutes and
            get back to building stuff that matters.
          </p>
        </div>

        <div className="description">
          <img src={img7} data-aos="fade-right"></img>
          <div className="desc-text" data-aos="fade-left">
            <h3>Configurable Build and Deploy pipelines</h3>
            <p>
              Portable builds powered by Dagger and continuous deployments
              powered by ArgoCD - you gain more control of your pipelines with
              composable custom, build, and deploy stages.
            </p>
          </div>
        </div>
        <div className="description">
          <div className="desc-text" data-aos="fade-right">
            <h3>Push to Deploy</h3>
            <p>
              Just connect your repo with one click and push. Argonaut’s deep
              integration with GitHub Actions and GitLab pipelines build and
              deploy your code on every push.
            </p>
          </div>
          <img src={img8} data-aos="fade-left"></img>
        </div>
        <div className="description">
          <img src={img9} data-aos="fade-right"></img>
          <div className="desc-text" data-aos="fade-left">
            <h3>Multiple runtimes</h3>
            <p>
              Quickly deploy apps to containerized or serverless runtimes on
              your cloud and customize architectures to cost and performance
              constraints. Deploy on Kubernetes using dockerfiles or buildpacks,
              AWS Lambda, or GCP Cloud Functions.
            </p>
          </div>
        </div>
        <div className="description">
          <div className="desc-text" data-aos="fade-right">
            <h3>Scale infinitely</h3>
            <p>
              Every deployment is a zero-downtime deployment without you needing
              to choose custom configurations. You can easily configure
              auto-scaling, resource limits, and health-check URL to further
              optimize application uptime.
            </p>
          </div>
          <img src={img10} data-aos="fade-left"></img>
        </div>
      </div>
      <div className="first-part">
        <div className="number" data-aos="zoom-out">
          <h2>03</h2>
        </div>
        <div className="body-text" data-aos="zoom-out">
          <h2>Visibility into costs and metrics</h2>
          <p>
            Automatically track resource costs, across clouds, on every change.
            Visualize k8s pod metrics - CPU, Network, and Memory.
          </p>
        </div>

        <div className="description">
          <img src={img11} data-aos="fade-right"></img>
          <div className="desc-text" data-aos="fade-left">
            <h3>Customizable cost dashboards and reports</h3>
            <p>
              Stay on top of your cloud spending with custom cost dashboards and
              reports — sort, filter, and group by your various accounts,
              resources, and cloud regions.
            </p>
          </div>
        </div>
        <div className="description">
          <div className="desc-text" data-aos="fade-right">
            <h3>Preview infra costs</h3>
            <p>
              See the cost of a specific resource while choosing it (before
              provisioning). It saves you the hassle of searching through the
              complex pricing pages of your cloud provider or tools.
            </p>
          </div>
          <img src={img12} data-aos="fade-left"></img>
        </div>
        <div className="description">
          <div data-aos="fade-right">
            <img src={img131}></img>
            <img src={img132}></img>
          </div>
          <div className="desc-text" data-aos="fade-left">
            <h3>Observability from day one</h3>
            <p>
              Comes with built-in Kubernetes pod metrics. Easily plug in
              monitoring and observability tools of your choice, such as
              Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your
              application metrics from day 1.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default XerocodeWay;
