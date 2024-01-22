import { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="sm:h-[686px] flex justify-center flex-col items-center sm:gap-[64px]">
      <h1 className="text-center text-zinc-800 text-5xl font-semibold font-IBM">
        Search News
      </h1>
      <div>
        <input
          className="sm:w-[800px] sm:h-[54px] bg-white bg-opacity-90 backdrop-blur-[28px]"
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchComponent;
