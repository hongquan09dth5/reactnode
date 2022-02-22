import { TypedUseSelectorHook } from "react-redux";
import type { RootState } from "../types/types";
export declare const useAppDispatch: () => import("redux").Dispatch<import("redux").AnyAction> & import("../types/types").ThunkAppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
