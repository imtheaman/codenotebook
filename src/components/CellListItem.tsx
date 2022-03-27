import React, { Fragment } from "react";
import { Cell } from "../state/cell.type";
import ActionBar from "./action-bar";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import "./cell-list-item.css";

type Props = {
  cell: Cell;
};

const CellListItem: React.FC<Props> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <Fragment>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </Fragment>
    );
  } else
    child = (
      <Fragment>
        <ActionBar id={cell.id} />
        <TextEditor cell={cell} />
      </Fragment>
    );

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
