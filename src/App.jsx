import React from "react";
import Home from "./components/Home";
import Page1 from "./components/About";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import SectionBtn from "./components/SideNav";
import Navbar from "./components/Navbar";
import "./App.css"

function App() {
  let innerWidth = ((((window.innerWidth - 16) / (window.innerWidth)) * 100) + "vw");
  return (
    <div style={{ width: innerWidth, height: "100vh" }}>
      <Navbar />
      <SectionBtn />
      <Home />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}

export default App;
