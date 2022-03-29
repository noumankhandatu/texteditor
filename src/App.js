import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import parse from "html-react-parser";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "./App.css";
import { Button } from "@material-ui/core";

function App() {
  const [text, setText] = useState("");
  const [blocked, setBlocked] = useState(true);

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
  };
  const handleEditor = (event, editor) => {
    const text = editor.getData();
    setText(text);
  };
  const handleBlocker = () => {
    setBlocked(!blocked);
  };
  return (
    <div className="App">
      <div className="editor">
        <Button variant="contained" onClick={handleBlocker} color="secondary">
          Toggle To Maths Equations || Normal Editor
        </Button>
        <CKEditor editor={ClassicEditor} text={text} onChange={handleEditor} />
      </div>
      <div>
        <h2>Typin Test </h2>
        {blocked ? (
          <div>
            <p>{parse(text)}</p>
          </div>
        ) : (
          <div>
            <MathJaxContext version={3} config={config}>
              <div>
                <MathJax>{`\\( ${text}\\)`}</MathJax>
              </div>
            </MathJaxContext>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
