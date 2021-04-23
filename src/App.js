import React from "react";
import "./style.css";

const Home = () => {
  return <h1>home</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};
const About = () => {
  return <h1>About</h1>;
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Home />
      <Contact />
      <About />
    </div>
  );
}
