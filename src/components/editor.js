import React, { useState } from "react";
import AceEditor from "react-ace";
import Top from "./top";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
// import "ace-builds/src-noconflict/worker-javascript";

function Editor() {
  const [code, setCode] = useState("");
  const onChange = (newValue) => {
    setCode(newValue);
  };
  const styling = {
    // display: "flex",
    // justifyContent: "center",
    // align: "center",
  };
  const topbar = {
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "auto",
  };
  const container = {
    marginLeft: "20%",
    marginRight: "20%",
  };
  return (
    <div id="container" style={container}>
      <div style={topbar}>
        <Top />
      </div>
      <div style={styling}>
        <AceEditor
          mode="javascript"
          value={code}
          theme="twilight"
          onChange={onChange}
          showPrintMargin={false}
          name="UNIQUE_ID_OF_DIV"
          wrapEnabled={true}
          enableBasicAutocompletion={true}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </div>
  );
}

export default Editor;
