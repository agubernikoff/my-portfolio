import React from "react";
import NavBar from "./NavBar";
import Homepage from "./Homepage";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
