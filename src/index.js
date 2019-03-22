import React from "react";
import ReactDOM from "react-dom";
import Greet from "./components/Greet";
import { data, siteName } from "./data/data";

function App() {
  const greetings = data.map(person => <Greet {...person} />);
  return (
    <section>
      <h1>{siteName}</h1>
      {greetings}
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
//Passing down props
