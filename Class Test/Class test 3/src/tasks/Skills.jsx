import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState(["HTML", "CSS"]);

  const addSkill = () => {
    setSkills([...skills, "JavaScript"]);
  };

  return (
    <div>
      {skills.map((skill, index) => (
        <p key={index}>{skill}</p>
      ))}

      <button onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}

export default Skills