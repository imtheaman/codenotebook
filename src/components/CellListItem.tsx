import React from "react";
import { Cell } from "../state/cell.type";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";

type Props = {
  cell: Cell;
};

const CellListItem: React.FC<Props> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = <CodeCell cell={cell} />;
  } else child = <TextEditor />;

  return <div>{child}</div>;
};

export default CellListItem;
