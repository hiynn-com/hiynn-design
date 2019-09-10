import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import immutableTransform from "redux-persist-transform-immutable";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createRootReducer from "./reducers";
export const history = createBrowserHistory({
  // 如果 package.json 里面设置了 homepage 那么这里就可以 不用设置
  // 如果没有设置，那么除了取消下面注释还要在 webpack.config.prod.js 里面设置 publicPath
  // basename: "hiynn-design/"
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
