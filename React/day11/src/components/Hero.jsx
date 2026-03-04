import React from "react";

function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Welcome to My Website</h1>
      <p>This is a simple multi-component React page.</p>
      <button style={styles.btn}>Get Started</button>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#f4f4f4"
  },
  btn: {
    padding: "10px 20px",
    marginTop: "15px",
    cursor: "pointer"
  }
};

export default Hero;