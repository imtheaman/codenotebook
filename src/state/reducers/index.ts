// root reducer file
import cellReducer from "./cellsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cells: cellReducer,
});

export default rootReducer;
export type RootStateType = ReturnType<typeof rootReducer>;
