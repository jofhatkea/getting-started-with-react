import React from "react";
import ReactDOM from "react-dom";
import Greet from "./components/Greet";
import data from "./data/data";

function App() {
  const greetings = data.map(person => <Greet {...person} />);
  return <section>{greetings}</section>;
}

ReactDOM.render(<App />, document.getElementById("root"));
//Passing down props
