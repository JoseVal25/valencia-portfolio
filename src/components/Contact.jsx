import styles from "../styles/Contact.module.css";

const Contact = () => {
  function handleOnClick(e) {
    window.location = "mailto:javhvac25@outlook.com";
  }

  return (
    <div id="contact" className={styles.container}>
      <h4>What's Next?</h4>
      <h2>Get In Touch</h2>
      <p>
        Currently looking for new opportunities as a front-end developer, my
        inbox is always open. Whether you have a question or just want to say
        hi, I’ll try my best to get back to you!
      </p>
      <button onClick={handleOnClick}>Say Hello</button>
    </div>
  );
};

export default Contact;
