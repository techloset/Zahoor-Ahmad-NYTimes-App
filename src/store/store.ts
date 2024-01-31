import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../store/slices/newsSlice/newsSlice";
import searchNewsReducer from "../store/slices/searchSlice/searchSlice";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    searchNews: searchNewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
