import { useState } from "react";
import { NewsProps } from "../../types/Types";
import NewsModal from "../newsModal/NewsModal";

const EditorsPicksCards: React.FC<NewsProps> = ({
  headline,
  description,
  imageSource,
  imageAlternative,
  pubishedAt,
  byLine,
  _id,
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
        className="sm:w-[667px] w-[343px] flex gap-[15px] flex-wrap hover:cursor-pointer"
      >
        <div className="sm:w-[272px] w-full h-[170px] overflow-hidden rounded-md">
          <img src={imageSource} alt={imageAlternative} />
        </div>
        <div>
          <h1 className="font-IBM font-semibold text-[18px] h-[71px] max-w-[380px] ">
            {headline}
          </h1>
          <p className="font-Nunito text-[16px] h-[68px] max-w-[380px]">
            {description}
          </p>
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
        pubishedAt={pubishedAt?.split("T")[0].toString()}
        byLine={byLine}
      />
    </div>
  );
};

export default EditorsPicksCards;
