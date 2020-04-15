import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
// import "ace-builds/src-noconflict/worker-javascript";

function Editor() {
  const [code, setCode] = useState("");
  const [lang, setLang] = useState("javascript");
  const [mode, setMode] = useState("github");
  const onChange = (newValue) => {
    setCode(newValue);
  };

  const topbar = {
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "auto",
  };
  const container = {
    marginTop: "30px",
    marginLeft: "20%",
    marginRight: "20%",
  };
  const language = (e) => {
    setLang(e.target.value);
  };
  const modeChange = (e) => {
    if (e.target.checked === true) {
      setMode("twilight");
    } else {
      setMode("github");
    }
  };
  return (
    <div id="container" style={container}>
      <div style={topbar}>
        <div>
          <label className="switch">
            <input type="checkbox" onClick={modeChange} />
            <span className="slider round"></span>
          </label>
        </div>
        <div>
          <select
            value={lang}
            className="form-control mx-2"
            onChange={language}
          >
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="c_cpp">C / C++</option>
            <option value="java">Java</option>
          </select>
        </div>
      </div>
      <div>
        <AceEditor
          mode={lang}
          value={code}
          theme={mode}
          onChange={onChange}
          showPrintMargin={false}
          name="UNIQUE_ID_OF_DIV"
          wrapEnabled={true}
          enableBasicAutocompletion={true}
          height="600px"
          width="750px"
          editorProps={{ $blockScrolling: true }}
        />
      </div>
    </div>
  );
}

export default Editor;
