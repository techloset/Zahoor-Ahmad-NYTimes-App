import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";
import { GridDisplay } from "../../assets/SVGs/Icons";
import { fetchArticles } from "../../store/slices/newsSlice";

const Categories = () => {
  const dispatch = useAppDispatch();
  const [clickedIndex, setClickedIndex] = useState<number | null>(0);
  const categoriesList: string[] = ["Latest Stories", "Opinion", "Health"];

  const handleCategoryClick = async (index: number, category: string) => {
    try {
      setClickedIndex(index);
      switch (category) {
        case "Latest Stories":
          category = "home";
          break;
        case "Opinion":
          category = "opinion";
          break;
        case "Health":
          category = "health";
          break;
        default:
          category = "home";
          break;
      }
      dispatch(fetchArticles(category));
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  useEffect(() => {
    dispatch(fetchArticles("home"));
  }, [dispatch]);

  return (
    <div className="sm:max-w-[1366px] sm:h-[54px] h-[83px] w-full p-[14px]">
      <div className="bg-white bg-opacity-90 flex justify-between">
        <div className="flex sm:gap-[40px] gap-[16px]">
          {categoriesList.map((item, index) => (
            <div key={index}>
              <h1
                onClick={() => {
                  handleCategoryClick(index, item);
                }}
                className="text-zinc-800 text-lg font-semibold font-Poppins hover:cursor-pointer"
              >
                {item}
              </h1>
              {clickedIndex === index && (
                <div className="w-10 h-0.5 opacity-90 border-red-700 border rounded-sm" />
              )}
            </div>
          ))}
        </div>
        <div className="hidden sm:block">
          <GridDisplay />
        </div>
      </div>
    </div>
  );
};

export default Categories;
