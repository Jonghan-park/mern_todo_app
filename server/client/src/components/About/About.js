import React from "react";
import "./About.css";
import aboutImage from "../../assets/about.png";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="about">
        <img className="about_image" src={aboutImage} alt="About image" />

        <div className="aboutSection">
          <div className="aboutTitle">
            <h2>Todo App</h2>
          </div>
          <div className="aboutMain">
            <p>
              This is the <b>Todo</b> web application.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
