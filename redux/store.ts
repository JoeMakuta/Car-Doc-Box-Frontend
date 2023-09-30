import { AnyAction, Reducer, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginSlice";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

const isClient = typeof window !== "undefined";
export let store: Persistor;
export let store1: ToolkitStore;

if (isClient) {
  store1 = configureStore({
    reducer: {
      user: isClient ? persistedUserReducer : userSlice.reducer,
      login: loginSlice.reducer,
    },
    middleware: [thunk],
  });

  store = persistStore(store1);
} else {
  // To do if the window object is not yet available
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
