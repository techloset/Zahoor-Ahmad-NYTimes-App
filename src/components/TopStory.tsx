import { CiBookmark } from "react-icons/ci";
import { GoShare } from "react-icons/go";
import { IoHeartOutline } from "react-icons/io5";

export interface NewsProps {
  _id: string;
  headline: string;
  description?: string;
  imageSource?: string;
  pubishedAt?: string;
  url?: string;
  byLine: string;
  imageAlternative?: string;
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
    <div className="min-h-[500px] flex sm:gap-[76px] mt-[32px] ">
      <div className="sm:max-w-750px sm:min-w-750px sm:max-h-[500px] overflow-hidden">
        <img src={imageSource} alt={imageAlternative} />
      </div>
      <div>
        <div className="flex justify-between mt-[90px]">
          <p className="text-red-700 text-sm font-semibold font-Poppins leading-[29.40px] tracking-tight">
            Trending
          </p>
          <div className="flex sm:gap-[20px]">
            <IoHeartOutline />
            <GoShare />
            <CiBookmark />
          </div>
        </div>
        <div>
          <a href={url} target="_blank">
            <h3 className="sm:w-[540px] text-zinc-800 sm:text-[32px] font-semibold font-IBM">
              {headline}
            </h3>
          </a>
          <p className="sm:w-[500px] sm:h-[94px] text-zinc-800 sm:text-[15px] font-normal font-Poppins leading-normal">
            {description}
          </p>
        </div>
        <div className="flex sm:gap-[9px] mt-[30px]">
          <p className="h-5 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snu ">
            {pubishedAt}{" "}
          </p>
          <p className="sm:h-5 opacity-70 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snug">
            {byLine}
          </p>
        </div>
      </div>
    </div>
  );
}
