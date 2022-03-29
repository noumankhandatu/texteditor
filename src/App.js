import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  return (
    <div className="App">
      <div className="editor">
        <CKEditor
          editor={ClassicEditor}
          data={data}
          onChange={(event, editor) => {
            const data = editor.getData();
            setData(data);
          }}
        />
      </div>
      <div>
        <h2>Typin Test</h2>
        <p>\( ax^2+bx +c=0\)</p>
        <p>{parse(data)}</p>
      </div>
    </div>
  );
}

export default App;
