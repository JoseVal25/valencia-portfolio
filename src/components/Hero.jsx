import React from "react";
import styles from "../styles/Hero.module.css";

const Home = () => {
  return (
    <div id="hero" className={styles.container}>
      <div>
        <div className={`thing ${styles.myName}`}>
          <h6>Hi, my name is</h6>
        </div>
        <div className={`thing ${styles.name}`}>
          <h1>Jose Valencia.</h1>
        </div>
        <div className={`thing ${styles.whatIDo}`}>
          <h1>
            I build <span>things</span> for the web.
          </h1>
        </div>
        <div className={`thing ${styles.paragraph}`}>
          <p>
            I’m a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building accessible, human-centered products at{" "}
            <span>Upstatement</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
