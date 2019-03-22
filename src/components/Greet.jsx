import React from "react";
import Footer from "./Footer";
export default function Greet(props) {
  return (
    <article>
      <h1>Hi {props.name}</h1>
      <Footer whatever={props.email} />
    </article>
  );
}
