import { GridDisplay } from "../../assets/SVGs/Icons";

const Categories = () => {
  return (
    <div className=" ">
      <div className="sm:w-[1368px] sm:h-[54px] h-[83px] w-full bg-white bg-opacity-90 backdrop-blur-xl flex justify-between">
        <div className="flex sm:gap-[40px] gap-[16px] ">
          <div>
            <h1 className="text-zinc-800 text-lg font-semibold font-Poppins">
              Latest Stories
            </h1>
            <div className="w-10 h-0.5 opacity-90 bg-red-700 rounded-sm" />
          </div>
          <h1 className="text-zinc-800 text-lg font-semibold font-Poppins">
            Opinion
          </h1>
          <h1 className="text-zinc-800 text-lg font-semibold font-Poppins">
            Health
          </h1>
        </div>
        <div className="hidden sm:block">
          <GridDisplay />
        </div>
      </div>
    </div>
  );
};

export default Categories;
