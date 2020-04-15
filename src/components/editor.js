import React, { useState, useEffect } from "react";
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
  const [code, setCode] = useState(localStorage.getItem("code") || "");

  const [lang, setLang] = useState("javascript");
  const [mode, setMode] = useState("github");
  const [height, setHeight] = useState("650px")
  const [width, setWidth] = useState("1400px")
  const [line, setLine] = useState(1);
  const [char, setChar] = useState(0);

  const onChange = (newValue) => {
    setCode(newValue);
  };
  useEffect(() => {
    localStorage.setItem("code", code)
  }, [code])

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
  const reset = {

    outlineOffset: "-2px",
    border: 0,
    padding: 0,
    cursor: "pointer",
    // eslint no-dupe-keys:1
    padding: "0.25rem 0.5rem",
    margin: "0.25rem"
  }
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
  const cursorChange = (selection) => {
    setLine(selection.cursor.row + 1);
    setChar(selection.cursor.column);
  };

  const clickHandler = () => {
    setCode("")
  }
  const screenHandler = () => {
    setHeight("1500px")
    setWidth("1500px")
    // ace.resize()
  }

  return (
    <div id="container" style={container}>
      <div style={topbar}>
        <div>Light Mode</div>
        <div>
          <label className="switch mx-2">
            <input type="checkbox" onClick={modeChange} />
            <span className="slider round"></span>
          </label>
        </div>
        <div>Dark Mode </div>
        <div className="reset" >
          <button style={reset} onClick={clickHandler}><i className="fa fa-refresh" aria-hidden="true" style={{ width: "25px", height: "25px" }}></i></button>
        </div>

        <div className="fullscreen" >
          <button style={reset} onClick={screenHandler} ><i className="fa fa-compress" aria-hidden="true" style={{ width: "25px", height: "25px" }}></i></button>
        </div>

        <div>
          <select
            value={lang}
            className="form-control mx-5"
            onChange={language}
          >
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
            <option value="c_cpp">C / C++</option>
            <option value="java">Java</option>
          </select>
        </div>

      </div>
      <div  >
        <AceEditor
          mode={lang}
          value={code}
          theme={mode}
          onChange={onChange}
          showPrintMargin={false}
          name="UNIQUE_ID_OF_DIV"
          wrapEnabled={true}
          enableBasicAutocompletion={true}
          height={height}
          width={width}
          fontSize={25}
          onCursorChange={cursorChange}
          editorProps={{ $blockScrolling: true }}
        />
      </div>
      <div style={topbar}>
        <p>
          Line : {line} , {char}
        </p>
        <button type="button" class="btn btn-secondary">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Editor;
