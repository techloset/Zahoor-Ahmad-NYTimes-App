import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { RootState } from "../store";
import SearchComponent from "../components/news/SearchComponent";
import NewsCard from "../components/news/NewsCard";
import ArticleSearchType from "../interfaces/ArticleSearchType";
import { fetchSearchArticles } from "../features/news/searchSlice";

export default function Search() {
  const { searchArticles, error } = useAppSelector(
    (state: RootState) => state.searchNews
  );
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    dispatch(fetchSearchArticles(searchTerm));
  }, [dispatch, searchTerm]);

  const handleSearchSubmit = (search: string) => {
    setSearchTerm(search.toLowerCase());
  };

  return (
    <div className="mx-[16px] sm:mb-[50px]">
      <SearchComponent onSearchSubmit={handleSearchSubmit} />
      <div className="flex justify-center mb-10">
        <div className="flex flex-col">
          <h1 className="h-54 w-[1368px] text-zinc-800 text-lg font-semibold font-Poppins">
            Search Results
          </h1>
        </div>
        <div className="w-10 h-0.5 opacity-90 bg-red-700 rounded-sm sm:hidden" />
      </div>
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="flex justify-center ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px] sm:max-w-[1366px]">
          {searchArticles.map((article: ArticleSearchType) => (
            <NewsCard
              key={article?._id}
              byLine={article?.byline?.original || ""}
              headline={article?.headline?.main || ""}
              imageSource={`https://nytimes.com/${article?.multimedia[0]?.url}`}
              _id={article?._id}
              description={article?.abstract || ""}
              imageAlternative={article?.multimedia[0]?.crop_name || ""}
              pubishedAt={article?.pub_date?.split("T")[0] || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
