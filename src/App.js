import React from "react";
import Navbar from "./components/navbar";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

function App() {
  function onChange(newValue) {
    console.log(newValue);
  }
  return (
    <div className="App">
      <Navbar />
      <AceEditor
        mode="javascript"
        theme="github"
        showPrintMargin={false}
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        wrapEnabled={true}
        enableBasicAutocompletion={true}
        editorProps={{ $blockScrolling: true }}
        height="500px"
        width={"50%"}
      />
    </div>
  );
}

export default App;
