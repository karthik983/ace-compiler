import React from "react";
import Navbar from "./components/navbar";
import Editor from "./components/editor";
import "./App.css";

function App() {
  function onChange(newValue) {
    console.log(newValue);
  }
  return (
    <div className="App">
      <Navbar />
      <Editor />
    </div>
  );
}

export default App;
