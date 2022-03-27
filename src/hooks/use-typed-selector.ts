import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStateType } from "../state/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector;
