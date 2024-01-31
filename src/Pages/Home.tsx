import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { RootState } from "../store";
import { fetchArticles } from "../features/news/newsSlice";
import TopStory from "../components/TopStory";
import NewsSection from "../components/news/NewsSection";
import Categories from "../components/news/Categories";
import BreakingNewsAlert from "../components/news/BreakingNewsAlert";
import { formatTimeDifference } from "../components/news/Time";

export default function Home() {
  const { articles } = useAppSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();
  const topNews = articles[0];
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="flex items-center w-full justify-center flex-col">
      <div className="pb-[30px] md:mx-[277px] w-full sm:mx-[100px] max-w-[1920px] flex gap-0 sm:gap-[50px] flex-col items-center">
        <TopStory
          _id={topNews?._id}
          byLine={topNews?.byline}
          headline={topNews?.title}
          description={topNews?.abstract}
          imageSource={topNews?.multimedia[0].url}
          imageAlternative={topNews?.multimedia[0].format}
          key={topNews?._id}
          pubishedAt={formatTimeDifference(topNews?.published_date)}
        />
        <BreakingNewsAlert />
        <Categories />
        <NewsSection />
      </div>
    </div>
  );
}
