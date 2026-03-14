import { useState } from "react";

function StudentResult() {
  const [student, setStudent] = useState({
    name: "Arun",
    marks: 80,
    result: ""
  });

  const checkResult = () => {
    const res = student.marks >= 50 ? "Pass" : "Fail";

    setStudent({ ...student, result: res });
  };

  return (
    <div>
      <h2>{student.name}</h2>
      <h2>{student.marks}</h2>
      <h2>{student.result}</h2>

      <button onClick={checkResult}>
        Check Result
      </button>
    </div>
  );
}

export default StudentResult