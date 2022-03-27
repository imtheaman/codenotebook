import React, { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell, Id } from "../state/cell.type";
import CellListItem from "./CellListItem";
import InsertCell from "./InsertCell";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells: Cell[] = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: Id) => data[id])
  );

  return (
    <div>
      {cells.map((cell) => (
        <Fragment key={cell.id}>
          <InsertCell nextCellId={cell.id} />
          <CellListItem cell={cell} />
        </Fragment>
      ))}
      <InsertCell forceVisible={!!cells.length} nextCellId="" />
    </div>
  );
};

export default CellList;
