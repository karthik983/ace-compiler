import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-eclipse";
import Spin from "../Spin.gif";

// import "ace-builds/src-noconflict/worker-javascript";

function Editor() {
  const [code, setCode] = useState(localStorage.getItem("code") || "");

  const [lang, setLang] = useState("javascript");
  const [mode, setMode] = useState("eclipse");
  const [line, setLine] = useState(1);
  const [char, setChar] = useState(0);

  const onChange = (newValue) => {
    setCode(newValue);
  };
  useEffect(() => {
    localStorage.setItem("code", code);
  }, [code]);

  const reset = {
    outlineOffset: "-2px",
    border: 0,
    backgroundColor: "white",
    cursor: "pointer",

    padding: "0.25rem 0.5rem",
    margin: "0.25rem",
  };
  const language = (e) => {
    setLang(e.target.value);
  };
  const modeChange = (e) => {
    if (e.target.checked === true) {
      setMode("chaos");
    } else {
      setMode("eclipse");
    }
  };
  const cursorChange = (selection) => {
    setLine(selection.cursor.row + 1);
    setChar(selection.cursor.column);
  };

  const clickHandler = () => {
    setCode("");
  };
  const screenHandler = () => {
    // setHeight("1500px");
    // setWidth("1500px");
    // ace.resize()
  };

  return (
    <div>
      <div className="container rounded-lg mt-5 px-0 shadow-lg">
        <div className="d-flex ">
          <div className="p-2 ml-5 align-self-center ">Light Mode</div>
          <div className=" pt-3">
            <label className="switch ">
              <input
                className="align-self-center"
                type="checkbox"
                onClick={modeChange}
              />
              <span className="slider round "></span>
            </label>
          </div>
          <div className="mr-auto p-2 align-self-center">Dark Mode </div>

          <div className=" p-2 reset ">
            <button
              style={reset}
              className="align-self-center"
              onClick={clickHandler}
            >
              <i
                className="fa fa-refresh fa-2x"
                aria-hidden="true"
                style={{
                  width: "35px",
                  height: "35px",
                  color: "darkgray",
                  paddingTop: "2px",
                }}
              ></i>
            </button>
          </div>
          <div className="p-2 fullscreen">
            <button style={reset} onClick={screenHandler}>
              <i
                className="fa fa-expand fa-2x "
                aria-hidden="true"
                style={{
                  width: "35px",
                  height: "35px",
                  color: "darkgray",
                  paddingTop: "2px",
                }}
              ></i>
            </button>
          </div>
          <div className="p-2 mr-5 align-self-center">
            <select
              value={lang}
              className="form-control mx-1 "
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
            width="1140px"
            height="700px"
            fontSize={25}
            onCursorChange={cursorChange}
            editorProps={{ $blockScrolling: true }}
          />
        </div>
        <div className="d-flex">
          <div className="p-2 fullscreen">
            <button style={reset} onClick={screenHandler}>
              <i
                className="fa fa-download fa-2x "
                aria-hidden="true"
                style={{ width: "35px", height: "35px", color: "darkgray" }}
              ></i>
            </button>
          </div>
          <div>
            {" "}
            <div className="py-3 mr-4" style={{ fontSize: "20px" }}>
              Line : {line} Column : {char}
            </div>
          </div>
          <div className="ml-auto align-self-center mx-4 ">
            <img src={Spin} alt="" />
          </div>
        </div>
      </div>
      <div className="container px-0 my-5 d-flex">
        <button type="button" className="btn btn-primary btn-lg px-5  ml-auto ">
          Compile
        </button>
      </div>
      <div className="shadow-lg container rounded-lg px-0 my-5 ">
        <div>
          <div className="d-flex justify-content-between p-1">
            <div className="align-self-center ml-3">
              Status : Successfully executed{" "}
            </div>
            <div className="align-self-center">
              {" "}
              Date : 2020-04-16 13:00:00{" "}
            </div>
            <div className="align-self-center">Time : 0 Sec </div>
            <div className="align-self-center">Memory : 9.128 kB</div>
            <div className="fullscreen">
              <button style={reset} onClick={screenHandler}>
                <i
                  className="fa fa-times fa-2x "
                  aria-hidden="true"
                  style={{ width: "35px", height: "35px", color: "darkgray" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
        <div className="m-auto">
          <textarea
            className="form-control "
            rows="5"
            style={{ resize: "none", backgroundColor: "beige" }}
            // Misty Rose ""mistyrose || Beige "beige"
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Editor;
