// root reducer file
import cellReducer from "./cellsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cell: cellReducer,
});

export default rootReducer;
export type RootReducerType = ReturnType<typeof rootReducer>;
