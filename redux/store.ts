import { AnyAction, Reducer, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginSlice";
import thunk from "redux-thunk";

import storage from "./persistStorage";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

// const isClient = typeof window !== "undefined";
export let _store: Persistor;
export let store: ToolkitStore;

store = configureStore({
  reducer: {
    user: persistedUserReducer,
    login: loginSlice.reducer,
  },
  middleware: [thunk],
});

_store = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
