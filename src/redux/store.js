import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import immutableTransform from "redux-persist-transform-immutable";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createRootReducer from "./reducers";
export const history = createBrowserHistory({
  basename: "hiynn-design/"
});
const persistConfig = {
  key: "root",
  storage,
  transforms: [
    immutableTransform()
    // encryptor
  ]
};
const finalReducer = persistReducer(persistConfig, createRootReducer(history));

export default function configureStore(preloadedState) {
  const store = createStore(
    finalReducer, // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history) // for dispatching history actions
        // ... other middlewares ...
      )
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
}
