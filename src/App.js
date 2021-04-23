import React, { useState } from "react";
import "./style.css";
import { BrowserRouter, Link, Route } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <h1>Home Component</h1>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h1>Home Component</h1>
    </>
  );
};
const Contact = () => {
  return <h1>Contact</h1>;
};
const About = () => {
  return <h1>About</h1>;
};

export default function App() {
  const [currentload, setcurrentloadt] = useState(0);
  var elemt = <About />;
  return (
    <div>
      <div>{currentload}</div>
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/">
          <Contact />
        </Route>
        <Route path="/home">{elemt}</Route>
      </BrowserRouter>
    </div>
  );
}
