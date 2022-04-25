import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell, Id } from "../state/cell.type";
import CellListItem from "./CellListItem";
import InsertCell from "./InsertCell";
import "./cell-list.css";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells: Cell[] = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: Id) => data[id])
  );

  return (
    <div className="cell-list">
      <InsertCell forceVisible={!cells.length} nextCellId="" />
      {cells.map((cell) => (
        <Fragment key={cell.id}>
          <CellListItem cell={cell} />
          <InsertCell nextCellId={cell.id} />
        </Fragment>
      ))}
    </div>
  );
};

export default CellList;
