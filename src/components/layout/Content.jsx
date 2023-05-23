import React from "react";
import Hero from "../Hero.jsx";
import styles from "../../styles/Content.module.css";
import AboutMe from "../AboutMe.jsx";
import Work from "../Work.jsx";
import Contact from "../Contact.jsx";

const Content = () => {
  return (
    <div id="content" className={styles.content}>
      {/* <Home /> */}
      <Hero />
      {/* ABOUT */}
      <AboutMe />
      {/* WORK */}
      <Work />
      {/* CONTACT */}
      <Contact />

      <footer>
        <a href="#" target="_blank">
          .: Built by <span className="highlight">Valencia</span> Jose - 2023 :.
        </a>
      </footer>
    </div>
  );
};

export default Content;
