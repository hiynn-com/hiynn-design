import { createActions } from "redux-actions";

export const layoutTypes = {
  SAVE_MENU_INDEX: "SAVE_MENU_INDEX"
};

export default createActions({
  [layoutTypes.SAVE_MENU_INDEX]: keyPath => ({ keyPath })
});
