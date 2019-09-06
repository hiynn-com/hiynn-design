import { handleActions } from "redux-actions";
import { layoutTypes } from "./layoutAction";
import { Map, fromJS, merge, List } from "immutable";

const initState = fromJS({
  index: "1",
  subIndex: "4"
});

const layoutReducer = handleActions(
  {
    [layoutTypes.SAVE_MENU_INDEX]: (state, action) => {
      const { keyPath } = action.payload;
      let index = keyPath[0];
      let subIndex = null;
      if (keyPath.length === 2) {
        subIndex = keyPath[1];
      }
      return state.merge({
        index: index,
        subIndex: subIndex
      });
    }
  },
  initState
);

export default layoutReducer;
