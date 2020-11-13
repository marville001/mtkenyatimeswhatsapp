import { combineReducers } from "redux";

import { userReducer } from "./userReducers";
import { shareReducer } from "./shareReducer";

export const rootReducer = combineReducers({
  userReducer,
  shareReducer,
});
