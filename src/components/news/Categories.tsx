import { GridDisplay } from "../../assets/SVGs/Icons";

const Categories = () => {
  const categoriesList: string[] = ["Opinion", "Health"];

  return (
    <div className="sm:w-[1366px] sm:h-[54px] h-[83px] w-full p-[14px]">
      <div className="bg-white bg-opacity-90 flex justify-between">
        <div className="flex sm:gap-[40px] gap-[16px]">
          <div>
            <h1 className="text-zinc-800 text-lg font-semibold font-Poppins">
              Latest Stories
            </h1>
            <div className="w-10 h-0.5 opacity-90 border-red-700 border rounded-sm" />
          </div>
          {categoriesList.map((item, index) => (
            <h1
              key={index}
              className="text-zinc-800 text-lg font-semibold font-Poppins"
            >
              {item}
            </h1>
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
