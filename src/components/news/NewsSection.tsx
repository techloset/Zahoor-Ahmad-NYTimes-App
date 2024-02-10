import { useState } from "react";
import NewsCard from "./NewsCard";
import TopNewsType from "../../types/TopNewsType";
import ShowMoreButton from "../ShowMore";
import { formatTimeDifference } from "./Time";
import { useAppSelector } from "../../Hooks/hooks";
import { RootState } from "../../store/store";

const NewsSection = () => {
  const { articles, error } = useAppSelector((state: RootState) => state.news);
  const [showMore, setShowMore] = useState<boolean>(false);
  const visibleArticles = showMore ? articles : articles.slice(1, 10);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  console.log("Articles:", articles);

  return (
    <div className="">
      <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] sm:mb-[50px]">
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
          {visibleArticles?.map((article: TopNewsType) => (
            <NewsCard
              key={article._id}
              _id={article._id}
              byLine={article.byline}
              headline={article.title}
              description={article.abstract}
              imageSource={article.multimedia[0]?.url}
              imageAlternative={article.multimedia[0].format}
              pubishedAt={formatTimeDifference(article.published_date)}
            />
          ))}
        </div>
        <div className="text-center my-4">
          <ShowMoreButton onClick={toggleShowMore} isShowingMore={showMore} />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
