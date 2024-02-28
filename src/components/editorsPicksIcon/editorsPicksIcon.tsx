import React from "react";

interface SingleDivProps {
  initialValue: boolean;
  onClick: () => void;
}

const SingleDiv: React.FC<SingleDivProps> = ({ initialValue, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`h-1 bg-red-600 m-1 transition-opacity ${
        initialValue ? "w-[25px] opacity-100" : "opacity-20 w-[15px]"
      }`}
    ></div>
  );
};

export default SingleDiv;
