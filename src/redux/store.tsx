

import { createStore, applyMiddleware } from "redux";
import rootReducer, { RootState } from "./reducers/root.reducer";
import thunkMiddleware from 'redux-thunk'
import { Action, configureStore, getDefaultMiddleware, Middleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from 'redux-logger'
export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware, logger] as const
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

