import { combineReducers } from "redux";
import { connectRouter, LOCATION_CHANGE } from "connected-react-router/immutable";
import layoutReducer from "./layout/layoutReducer";
/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications sta.is just whatever gets returned from all your reducers
 * */

export default history =>
  combineReducers({
    router: connectRouter(history),
    layoutReducer
  });
