import React from "react";
import Title from "./Title";
import styles from "../styles/Work.module.css";
import Project from "./Project";
import threedseller from "../assets/images/threedseller.png";
import { project1Technologies } from "../3DSeller/technologies.jsx";

const Work = () => {
  return (
    <div id="work" className={styles.container}>
      <Title number={"02."} title={"Projects I've Work On"} />
      <article>
        <Project
          onLeft={true}
          href={"https://3dseller.vercel.app/"}
          image={threedseller}
          title={"3DSeller"}
          description={
            "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm."
          }
          technologies={project1Technologies}
        />
      </article>
    </div>
  );
};

export default Work;
