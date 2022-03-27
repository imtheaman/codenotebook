import React from "react";
import "bulmaswatch/superhero/bulmaswatch.min.css";
import TextEditor from "./components/text-editor";
import CodeCell from "./components/code-cell";

const App = () => {
  return (
    <div>
      <TextEditor />
      <CodeCell />
    </div>
  );
};

export default App;
