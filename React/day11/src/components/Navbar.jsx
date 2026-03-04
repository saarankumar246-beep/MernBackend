import React from "react";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>My Website</h2>
      <ul style={styles.ul}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    backgroundColor: "#222",
    color: "white"
  },
  ul: {
    display: "flex",
    listStyle: "none",
    gap: "20px"
  }
};

export default Navbar;