import { CiBookmark } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";
import { NewsProps } from "../TopStory";
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
    <div className="min-h-[500px] flex flex-col sm:gap-[76px]">
      <a href={url} target="_blank">
        <img
          className="sm:w-[438px] sm:h-[246px"
          src={imageSource}
          alt={imageAlternative}
        />
      </a>
      <div>
        <div className="flex flex-col sm:gap-[17px]">
          <h3 className="sm:w-[388px] h-[45px] text-zinc-800 text-lg font-semibold font-['IBM Plex Serif'] leading-[27px]">
            {headline}
          </h3>
          <p className="sm:w-[500px] sm:h-[94px] text-zinc-800 sm:text-[15px] font-normal font-Poppins leading-normal">
            {description}
          </p>
        </div>
        <div className="flex sm:gap-[9px]">
          <p className="sm:w-[94px] h-5 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snu">
            {pubishedAt}
          </p>
          <p className="sm:h-5 opacity-70 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snug">
            {byLine}
          </p>
        </div>
      </div>
      <div className="flex sm:gap-[50px]">
        <IoHeartOutline />
        <GoShare />
        <CiBookmark />
      </div>
    </div>
  );
};

export default NewsCard;
