import React, { useState } from "react";
import NewsProps from "../../types/NewsType";
import { BookMark, HeartOutline, ShareIcon } from "../../assets/SVGs/Icons";
import NewsModal from "../newsModal/NewsModal";

const NewsCard: React.FC<NewsProps> = ({
  _id,
  headline,
  description,
  imageSource,
  pubishedAt,
  byLine,
  imageAlternative,
}: NewsProps) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <div
        onClick={openModal}
        className="cursor-pointer sm:h-[520px] sm:w-[438px] flex flex-col rounded-lg shadow-custom hover:shadow-hover"
      >
        <div className="sm:w-[438px] sm:h-[246px] h-[210px] overflow-hidden sm:mb-3.125rem rounded-t-lg">
          <img
            src={imageSource}
            alt={imageAlternative}
            className="self-center"
          />
        </div>
        <div>
          <div className="flex flex-col sm:gap-[17px] sm:mb-[15px] sm:px-[25px] px-[19px] py-[10px]">
            <h3 className="hover:cursor-pointer sm:w-[388px] sm:h-[45px] text-lg text-zinc-800 sm:text-lg font-semibold font-IBM leading-[27px] overflow-x-clip">
              {headline}
            </h3>
            <p className="sm:max-w-[500px] sm:h-[94px] text-zinc-800 sm:text-[15px] font-normal font-Poppins leading-normal overflow-x-clip text-wrap">
              {description}
            </p>
          </div>
          <div className="flex sm:gap-[5px] ml-[26px] mb-[20px] gap-1 ">
            <p className="sm:w-[94px] h-5 min-w-[94px] text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snu">
              {pubishedAt}
            </p>
            <p className="sm:h-5 opacity-70 text-zinc-800 text-[13px] font-normal font-Poppins leading-snug">
              {byLine}
            </p>
          </div>
        </div>
        <div className="mx-auto w-full border-t-[1px] border-[#2a2a2a] border-opacity-[0.1] bg-transparent">
          <div className="flex justify-center sm:gap-[50px] gap-[30px] mt-[5px] pb-[20px]">
            <div className="flex items-center gap-[7px]">
              <HeartOutline />
              <span className="text-[10px]">29</span>
            </div>
            <div className="flex items-center gap-[7px]">
              <ShareIcon />
              <span className="text-[10px]">28</span>
            </div>
            <BookMark />
          </div>
        </div>
      </div>
      <NewsModal
        _id={_id}
        isOpen={isModalOpen}
        closeModal={closeModal}
        headline={headline}
        description={description}
        imageSource={imageSource}
        imageAlternative={imageAlternative}
        pubishedAt={pubishedAt}
        byLine={byLine}
      />
    </div>
  );
};

export default NewsCard;
