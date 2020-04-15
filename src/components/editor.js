import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";

function Editor() {
  return (
    <div>
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

export default Editor;
