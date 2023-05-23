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
            I am a passionate and dedicated individual who embarked on a journey
            into the world of web development through a full stack bootcamp.
            Eager to expand my knowledge and skills, I didn't stop there and
            continued my education as a self-taught developer.
          </p>
          <p>
            Through this remarkable journey, I have gained a solid foundation in
            various programming languages, frameworks, and technologies,
            allowing me to develop robust and user-friendly web applications.
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
