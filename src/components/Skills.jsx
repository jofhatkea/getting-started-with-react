import React from "react";
export default function Skills(props) {
  const skillList = props.skills.map((skill, index) => {
    return <li key={index}>{skill}</li>;
  });
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>{skillList}</ul>
    </section>
  );
}
