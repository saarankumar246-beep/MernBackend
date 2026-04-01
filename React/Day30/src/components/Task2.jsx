import React, { useState, useMemo } from "react";

const generateNames = () => {
  const names = [];
  for (let i = 1; i <= 5000; i++) {
    names.push("User " + i);
  }
  return names;
};

const Task2 = () => {
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(false);

  const names = useMemo(() => generateNames(), []);

  const filteredNames = useMemo(() => {
    console.log("Filtering running...");
    return names.filter((name) =>
      name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, names]);

  return (
    <div
      style={{
        background: dark ? "#222" : "#fff",
        color: dark ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>useMemo Search Filter</h2>

      <input
        type="text"
        placeholder="Search name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

      <ul>
        {filteredNames.slice(0, 20).map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Task2;