import React from "react";
import Footer from "./Footer";
import Skills from "./Skills";
export default function Greet(props) {
  const kids = props.kids !== 1 ? "kids" : "kid";

  return (
    <article className="person">
      <h1>Hi {props.name}</h1>
      <p>
        {props.name} has {props.kids} {kids}
      </p>
      {props.skills.length > 0 && <Skills skills={props.skills} />}
      <Footer whatever={props.email} />
    </article>
  );
}
