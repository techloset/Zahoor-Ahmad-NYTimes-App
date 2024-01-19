import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

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
  useEffect(() => {
    const getNews = async () => {
      const response = await fetch(
        "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=g5w08PXd2Id8U1hqCGztsUCeqtqJzAKh"
      );
      const data = await response.json();
      console.log(data.results);
      setArticles(data.results);
    };
    getNews();
  }, []);

  return (
    <div className="sm:max-w-[1920px] sm:mx-0 mx-[16px] sm:mb-[50px]">
      <h3 className="font-bold text-3xl text-center">News Section</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px] ">
        {articles.map((article) => (
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
