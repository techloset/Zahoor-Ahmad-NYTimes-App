import { useEffect, useState } from "react";
import { StartIcon } from "../../assets/SVGs/Icons";
import { useAppSelector } from "../../store/hooks/hooks";
import { RootState } from "../../store/store";
import EditorsPicksCards from "../editorsPicsCards/EditorsPicksCards";
import SingleDiv from "../editorsPicksIcon/editorsPicksIcon";

const EditorsPicks = () => {
  const { articles } = useAppSelector((state: RootState) => state.news);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const totalArticles = articles.length;
  const EditorsPicksArticles = [
    articles[totalArticles - 1],
    articles[totalArticles - 2],
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const divs = Array.from({ length: 4 }, (_, index) => (
    <SingleDiv
      key={index}
      initialValue={activeIndex === index}
      onClick={() => handleClick(index)}
    />
  ));
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 425);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full sm:max-w-[1366px] m-4">
      <div className="w-full text-left flex gap-3.5 items-center ">
        <h1 className="text-[18px] font-semibold font-Poppins mx-9 my-6 leading-[27px] ">
          Editor’s Picks
        </h1>
        <StartIcon />
      </div>
      <div className="flex justify-between flex-row flex-wrap mx-4">
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
      <div className="sm:flex sm:justify-between w-[121px] h-1 mt-[30px] mx-auto hidden">
        {divs}
      </div>
    </div>
  );
};

export default EditorsPicks;
