import axios from "axios";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import BreakingNewsAlert from "./components/News/BreakingNewsAlert";
import NewsSection, { TopNews } from "./components/News/NewsSection";
import TopStory from "./components/TopStory";
import { useEffect, useState } from "react";

export default function App() {
  const [news, setNews] = useState<TopNews[]>([]);
  const topNews = news[0];

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=g5w08PXd2Id8U1hqCGztsUCeqtqJzAKh"
        );
        const data = response.data;
        console.log(data.results);
        setNews(data.results);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    getNews();
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <Navbar />
      <div className="md:mx-[277px] sm:mx-[100px] mx-[24px] max-w-[1920px] flex sm:gap-[50px] flex-col items-center">
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
