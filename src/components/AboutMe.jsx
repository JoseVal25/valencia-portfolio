import React, { useRef, useMemo } from "react";
import styles from "../styles/AboutMe.module.css";
import profile from "../assets/images/heroPic.jpg";
import Title from "./Title";

const AboutMe = () => {
  return (
    <div id="about" className={styles.container}>
      <Title number={"01."} title={"About me"} />
      <div className={styles.content}>
        <div className={styles.leftside}>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>ThreeJS</li>
            <li>SQL</li>
            <li>Typescript</li>
            <li>Blender</li>
            <li>.NET</li>
          </ul>
        </div>
        <div className={styles.rightside}>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
