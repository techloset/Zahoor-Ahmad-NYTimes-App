import { useEffect } from "react";
import { fetchArticles } from "../../features/news/newsSlice";
import { useAppSelector, useAppDispatch } from "../../App/hooks";
import NewsCard from "./NewsCard";
import { RootState } from "../../store";
import TopNewsType from "../../interfaces/TopNewsType";
import Categories from "./Categories";
export default function NewsSection() {
  const { articles,error } = useAppSelector((state: RootState) => state.news);
  const otherArticles = articles.slice(1, articles.length);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] sm:mb-[50px]">
      <Categories />
      {error && <div className="text-red-500 text-center">{error}</div>}  
      
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
        {otherArticles.map((article: TopNewsType) => (
          
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
