import { configureStore } from "@reduxjs/toolkit";
import sidemenuReducer from "./reducers/sideMenuReducer";
export const store = configureStore({
  reducer: {
    sideMenu: sidemenuReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
