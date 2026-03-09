function StudentList({ students }) {
  return (
    <div>
      {students.map((student, index) => {
        const result = student.marks >= 40 ? "Pass" : "Fail";

        return (
          <div key={index} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
            <h3>Name: {student.name}</h3>
            <p>Marks: {student.marks}</p>
            <p>Result: {result}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StudentList;