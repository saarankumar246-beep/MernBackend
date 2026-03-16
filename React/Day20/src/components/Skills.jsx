import { useState } from "react";

function Skills() {

  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const addSkill = () => {
    setSkills((prev) => [...prev, "JavaScript"]);
  };

  return (
    <div>
      <h2>Skills</h2>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}

export default Skills;