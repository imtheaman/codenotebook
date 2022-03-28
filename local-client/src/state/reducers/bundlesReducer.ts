import produce from "immer";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface BundleState {
  [key: string]:
    | {
        bundling: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const INITIAL_STATE: BundleState = {};

const bundleReducer = produce(
  (state: BundleState = INITIAL_STATE, action: Action): BundleState => {
    switch (action.type) {
      case ActionType.BUNDLE_START:
        state[action.payload.cellId] = {
          bundling: true,
          code: "",
          err: "",
        };
        return state;
      case ActionType.BUNDLE_COMPLETE:
        state[action.payload.cellId] = {
          bundling: false,
          code: action.payload.bundle.code,
          err: action.payload.bundle.err,
        };
        return state;
      default:
        return state;
    }
  }
);

export default bundleReducer;
