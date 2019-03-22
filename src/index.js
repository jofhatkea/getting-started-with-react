import React from "react";
import ReactDOM from "react-dom";
function App() {
  return (
    <section>
      <Greet name="Jonas" email="jofh@kea.dk" />
      <Greet name="Peter" email="petl@kea.dk" />
    </section>
  );
}
function Greet(props) {
  return (
    <article>
      <h1>Hi {props.name}</h1>
      <Footer whatever={props.email} />
    </article>
  );
}
function Footer(props) {
  return <p>{props.whatever}</p>;
}
ReactDOM.render(<App />, document.getElementById("root"));
//Passing down props
