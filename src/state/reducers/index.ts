// root reducer file
import cellsReducer from "./cellsReducer";
import { combineReducers } from "redux";
import bundleReducer from "./bundlesReducer";

const rootReducer = combineReducers({
  cells: cellsReducer,
  bundles: bundleReducer,
});

export default rootReducer;
export type RootStateType = ReturnType<typeof rootReducer>;
