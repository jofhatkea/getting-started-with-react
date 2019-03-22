import React from "react";
import ReactDOM from "react-dom";
const data = [
  {
    name: "Jonas",
    email: "jofh@kea.dk",
    kids: 3,
    skills: true
  },
  {
    name: "Martin",
    email: "mabe@kea.dk",
    kids: 2,
    skills: true
  }
];

function App() {
  const greetings = data.map(person => <Greet {...person} />);
  return <section>{greetings}</section>;
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
