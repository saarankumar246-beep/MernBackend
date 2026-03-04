import React from "react";

function Services() {
  return (
    <section style={styles.section}>
      <h2>Our Services</h2>
      <div style={styles.cardContainer}>
        <div style={styles.card}>Web Development</div>
        <div style={styles.card}>UI/UX Design</div>
        <div style={styles.card}>SEO Optimization</div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    textAlign: "center",
    backgroundColor: "#f9f9f9"
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px"
  },
  card: {
    padding: "20px",
    border: "1px solid #ddd",
    width: "150px"
  }
};

export default Services;