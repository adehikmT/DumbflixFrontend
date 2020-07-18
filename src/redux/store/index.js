import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/index";
import promise from "redux-promise-middleware";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let config = {
  key: "root",
  storage,
};

let persistReducer = persistCombineReducers(config, reducer);

export default () => {
  const store = createStore(
    persistReducer,
    storeEnhancers(applyMiddleware(promise))
  );

  let persistor = persistStore(store);
  return {
    store,
    persistor,
  };
};
