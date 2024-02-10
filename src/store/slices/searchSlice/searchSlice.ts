import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
// import { RootState } from "../../store";
import ArticleSearchType from "../../../types/ArticleSearchType";
import searchInstance from "../../../utils/axiosInstances/searchInstance";

export interface SearchNewsState {
  searchArticles: ArticleSearchType[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
  // searchTerm: string;
}

const initialState: SearchNewsState = {
  searchArticles: [],
  status: "idle",
  error: null,
  // searchTerm: "elections",
};

export const fetchSearchArticles = createAsyncThunk(
  "searchNews/fetchSearchArticles",
  async (searchedArticle: string) => {
    try {
      // const state = getState() as RootState;
      // const searchTerm = state.searchNews.searchTerm;
      const response = await searchInstance.get<{
        response: { docs: ArticleSearchType[] };
      }>(`${searchedArticle}&api-key=${import.meta.env.VITE_API_KEY}`);
      return response.data.response.docs;
    } catch (error) {
      throw new Error("Failed to fetch search articles");
    }
  }
);

const searchNewsSlice = createSlice({
  name: "searchNews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(fetchSearchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchSearchArticles.fulfilled,
        (state, action: PayloadAction<ArticleSearchType[]>) => {
          state.status = "succeeded";
          state.searchArticles = action.payload;
        }
      )
      .addCase(fetchSearchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default searchNewsSlice.reducer;
