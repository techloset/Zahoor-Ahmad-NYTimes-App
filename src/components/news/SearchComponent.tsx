import React, { useState } from "react";
import { SearchIcon } from "../../assets/SVGs/Icons";

interface SearchComponentProps {
  onSearchChange: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  onSearchChange,
}) => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    onSearchChange(searchTerm);
  };
  return (
    <div className="sm:h-[686px] h-screen flex justify-center flex-col items-center gap-[58px] sm:gap-[64px]">
      <h1 className="text-center text-zinc-800 text-5xl font-semibold font-IBM">
        Search News
      </h1>
      <div className="flex gap-[16.5px] items-center flex-row-reverse">
        <input
          className="sm:w-[800px] sm:h-[54px] bg-white bg-opacity-90 backdrop-blur-[28px] px-[17px] py-[5px] outline-none text-zinc-800 text-base font-normal font-Nunito leading-snug "
          type="text"
          placeholder="Corona Virus Updates"
          value={search}
          onChange={handleSearchChange}
        />
        <div className="h-[24px] w-[24px] stroke-[0.5px] ">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
