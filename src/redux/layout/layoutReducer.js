import { handleActions } from "redux-actions";
import { layoutTypes } from "./layoutAction";
import { Map, fromJS, merge, List } from "immutable";

const initState = fromJS({
  index: "1",
  //subIndex暂时没起作用
  subIndex: "4",
  openKeys: ["4", "5"]
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
    },
    [layoutTypes.SET_MENU_OPEN_KEYS]: (state, action) => {
      const openkeys = action.payload.openkeys;
      return state.merge({
        openKeys: List(openkeys)
      });
    }
  },
  initState
);

export default layoutReducer;
