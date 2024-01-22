import { useEffect } from "react";
import { fetchArticles } from "../../features/news/newsSlice";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import { RootState } from "../../App/store";
import NewsCard from "./NewsCard";
import TopNews from "../../interfaces/TopNews";
export default function NewsSection() {
  const { articles } = useAppSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] sm:mb-[50px]">
      <h3 className="font-bold text-3xl text-center">News Section</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
        {articles.map((article: TopNews) => (
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
    </div>
  );
}
