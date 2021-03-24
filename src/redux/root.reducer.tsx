


import { combineReducers } from 'redux';
import commonReducer from './slices/root.slice';


export const rootReducer = combineReducers({
    commonReducer
});
export type RootState = ReturnType<typeof rootReducer>;