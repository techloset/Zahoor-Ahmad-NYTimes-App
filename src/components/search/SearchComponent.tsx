import React, { useState, FormEvent } from "react";
import { SearchIcon } from "../../assets/SVGs/Icons";
import { useAppDispatch } from "../../App/hooks";
import { updateSearchTerm } from "../../features/search/searchSlice";

interface SearchComponentProps {
  searchTerm: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ searchTerm }) => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchTerm(search);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <div className="sm:h-[686px] h-[90vh] flex justify-center flex-col items-center gap-[58px] sm:gap-[64px]">
      <h1 className="text-center text-zinc-800 text-5xl font-semibold font-IBM">
        Search News
      </h1>
      <form
        onSubmit={handleSearchSubmit}
        className="flex gap-[16.5px] items-center flex-row-reverse"
      >
        <input
          className="sm:w-[800px] sm:h-[54px] bg-white bg-opacity-90 backdrop-blur-[28px] px-[17px] py-[5px] outline-none text-zinc-800 text-base font-normal font-Nunito leading-snug "
          type="text"
          placeholder="Corona Virus Updates"
          value={search}
          onChange={handleInputChange}
        />
        <div className="h-[24px] w-[24px] stroke-[0.5px] cursor-pointer">
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
