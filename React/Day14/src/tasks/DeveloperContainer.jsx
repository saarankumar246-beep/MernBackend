import DeveloperList from "./DeveloperList";

function DeveloperContainer() {

  const developers = [
    { name: "John", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Arjun", skills: ["React", "Node.js", "MongoDB"] },
    { name: "Priya", skills: ["Python", "Django", "SQL"] }
  ];

  return (
    <div>
      <h2>Developers Skills</h2>
      <DeveloperList developers={developers} />
    </div>
  );
}

export default DeveloperContainer;