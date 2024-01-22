import NewsProps from "../../interfaces/NewsType";
import { BookMark, HeartOutline, ShareIcon } from "../SVGs/Icons";

const NewsCard = ({
  // _id,
  headline,
  description,
  imageSource,
  pubishedAt,
  url,
  byLine,
  imageAlternative,
}: NewsProps) => {
  return (
    <div className="sm:h-[520px] sm:w-[438px] flex flex-col rounded-lg shadow-black/15 hover:shadow-black/20 shadow-md hover:shadow-lg border-black-2">
      <a href={url} target="_blank">
        <div className="sm:w-[438px] sm:h-[246px] h-[210px] overflow-hidden sm:mb-3.125rem rounded-t-lg">
          <img
            src={imageSource}
            alt={imageAlternative}
            className="self-center"
          />
        </div>
      </a>
      <div>
        <div className="flex flex-col sm:gap-[17px] sm:mb-[15px] sm:px-[25px] px-[19px] py-[10px]">
          <h3 className="sm:w-[388px] sm:h-[45px] text-lg text-zinc-800 sm:text-lg font-semibold font-IBM leading-[27px] overflow-x-clip">
            {headline}
          </h3>
          <p className="sm:max-w-[500px] sm:h-[94px] text-zinc-800 sm:text-[15px] font-normal font-Poppins leading-normal overflow-x-clip text-wrap">
            {description}
          </p>
        </div>
        <div className="flex sm:gap-[9px] ml-[26px] mb-[20px] gap-1 ">
          <p className="sm:w-[94px] h-5 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snu">
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
          <ShareIcon />
          <span className="text-[10px]">28</span>
        </div>
        <BookMark />
      </div>
    </div>
  );
};

export default NewsCard;
