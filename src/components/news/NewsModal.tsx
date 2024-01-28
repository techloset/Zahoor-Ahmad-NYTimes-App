import React from "react";
import NewsProps from "../../interfaces/NewsType";
import {
  BookMark,
  CrossIcon,
  HeartOutline,
  ShareIcon,
} from "../../assets/SVGs/Icons";

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
    <div className="w-full h-full flex justify-center items-center bg-black/40 fixed sm:top-0 top-[80px] left-0">
      <div className="sm:p-[48px] p-[24px] rounded-[20px] h-[846px] sm:h-[500px] flex flex-col sm:flex-row sm:gap-[76px] relative bg-white w-[327px] sm:w-[1462px] ">
        <div
          onClick={closeModal}
          className="hover:cursor-pointer h-[16px] w-[16px] absolute top-4 right-5"
        >
          <CrossIcon />
        </div>
        <div className="sm:w-[750px] w-[279px] sm:max-h-[500px] h-[347px] overflow-hidden">
          <img src={imageSource} alt={imageAlternative} />
        </div>
        <div>
          <div className="sm:flex justify-between mt-[90px]">
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
            <h3 className="sm:w-[540px] text-zinc-800 text-2xl w-[327px] sm:text-[32px] text-[24px] sm:mt-0 mx-[24px] sm:mx-0 sm:mb-2 font-semibold font-IBM">
              {headline}
            </h3>
            <p className="sm:w-[500px]  sm:block sm:h-[94px] text-zinc-800 sm:text-[15px] font-normal font-Poppins leading-normal">
              {description}
            </p>
          </div>
          <div className="sm:flex sm:gap-[9px] mt-[30px] ">
            <p className="h-5 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snu ">
              {pubishedAt}{" "}
            </p>
            <p className="sm:h-5 opacity-70 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snug">
              {byLine}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsModal;
