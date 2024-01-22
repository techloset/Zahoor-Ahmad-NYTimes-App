import NewsProps from "../../interfaces/NewsType";

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
    // <div className="min-h-[500px] flex flex-col sm:gap-[76px]">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.14901 16C9.14901 16 0 7.64952 0 4.68445C0 1.52744 1.67312 0 5.14632 0C6.86175 0 9.14901 2.5811 9.14901 2.5811C9.14901 2.5811 11.4363 0 13.1517 0C16.6249 0 18.298 1.52644 18.298 4.68445C18.298 7.64952 9.14901 16 9.14901 16ZM13.1517 1.03264C12.2494 1.03264 9.14901 3.61179 9.14901 3.61179C9.14901 3.61179 6.04749 1.03264 5.14632 1.03264C2.10656 1.03264 1.14363 2.15932 1.14363 4.82149C1.14363 7.32371 9.14901 14.4504 9.14901 14.4504C9.14901 14.4504 17.1544 7.32371 17.1544 4.82149C17.1544 2.15932 16.1915 1.03264 13.1517 1.03264Z"
                fill="#2A2A2A"
              />
            </svg>
            <span className="text-[10px]">29</span>
          </div>
          <div className="flex items-center gap-[7px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.3242 16H1.14204C0.579889 16 0.125488 15.553 0.125488 15.001V5C0.125488 4.448 0.579889 4 1.14204 4H2.66688V5H1.65032C1.36975 5 1.14204 5.225 1.14204 5.5V14.5C1.14204 14.777 1.36975 15.001 1.65032 15.001H11.8159C12.0954 15.001 12.3242 14.777 12.3242 14.5V5.5C12.3242 5.225 12.0954 5 11.8159 5H10.7993V4H12.3242C12.8853 4 13.3407 4.448 13.3407 5V15.001C13.3407 15.553 12.8853 16 12.3242 16ZM8.93498 3.35693L7.24138 1.69092V11.5C7.24138 11.776 7.01266 12 6.7331 12C6.45253 12 6.22483 11.776 6.22483 11.5V1.69092L4.53023 3.35693C4.33709 3.54793 4.02189 3.54793 3.82875 3.35693C3.6356 3.16793 3.6356 2.85697 3.82875 2.66797L6.33973 0.196899C6.34278 0.192899 6.34885 0.191012 6.3519 0.187012C6.36308 0.174012 6.35906 0.154968 6.37125 0.141968C6.39057 0.123968 6.41793 0.129967 6.43826 0.115967C6.51349 0.0559668 6.6009 0.0149346 6.70357 0.00793457C6.7117 0.00793457 6.71891 0.00292969 6.72603 0.00292969C6.72908 0.00292969 6.73105 0 6.7341 0C6.73715 0 6.73924 0.00192969 6.74229 0.00292969C6.74839 0.00192969 6.75244 0.00598145 6.75854 0.00598145C6.87951 0.0119814 6.98924 0.0589346 7.07361 0.132935C7.08073 0.139935 7.09196 0.136944 7.09806 0.142944C7.10416 0.150944 7.10112 0.161969 7.10823 0.167969C7.1123 0.171969 7.11124 0.179937 7.11531 0.184937L9.63845 2.66797C9.83262 2.85697 9.83262 3.16793 9.63845 3.35693C9.44328 3.54893 9.12914 3.54893 8.93498 3.35693Z"
                fill="#2A2A2A"
              />
            </svg>
            <span className="text-[10px]">28</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="11"
            height="16"
            viewBox="0 0 11 16"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.23464 12L0.151855 16V1C0.151855 0.447715 0.599571 0 1.15186 0H9.31742C9.8697 0 10.3174 0.447715 10.3174 1V16L5.23464 12ZM9.30086 2C9.30086 1.44772 8.85315 1 8.30086 1H2.16841C1.61613 1 1.16841 1.44772 1.16841 2V14L5.23464 10.5L9.30086 14V2Z"
              fill="#2A2A2A"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
