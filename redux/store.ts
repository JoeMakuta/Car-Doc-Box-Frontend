import { AnyAction, Reducer, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import loginSlice from "./slices/loginSlice";
import thunk from "redux-thunk";

import storage from "./persistStorage";
import { persistStore, persistReducer, Persistor } from "redux-persist";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import carsSlice from "./slices/carSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);

export const store: ToolkitStore = configureStore({
  reducer: {
    user: persistedUserReducer,
    login: loginSlice.reducer,
    cars: carsSlice.reducer,
  },
  middleware: [thunk],
});

export const _store: Persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
