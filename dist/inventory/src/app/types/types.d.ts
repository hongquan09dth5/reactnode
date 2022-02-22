import { AnyAction } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import store from "./../store/configureStore";
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
export declare type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;
export declare type ThunkAppDispatch = ThunkDispatch<RootState, undefined, AnyAction>;
