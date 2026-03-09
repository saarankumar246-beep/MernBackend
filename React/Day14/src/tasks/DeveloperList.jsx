function DeveloperList({ developers }) {
  return (
    <div>
      {developers.map((dev, index) => (
        <div key={index} style={{border:"1px solid #ccc", padding:"10px", margin:"10px"}}>
          <h3>{dev.name}</h3>

          <ul>
            {dev.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

        </div>
      ))}
    </div>
  );
}

export default DeveloperList;