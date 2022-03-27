import { useEffect, useState } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import bundle from "../bundler";
import Resizable from "./resizable";
import { Cell } from "../state/cell.type";
import { useActions } from "../hooks/use-actions";

type Props = {
  cell: Cell;
};

const CodeCell: React.FC<Props> = ({ cell }) => {
  const { id, content } = cell;
  const { updateCell } = useActions();
  const [code, setCode] = useState('')
  const [err, setErr] = useState('')

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(content);
      setCode(output.code);
      setErr(output.err);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [content]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => updateCell(id, value)}
          />
        </Resizable>
        <Preview code={code} err={err} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
