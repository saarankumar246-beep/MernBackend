import { useState } from "react";

function ToggleMode() {
  const [dark, setDark] = useState(false);

  return (
    <div style={{ background: dark ? "black" : "white", color: dark ? "white" : "black" }}>
      <h2>{dark ? "Dark Mode" : "Light Mode"}</h2>

      <button onClick={() => setDark(!dark)}>
        Toggle Mode
      </button>
    </div>
  );
}

export default ToggleMode