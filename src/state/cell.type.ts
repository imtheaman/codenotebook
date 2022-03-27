export type Id = string;
export type Direction = "up" | "down";
export type CellTypes = "code" | "text";
export interface Cell {
  id: Id;
  type: CellTypes;
  content: string;
}
