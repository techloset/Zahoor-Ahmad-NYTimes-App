import { CiBookmark } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";

export interface NewsProps {
  headline: string;
  description: string;
  imageSource: string;
  pubishedAt: string;
  url: string;
  byLine: string;
  imageAlternative: string;
}
export default function TopStory({
  headline,
  description,
  imageSource,
  pubishedAt,
  url,
  byLine,
  imageAlternative,
}: NewsProps) {
  return (
    <div className="min-h-[500px] flex sm:gap-[76px]">
      <a href={url} target="_blank">
        <img
          className="sm:w-750px sm:h-[500px]"
          src={imageSource}
          alt={imageAlternative}
        />
      </a>
      <div>
        <div className="flex justify-between">
          <p>Trending</p>
          <div className="flex sm:gap-[20px]">
            <IoHeartOutline />
            <GoShare />
            <CiBookmark />
          </div>
        </div>
        <div>
          <h3 className="sm:w-[540px] sm:h-[123px] text-zinc-800 sm:text-[32px] font-semibold font-['IBM Plex Serif']">
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
    </div>
  );
}
