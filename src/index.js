import React from "react";
import ReactDOM from "react-dom";
import Greet from "./components/Greet";
import { data, siteName } from "./data/data";

import "./index.css";

function App() {
  const greetings = data.map(person => <Greet key={person.id} {...person} />);
  return (
    <section>
      <h1 id="mainHeader">{siteName}</h1>
      {greetings}
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
//Passing down props
