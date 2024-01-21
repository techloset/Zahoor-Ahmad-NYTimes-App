import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../features/news/newsSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
