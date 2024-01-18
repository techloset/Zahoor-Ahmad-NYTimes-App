const BreakingNewsAlert = () => {
  return (
    <div className="w-full sm:w-[1366px] sm:h-[80px] h-[181px] bg-red-700 flex gap-[20px] sm:gap-[60px] items-center justify-center font-Poppins mx-[24px] sm:mx-[px] my-14 sm:flex-row flex-col">
      <button className="bg-white text-red-700 h-[54px] w-[157px] text-[16px]">
        Breaking News
      </button>
      <p className="text-white text-[20px] text-center">
        Kanye West says he's running for president in 2020.
      </p>
    </div>
  );
};

export default BreakingNewsAlert;
