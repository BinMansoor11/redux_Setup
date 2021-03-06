import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";

import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistedConfig = {
  key: "root",
  storage: AsyncStorage,
  timeout: 0,
};

const persistedReducer = persistReducer(persistedConfig, rootReducer);

const initialState = {};
const middleware = [thunk];
const store = createStore(
  persistedReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor, store };
