import React from "react";
import {
  BookMark,
  CrossIcon,
  HeartOutline,
  ShareIcon,
} from "../../assets/SVGs/Icons";
import { NewsProps } from "../../types/Types";

interface NewsModalProps extends NewsProps {
  isOpen: boolean;
  closeModal: () => void;
}

const NewsModal: React.FC<NewsModalProps> = ({
  isOpen,
  closeModal,
  headline,
  description,
  imageSource,
  pubishedAt,
  byLine,
  imageAlternative,
}: NewsModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="w-full h-[calc(100%-5rem)] flex justify-center items-center z-50 bg-black/40 fixed top-20  left-0">
      <div className="sm:p-12 px-6 py-[35px] sm:rounded-[20px] rounded-[10px] max-h-[846px] sm:h-[596px] flex flex-col sm:flex-row sm:gap-[76px] relative bg-white w-[327px] sm:w-[1462px]">
        <div
          onClick={closeModal}
          className="hover:cursor-pointer h-4 w-4 absolute sm:top-4 top-2 right-2 sm:right-5"
        >
          <CrossIcon />
        </div>
        <div className="sm:max-w-[750px] sm:min-w-[750px] sm:max-h-[500px] sm:min-h-[500px] max-h-[347px] min-h-[347px] overflow-clip">
          <img
            src={imageSource}
            alt={imageAlternative}
            className="h-[347px] sm:h-[750px] object-cover"
          />
        </div>
        <div>
          <div className="sm:flex sm:justify-between sm:mt-[90px] flex-col sm:flex-row gap-[8px]">
            <p className="text-red-700 text-sm font-semibold font-Poppins leading-[29.40px] tracking-tight">
              Trending
            </p>
            <div className="sm:flex sm:gap-[20px] hidden ">
              <HeartOutline />
              <ShareIcon />
              <BookMark />
            </div>
          </div>
          <div>
            <h3 className="sm:w-[540px] w-[279px] text-zinc-800 max-h-[157px] sm:text-[32px] text-[24px] sm:mt-0 sm:mx-0 sm:mb-2 font-semibold font-IBM">
              {headline.length > 80 ? headline.slice(0, 80) + "..." : headline}
            </h3>
            <p className="sm:w-[500px]  sm:block sm:max-h-[94px] max-h-[162px] text-zinc-800 sm:text-[15px] text-[14px] font-normal font-Poppins leading-normal">
              {description}
            </p>
          </div>

          <div className="flex sm:gap-[5px] mt-[5px] min-w-[94px] items-center sm:mt-[30px] sm:flex-row flex-col gap-1">
            <p className="h-5 text-zinc-800 max-w-[100px] text-[13px] font-normal font-Poppins">
              {pubishedAt.split("T")[0].toString()}
            </p>
            <p className="h-[20px] opacity-70 text-zinc-800 text-[13px] text-center font-normal font-Poppins">
              {byLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
