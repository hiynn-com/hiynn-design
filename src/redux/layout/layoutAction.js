import { createActions } from "redux-actions";

export const layoutTypes = {
  SAVE_MENU_INDEX: "SAVE_MENU_INDEX",
  SET_MENU_OPEN_KEYS: "SET_MENU_OPEN_KEYS"
};

export default createActions({
  [layoutTypes.SAVE_MENU_INDEX]: keyPath => ({ keyPath }),
  [layoutTypes.SET_MENU_OPEN_KEYS]: openkeys => ({ openkeys })
});
