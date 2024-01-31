import { useEffect, useState } from "react";
import SearchComponent from "../components/search/SearchComponent";
import { RootState } from "../store/store";
import { useAppDispatch, useAppSelector } from "../Hooks/hooks";
import ArticleSearchType from "../interfaces/ArticleSearchType";
import NewsCard from "../components/news/NewsCard";
import { formatTimeDifference } from "../components/news/Time";
import { Loader } from "../assets/SVGs/Icons";
import { fetchSearchArticles } from "../store/slices/searchSlice/searchSlice";

function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useAppDispatch();

  const { searchArticles, error, status } = useAppSelector(
    (state: RootState) => state.searchNews
  );

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm === "") return;
      try {
        await dispatch(fetchSearchArticles());
      } catch (error) {
        console.error("Search Page", "Error fetching data:", error);
      }
    };
    const unsubscribe = setTimeout(() => {
      fetchData();
    }, 200);
    return () => clearTimeout(unsubscribe);
  }, [dispatch, searchTerm]);

  return (
    <div className="w-full ">
      <SearchComponent
        searchTerm={(searchTerm: string) => {
          setSearchTerm(searchTerm);
          console.log(searchTerm);
        }}
      />
      <div className="h-54 p-[24px] sm:mx-[277px] text-zinc-800 text-lg font-semibold font-Poppins">
        <h1>Search Results</h1>
        <div className="bg-red-700 w-[57px] h-[5px] sm:hidden"></div>
      </div>

      {status === "loading" && (
        <div className="flex justify-center mt-8 min-h-[50vh]">
          <Loader />
        </div>
      )}

      {status === "failed" && (
        <div className="text-red-500 text-center mt-8">{error}</div>
      )}

      {status === "succeeded" && (
        <div className="flex justify-center">
          <div className="mx-[15px] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px] my-[20px]">
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
      )}
    </div>
  );
}

export default Search;
