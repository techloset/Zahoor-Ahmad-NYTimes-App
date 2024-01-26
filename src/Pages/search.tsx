import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../App/hooks";
import { RootState } from "../store";
import TopNewsType from "../interfaces/TopNewsType";
import { fetchArticles } from "../features/news/newsSlice";
import SearchComponent from "../components/news/SearchComponent";
import NewsCard from "../components/news/NewsCard";

export default function NewsSection() {
  const { articles, error } = useAppSelector((state: RootState) => state.news);
  const dispatch = useAppDispatch();
  const [filteredArticles, setFilteredArticles] = useState<TopNewsType[]>(
    articles.slice(1, articles.length)
  );

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const handleSearchChange = (searchTerm: string) => {
    const filtered = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.byline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.abstract.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.published_date.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div className="sm:max-w-[1920px] sm:mx-[277px] mx-[16px] sm:mb-[50px]">
      <div>
        <h1 className="text-zinc-800 text-lg font-semibold font-Poppins">
          Search Results
        </h1>
        <div className="w-10 h-0.5 opacity-90 bg-red-700 rounded-sm sm:hidden" />
      </div>
      <SearchComponent onSearchChange={handleSearchChange} />
      {error && <div className="text-red-500 text-center">{error}</div>}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-[26px] gap-[16px]">
        {filteredArticles.map((article: TopNewsType) => (
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
