import React from "react";

interface ShowMoreButtonProps {
  onClick: () => void;
  isShowingMore: boolean;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  onClick,
  isShowingMore,
}) => {
  return (
    <button
      className="w-56 h-14 border-opacity-30 rounded-sm border border-red-700 cursor-pointer text-center text-red-700 text-sm font-medium font-['Poppins'] uppercase leading-none tracking-widest"
      onClick={onClick}
    >
      {isShowingMore ? "Show Less" : "Show More"}
    </button>
  );
};

export default ShowMoreButton;
