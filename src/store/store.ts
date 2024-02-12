import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import searchNewsReducer from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    searchNews: searchNewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
