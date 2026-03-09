import StudentList from "./StudentList";

function StudentContainer() {

  const students = [
    { name: "Arjun", marks: 75 },
    { name: "Rahul", marks: 35 },
    { name: "Priya", marks: 60 },
    { name: "Kiran", marks: 25 }
  ];

  return (
    <div>
      <h2>Student Results</h2>
      <StudentList students={students} />
    </div>
  );
}

export default StudentContainer;