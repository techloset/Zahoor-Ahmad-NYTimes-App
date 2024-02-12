import NewsProps from "../../types/NewsType";
import { BookMark, HeartOutline, ShareIcon } from "../../assets/SVGs/Icons";
import { useState } from "react";
import NewsModal from "../newsModal/NewsModal";

const TopStory: React.FC<NewsProps> = ({
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
    <div className="hover:cursor-pointer  ">
      <div
        onClick={openModal}
        className="flex flex-col sm:mt-[100px] sm:flex-row sm:gap-[76px] max-w-[1366px] "
      >
        <div className="hover:cursor-pointer sm:max-w-750px sm:min-w-750px sm:max-h-[500px] h-[456px] w-full overflow-hidden hidden lg:block">
          <img src={imageSource} alt={imageAlternative} />
        </div>
        <div>
          <div className="hidden sm:flex justify-between mt-[90px]">
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
            <h3 className="sm:w-[540px] sm:text-zinc-800 text-white text-2xl w-[327px] sm:text-[32px] sm:mt-0 mx-[24px] sm:mx-0 sm:mb-2  font-semibold font-IBM hidden sm:block ">
              {headline}
            </h3>
            <p className="sm:w-[500px] hidden sm:block sm:max-h-[94px] text-zinc-800 sm:text-[15px] font-normal font-Poppins leading-normal">
              {description}
            </p>
          </div>
          <div className="sm:flex sm:gap-[5px] mt-[15px] hidden">
            <p className="h-5 text-zinc-800 min-w-[94px] sm:text-[13px] font-normal font-Poppins leading-snu ">
              {pubishedAt}{" "}
            </p>
            <p className="sm:h-5 opacity-70 text-zinc-800 sm:text-[13px] font-normal font-Poppins leading-snug">
              {byLine}
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={openModal}
        style={{
          backgroundImage: `url(${imageSource})`,
        }}
        className={`bg-[url('${imageSource}')] cursor-pointer sm:hidden h-[493px] w-full overflow-hidden bg-cover bg-center bg-no-repeat flex items-end mt-[100px] mb-[0px] `}
      >
        <div className="bg-gradient-to-t from-black to-transparent w-screen h-[375px] pb-[72px] flex items-end">
          <h3 className="text-white text-2xl w-[327px] mx-[24px] font-semibold font-IBM z-[100px]">
            {headline}
          </h3>
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

export default TopStory;
