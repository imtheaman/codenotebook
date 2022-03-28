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
    if (!bundled) {
      createBundle(id, content);
      return;
    }

    const timer = setTimeout(async () => {
      createBundle(id, content);
    }, 750);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content, id, createBundle]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => updateCell(id, value)}
          />
        </Resizable>
        {bundled && !bundled.bundling ? (
          <Preview code={bundled.code} err={bundled.err} />
        ) : (
          <div className="progress-cover">
            <progress className="progress is-small is-primary" max="100">Loading</progress>
          </div>
        )}
      </div>
    </Resizable>
  );
};

export default CodeCell;
