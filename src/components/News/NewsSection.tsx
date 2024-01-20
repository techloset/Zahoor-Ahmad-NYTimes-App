import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export interface TopNews {
  _id: string;
  title: string;
  abstract: string;
  url: string;
  multimedia: { url: string; format: string }[];
  published_date: string;
  byline: string;
}

export default function NewsSection() {
  const [articles, setArticles] = useState<TopNews[]>([]);
  const length = articles.length;
  const [totalArticles, setTotalArticles] = useState<TopNews[]>([]);
  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${
            import.meta.env.VITE_API_KEY
          }`
        );
        const data = response.data;
        console.log(data.results);
        setArticles(data.results);
        setTotalArticles(articles.slice(1, length));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    getNews();
  }, [articles, length]);

  return (
    <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] sm:mb-[50px]">
      <h3 className="font-bold text-3xl text-center">News Section</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
        {totalArticles.map((article) => (
          <NewsCard
            _id={article._id}
            byLine={article.byline}
            headline={article.title}
            description={article.abstract}
            imageSource={article.multimedia[0].url}
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
