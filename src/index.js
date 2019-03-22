import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2019</p>
    </footer>
  );
};
function App() {
  return (
    <section>
      <h1>Hi mom</h1>
      <Greet />
      <Greet />
      <Greet />
      <Greet />
    </section>
  );
}
function Greet() {
  return (
    <div>
      <h2>Hello you</h2>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
