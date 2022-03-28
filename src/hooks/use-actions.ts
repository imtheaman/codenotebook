import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../state/action-creators";

// All react hooks must start with use keyword
// if we set userActions as name of this function, then it'll neither be a react component nor a custom hook.
export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actionCreators, dispatch), [
    dispatch,
  ]);
};
