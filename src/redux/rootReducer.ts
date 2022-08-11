import { combineReducers } from "redux";
import dataReducer from './reducers/getDataReducer';

export const rootReducer = combineReducers({ weather:  dataReducer })