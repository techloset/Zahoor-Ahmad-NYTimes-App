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
  url,
  byLine,
  imageAlternative,
}: NewsModalProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="relative ">
      <div className="p-[48px]  min-h-[500px] flex flex-col sm:flex-row sm:gap-[76px] sm:mt-[100px] z-[200px]  bg-white sm:w-[1462px] fixed top-[10%] left-[5%] rounded-[20px]">
        <div
          onClick={closeModal}
          className="fixed top-2 right-2 hover:cursor-pointer"
        >
          <CrossIcon />
        </div>
        <div className="sm:max-w-750px sm:min-w-750px sm:max-h-[500px] h-[456px] w-full overflow-hidden">
          <img src={imageSource} alt={imageAlternative} />
        </div>
        <div>
          <div className="sm:flex justify-between mt-[90px]">
            <p className="text-red-700 text-sm font-semibold font-Poppins leading-[29.40px] tracking-tight">
              Trending
            </p>
            <div className="flex sm:gap-[20px]">
              <HeartOutline />
              <ShareIcon />
              <BookMark />
            </div>
          </div>
          <div>
            <a href={url} target="_blank">
              <h3 className="sm:w-[540px] sm:text-zinc-800 text-white text-2xl w-[327px] sm:text-[32px] sm:mt-0 mx-[24px] sm:mx-0 sm:mb-2  font-semibold font-IBM z-50">
                {headline}
              </h3>
            </a>
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
