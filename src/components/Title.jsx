import React from "react";
import styles from "../styles/Title.module.css";

const Title = ({ title, number }) => {
  return (
    <div className={styles.title}>
      <h3 data-count={number}>{title}</h3>
    </div>
  );
};

export default Title;
