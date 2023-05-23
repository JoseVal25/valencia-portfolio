import React from "react";
import styles from "../styles/Project.module.css";

const Project = ({
  image,
  href,
  title,
  description,
  technologies,
  github,
  githubLink,
  openExt,
  openExtLink,
  onLeft,
}) => {
  return (
    <>
      <div
        className={`${onLeft ? styles.leftside : styles.rightside} ${
          styles.imageContainer
        }`}
      >
        <a href={href} target="_blank">
          <img src={image} alt="Project First View" />
        </a>
      </div>
      <div
        className={`${onLeft ? styles.rightside : styles.leftside} ${
          styles.contentContainer
        }`}
      >
        <h4>Featured Project</h4>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={`${onLeft ? styles.ulRight : styles.ulLeft}`}>
          {technologies?.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Project;
