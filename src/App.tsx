import { useEffect } from "react";
import TopStory from "./components/TopStory";
import BreakingNewsAlert from "./components/news/BreakingNewsAlert";
import NewsSection from "./components/news/NewsSection";
import { useAppDispatch, useAppSelector } from "./App/hooks";
import { RootState } from "./App/store";
import { fetchArticles } from "./features/news/newsSlice";
import Footer from "./components/footer/Footer";

export default function App() {
  const { articles } = useAppSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();
  const topNews = articles[0];
  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="md:mx-[277px] sm:mx-[100px] max-w-[1920px] flex sm:gap-[50px] flex-col items-center">
        {/* <SearchComponent /> */}
        <TopStory
          _id={topNews?._id}
          byLine={topNews?.byline}
          headline={topNews?.title}
          description={topNews?.abstract}
          imageSource={topNews?.multimedia[0].url}
          imageAlternative={topNews?.multimedia[0].format}
          key={topNews?._id}
          pubishedAt={topNews?.published_date.split("T")[0]}
          url={topNews?.url}
        />
        <BreakingNewsAlert />
        <NewsSection />
      </div>
      <Footer />
    </div>
  );
}
