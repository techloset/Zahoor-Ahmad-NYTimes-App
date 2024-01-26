import { useEffect, useState } from "react";
import { fetchArticles } from "../../features/news/newsSlice";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import NewsCard from "./NewsCard";
import { RootState } from "../../store";
import TopNewsType from "../../interfaces/TopNewsType";
import Categories from "./Categories";
import BreakingNewsAlert from "./BreakingNewsAlert";
import ShowMoreButton from "../ShowMore";

export default function NewsSection() {
  const { articles, error } = useAppSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();
  const [showMore, setShowMore] = useState<boolean>(false);

  const visibleArticles = showMore ? articles : articles.slice(0, 9);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] sm:mb-[50px]">
      <BreakingNewsAlert />
      <Categories />
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
        {visibleArticles.map((article: TopNewsType) => (
          <NewsCard
            _id={article._id}
            byLine={article.byline}
            headline={article.title}
            description={article.abstract}
            imageSource={article.multimedia[0]?.url}
            imageAlternative={article.multimedia[0].format}
            key={article._id}
            pubishedAt={article.published_date.split("T")[0]}
            url={article.url}
          />
        ))}
      </div>
      <div className="text-center mt-4">
        <ShowMoreButton onClick={toggleShowMore} isShowingMore={showMore} />
      </div>
    </div>
  );
}
