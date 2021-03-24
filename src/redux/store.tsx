

import { rootReducer, RootState } from "./root.reducer";
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { Action, AnyAction, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import logger from 'redux-logger'
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware] as const
})
export type AppThunk = ThunkAction<void, RootState, unknown, Action>
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppAsyncDispatch = () => useDispatch<ThunkDispatch<any, any, any>>();
