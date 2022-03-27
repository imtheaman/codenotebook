import React from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell, Id } from "../state/cell.type";
import CellListItem from "./CellListItem";

const CellList: React.FC = () => {
  // @ts-ignore
  const cells: Cell[] = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id: Id) => data[id])
  );

  return (
    <div>
      {cells.map((cell) => (
        <CellListItem cell={cell} />
      ))}
    </div>
  );
};

export default CellList;
