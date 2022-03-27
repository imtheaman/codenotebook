import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ActionType } from "./action-types";
import rootReducer from "./reducers";

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: "",
    type: "code",
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: "",
    type: "text",
  },
});

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: "",
    type: "text",
  },
});

store.getState();
