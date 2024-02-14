import { useEffect, useState } from "react";
import { StartIcon } from "../../assets/SVGs/Icons";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import EditorsPicksCards from "../editorsPicsCards/EditorsPicksCards";

const EditorsPicks = () => {
  const { articles } = useAppSelector((state: RootState) => state.news);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const totalArticles = articles.length;
  const EditorsPicksArticles = [
    articles[totalArticles - 1],
    articles[totalArticles - 2],
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full sm:max-w-[1366px] mx-[16px]">
      <div className="w-full text-left flex gap-[14px] items-center ">
        <h1 className="text-[18px] font-semibold font-Poppins mx-[16px] ">
          Editor’s Picks
        </h1>
        <StartIcon />
      </div>
      <div className="flex justify-between flex-row flex-wrap">
        {EditorsPicksArticles.map((article, index) => (
          <div
            key={article?._id}
            className={isMobile && index === 1 ? "block" : "hidden sm:block"}
          >
            <EditorsPicksCards
              _id={article?._id}
              headline={article?.title}
              description={article?.abstract}
              imageSource={article?.multimedia[0]?.url}
              imageAlternative={article?.multimedia[0]?.format}
              byLine={article?.byline}
              pubishedAt={article?.published_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicks;
