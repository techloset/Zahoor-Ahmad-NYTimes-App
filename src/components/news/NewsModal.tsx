import { FC } from "react";
import TopNewsType from "../../interfaces/TopNewsType";
import { CrossIcon } from "../../assets/SVGs/Icons";

interface NewsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  newsDetails: TopNewsType;
}

const NewsModal: FC<NewsModalProps> = ({ isOpen, closeModal, newsDetails }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-96 h-96 relative bg-white rounded-2xl flex-col justify-start items-start inline-flex">
      <div className="w-96 relative">
        <div className="w-96 h-96 left-0 top-0 absolute">
          <img
            className="w-96 h-96 left-[-263px] top-0 absolute"
            src={newsDetails.multimedia[0]?.url || ""}
            alt={newsDetails.multimedia[0]?.format || ""}
          />
        </div>
        <div className="w-96 h-80 left-[826px] top-[90px] absolute">
          <div className="w-96 h-32 left-0 top-[33px] absolute text-zinc-800 text-3xl font-semibold font-['IBM Plex Serif']">
            {newsDetails.title}
          </div>
          <div className="w-52 h-5 left-[103px] top-[300px] absolute opacity-70 text-zinc-800 text-xs font-normal font-['Poppins'] leading-snug">
            {newsDetails.byline}
          </div>
          <div className="w-96 h-24 left-0 top-[176px] absolute text-zinc-800 text-base font-normal font-['Poppins'] leading-normal">
            {newsDetails.abstract}
          </div>
          <div className="w-24 h-5 left-0 top-[300px] absolute text-zinc-800 text-xs font-normal font-['Poppins'] leading-snug">
            {newsDetails.published_date.split("T")[0]}
          </div>
          <div className="w-16 h-4 left-0 top-0 absolute text-red-700 text-sm font-semibold font-['Poppins'] leading-7 tracking-tight">
            Trending
          </div>
        </div>
      </div>
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        onClick={closeModal}
      >
        <CrossIcon />
      </button>
    </div>
  );
};

export default NewsModal;
