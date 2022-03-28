// root reducer file
import cellReducer from "./cellsReducer";
import { combineReducers } from "redux";
import bundleReducer from "./bundlesReducer";

const rootReducer = combineReducers({
  cells: cellReducer,
  bundles: bundleReducer,
});

export default rootReducer;
export type RootStateType = ReturnType<typeof rootReducer>;
