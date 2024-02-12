import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/Hooks/hooks";
import { RootState } from "../../store/store";
import { fetchSearchArticles } from "../../store/slices/searchSlice";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import { Loader } from "../../assets/SVGs/Icons";
import NewsCard from "../../components/newsCard/NewsCard";
import { ArticleSearchType } from "../../types/Types";

function Search() {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("q") || "";
  const { searchArticles, error, status } = useAppSelector(
    (state: RootState) => state.searchNews
  );

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm === "") return;
      try {
        await dispatch(fetchSearchArticles(searchTerm));
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
        searchTerm={(searchTerm: string) => setSearchParams({ q: searchTerm })}
      />
      {searchArticles.length === 0 || (
        <div className="h-54 p-6 sm:mx-[277px] text-zinc-800 text-lg font-semibold font-Poppins">
          <h1>Search Results</h1>
          <div className="bg-red-700 w-14 h-1.5 sm:hidden"></div>
        </div>
      )}

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
                pubishedAt={article?.pub_date.split("T")[0] || ""}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
