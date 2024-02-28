import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import { fetchSearchArticles } from "../../store/slices/searchSlice";
import SearchComponent from "../../components/searchComponent/SearchComponent";
import { Loader } from "../../assets/SVGs/Icons";
import NewsCard from "../../components/newsCard/NewsCard";
import { ArticleSearchType } from "../../types/Types";
import ShowMoreButton from "../../components/showMore/ShowMore";
// import { formatTimeDifference } from "../../utils/time";

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
  const [showMore, setShowMore] = useState<boolean>(false);
  const visibleArticles = showMore
    ? searchArticles
    : searchArticles.slice(1, 10);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="w-full bg-white ">
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
          <div className="mx-4 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-4 my-5">
            {visibleArticles.map((article: ArticleSearchType) => (
              <NewsCard
                key={article?._id}
                byLine={
                  article?.byline?.original &&
                  article?.byline?.original.length > 36
                    ? article?.byline?.original.slice(0, 36) + "..."
                    : article?.byline?.original || ""
                }
                headline={
                  article?.headline?.main.length > 80
                    ? article?.headline?.main.slice(0, 80) + "..."
                    : article.headline.main || ""
                }
                imageSource={`https://nytimes.com/${article?.multimedia[0]?.url}`}
                _id={article?._id}
                description={
                  article?.abstract.length > 260
                    ? article?.abstract.slice(0, 260) + "..."
                    : article.abstract || ""
                }
                imageAlternative={article?.multimedia[0]?.crop_name || ""}
                pubishedAt={article?.pub_date.split("T")[0].toString() || ""}
              />
            ))}
          </div>
        </div>
      )}
      {searchArticles.length >= 11 && (
        <div className="text-center my-4">
          <ShowMoreButton onClick={toggleShowMore} isShowingMore={showMore} />
        </div>
      )}
    </div>
  );
}

export default Search;
