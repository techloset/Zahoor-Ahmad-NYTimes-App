import { useEffect, useState } from "react";
import SearchComponent from "../components/search/SearchComponent";
import { fetchSearchArticles } from "../features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { RootState } from "../store";
import ArticleSearchType from "../interfaces/ArticleSearchType";
import NewsCard from "../components/news/NewsCard";
import { formatTimeDifference } from "../components/news/Time";

function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useAppDispatch();

  const { searchArticles, error } = useAppSelector(
    (state: RootState) => state.searchNews
  );

  // const totalSearchedArticles = { searchArticles };
  console.log("Search Page", searchArticles);
  useEffect(() => {
    const unsubscribe = setTimeout(() => {
      if (searchTerm === "") return;
      dispatch(fetchSearchArticles(searchTerm));
      console.log("Search Page", dispatch(fetchSearchArticles(searchTerm)));
    }, 1000);
    console.log("Search Page", searchArticles);
    return () => clearTimeout(unsubscribe);
  }, [searchTerm, dispatch, searchArticles]);

  // useEffect(() => {
  //   if (searchTerm === "") return;

  //   dispatch(fetchSearchArticles(searchTerm));
  // }, [searchTerm, dispatch]);

  return (
    <div className="w-full ">
      <SearchComponent
        searchTerm={(searchTerm: string) => setSearchTerm(searchTerm)}
      />
      <div className="h-54 p-[24px] text-zinc-800 text-lg font-semibold font-Poppins">
        <h1>Search Results</h1>
        <div className="bg-red-700 w-[57px] h-[5px] sm:hidden"></div>
      </div>
      {status === "loading" && <p>Loading...</p>}
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="flex justify-center ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
          {searchArticles.map((article: ArticleSearchType) => (
            <NewsCard
              key={article?._id}
              byLine={article?.byline?.original || ""}
              headline={article?.headline?.main || ""}
              imageSource={`https://nytimes.com/${article?.multimedia[0]?.url}`}
              _id={article?._id}
              description={article?.abstract || ""}
              imageAlternative={article?.multimedia[0]?.crop_name || ""}
              pubishedAt={formatTimeDifference(article?.pub_date) || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search;
