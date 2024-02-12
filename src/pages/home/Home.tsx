import BreakingNewsAlert from "../../components/breakingNewsAlert/BreakingNewsAlert";
import Categories from "../../components/categories/Categories";
import NewsSection from "../../components/newsSection/NewsSection";
import TopStory from "../../components/topStory/TopStory";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import { formatTimeDifference } from "../../utils/time";

export default function Home() {
  const { articles } = useAppSelector((state: RootState) => state.news);
  const topNews = articles[0];

  return (
    <div className="flex items-center w-full justify-center flex-col">
      <div className="pb-8 w-full sm:max-w-[1920px] sm:mx-14 md:max-w-[1649px] flex gap-0 sm:gap-12 flex-col items-center">
        <TopStory
          _id={topNews?._id}
          byLine={topNews?.byline}
          headline={topNews?.title}
          description={topNews?.abstract}
          imageSource={topNews?.multimedia[0]?.url}
          imageAlternative={topNews?.multimedia[0]?.format}
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
