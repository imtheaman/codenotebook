import { useEffect } from "react";
import CodeEditor from "./code-editor";
import Preview from "./preview";
import Resizable from "./resizable";
import { Cell } from "../state/cell.type";
import { useActions } from "../hooks/use-actions";
import { useTypedSelector } from "../hooks/use-typed-selector";

type Props = {
  cell: Cell;
};

const CodeCell: React.FC<Props> = ({ cell }) => {
  const { id, content } = cell;
  const { updateCell, createBundle } = useActions();
  const bundled = useTypedSelector(({ bundles }) => bundles?.[cell.id]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      createBundle(id, content);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [content, id]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => updateCell(id, value)}
          />
        </Resizable>
        {bundled ? (
          <Preview code={bundled.code} err={bundled.err} />
        ) : (
          "Loading..."
        )}
      </div>
    </Resizable>
  );
};

export default CodeCell;
