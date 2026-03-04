import React from "react";

function About() {
  return (
    <section style={styles.section}>
      <h2>About Us</h2>
      <p>
        We are learning React by building multiple reusable components.
      </p>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    textAlign: "center"
  }
};

export default About;