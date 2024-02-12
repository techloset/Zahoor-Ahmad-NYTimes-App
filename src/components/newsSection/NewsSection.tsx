import { useState } from "react";
import NewsCard from "../newsCard/NewsCard";
import ShowMoreButton from "../showMore/ShowMore";
import { formatTimeDifference } from "../../utils/time";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import { TopNewsType } from "../../types/Types";

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
      <div className="sm:mb-12">
        {error && <div className="text-red-500 text-center">{error}</div>}
        <div className="flex flex-wrap sm:gap-7 gap-4 justify-center">
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
