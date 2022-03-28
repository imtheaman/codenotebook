import { ActionType } from "../action-types";
import { Id, CellTypes } from "../cell.type";

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: Id;
    direction: "up" | "down";
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: Id;
    content: string;
  };
}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: Id;
}

export interface InsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: Id;
    type: CellTypes;
  };
}

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | UpdateCellAction
  | InsertCellAfterAction;
