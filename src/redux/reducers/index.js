import { combineReducers } from "redux";
import { connectRouter, LOCATION_CHANGE } from "connected-react-router";

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

export default history =>
  combineReducers({
    router: connectRouter(history)
  });
