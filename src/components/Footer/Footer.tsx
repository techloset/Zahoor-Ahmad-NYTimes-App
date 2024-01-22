import footerLogo from "./footer-logo.png";

const Footer = () => {
  return (
    <footer className="sm:flex  w-full sm:h-[250px] h-[290px] bg-slate-900 mb-0">
      {/* <div className="sm:flex sm:w-[1920px] sm:h-[250px] w-[375px] h-[290px] bg-slate-900"> */}

      <div className="sm:mr-[188px] mr-[94px]">
        <img
          className="sm:ml-[448px] ml-[154px] sm:pt-[79px] pt-[20px] sm:mb-[41px] mb-[7px]"
          src={footerLogo}
          alt="Footer Logo"
          height="66px"
          width="66px"
        />
        <p className="sm:ml-[395px] ml-[94px] text-white text-xs font-normal font-['Poppins'] leading-[25.20px] tracking-tight sm:pb-[64px] pb-[15px]">
          copyright © 2024 | NBC NEWS
        </p>
      </div>
      <div className="w-[221px] h-[116px] text-white text-[15px] font-medium font-['Poppins'] leading-loose tracking-tight mr-[148px] mt-[80px] hidden sm:block">
        <ul>
          <li>Privacy Policy</li>
          <li>Do not sell my personal info</li>
          <li>Terms of Service</li>
          <li>nbcnews.com Site Map</li>
        </ul>
      </div>
      <div className="justify-center text-white text-[15px] font-medium font-['Poppins'] leading-loose tracking-tight mr-[392px] sm:mt-[80px] mt-[0px]">
        <ul className="flex sm:gap-6 flex-col sm:flex-row min-w-full text-center">
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Coupons</li>
        </ul>
        <div className="flex gap-[51.43px] sm:mt-[30px] justify-end">
          {/* <FaRss /> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="w-7 h-7"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M27.9997 27.9999C27.9997 12.5609 15.4389 0 0.00012207 0V5.33297C12.4989 5.33297 22.6668 15.5009 22.6668 27.9999H27.9997ZM0.000366211 24C0.000366211 26.209 1.79134 28 4.0003 28C6.20927 28 8.00024 26.209 8.00024 24C8.00024 21.791 6.20927 20 4.0003 20C1.79134 20 0.000366211 21.791 0.000366211 24ZM0 9.33325C10.2928 9.33325 18.6667 17.7072 18.6667 28.0002H13.3338C13.3338 20.6482 7.35188 14.6672 0 14.6672V9.33325Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="25"
            viewBox="0 0 30 25"
            fill="none"
            className="w-[29.04px] h-6"
          >
            <path
              d="M14.5297 7.0987L14.5926 8.13676L13.5434 8.00965C9.72425 7.5224 6.38776 5.86997 3.55488 3.09474L2.16992 1.71772L1.81318 2.7346C1.05775 5.00139 1.54039 7.39529 3.11421 9.00534C3.95358 9.89511 3.76472 10.0222 2.31681 9.4926C1.81318 9.32312 1.37251 9.19601 1.33055 9.25956C1.18366 9.40786 1.68728 11.3357 2.08598 12.0983C2.63157 13.1576 3.74374 14.1957 4.96082 14.81L5.98905 15.2973L4.77197 15.3185C3.59685 15.3185 3.55488 15.3396 3.68078 15.7845C4.10047 17.1615 5.75823 18.6233 7.60484 19.2589L8.90587 19.7037L7.77272 20.3817C6.09398 21.3562 4.12145 21.907 2.14893 21.9493C1.20464 21.9705 0.428223 22.0553 0.428223 22.1188C0.428223 22.3307 2.9883 23.517 4.47819 23.9831C8.94784 25.3601 14.2569 24.7669 18.2439 22.4154C21.0767 20.7418 23.9096 17.4158 25.2316 14.1957C25.9451 12.4797 26.6586 9.3443 26.6586 7.84017C26.6586 6.86566 26.7215 6.73855 27.8966 5.57338C28.5891 4.89546 29.2396 4.15399 29.3655 3.94214C29.5754 3.53963 29.5544 3.53963 28.4842 3.89977C26.7005 4.53532 26.4487 4.45058 27.3301 3.49726C27.9806 2.81934 28.757 1.59061 28.757 1.23047C28.757 1.16691 28.4422 1.27284 28.0855 1.4635C27.7078 1.67535 26.8684 1.99313 26.2389 2.18379L25.1057 2.54394L24.0775 1.84483C23.5109 1.4635 22.7135 1.0398 22.2938 0.912694C21.2236 0.616105 19.5869 0.658475 18.6216 0.997434C15.9986 1.95076 14.3408 4.40821 14.5297 7.0987Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="26"
            viewBox="0 0 29 26"
            fill="none"
            className="w-[24.47px] h-[27.43px]"
          >
            <path
              d="M28.3269 13.1505C28.3269 11.4793 26.9754 10.152 25.3284 10.152C24.5504 10.151 23.8021 10.4504 23.2395 10.9878C21.175 9.51293 18.3484 8.55462 15.2026 8.43174L16.5787 1.99242L21.0518 2.95072C21.1013 4.08136 22.0349 4.99086 23.1904 4.99086C24.37 4.99086 25.3284 4.03256 25.3284 2.85231C25.3284 1.67271 24.3701 0.714249 23.1904 0.714249C22.3548 0.714249 21.6171 1.2058 21.2731 1.91865L16.2841 0.861779C16.1366 0.836976 15.9891 0.861779 15.8907 0.935544C15.7678 1.00931 15.6942 1.13204 15.6698 1.27957L14.1456 8.45606C10.9506 8.55462 8.07493 9.51293 5.98599 11.0124C5.42334 10.475 4.67492 10.1757 3.89688 10.1768C2.22557 10.1768 0.898438 11.5283 0.898438 13.1753C0.898438 14.404 1.63561 15.4361 2.66816 15.9034C2.61802 16.2039 2.59334 16.5081 2.59439 16.8128C2.59439 21.4329 7.977 25.1937 14.6128 25.1937C21.2488 25.1937 26.6314 21.4577 26.6314 16.8128C26.6312 16.5082 26.6065 16.2041 26.5576 15.9034C27.5897 15.4361 28.3269 14.3792 28.3269 13.1505ZM7.7309 15.2885C7.7309 14.1089 8.68921 13.1505 9.86945 13.1505C11.0491 13.1505 12.0075 14.1088 12.0075 15.2885C12.0075 16.4683 11.0492 17.4271 9.86945 17.4271C8.68937 17.4512 7.7309 16.4683 7.7309 15.2885ZM19.7004 20.966C18.2257 22.4409 15.4238 22.5393 14.6128 22.5393C13.7772 22.5393 10.9754 22.416 9.52495 20.966C9.30413 20.7449 9.30413 20.4007 9.52495 20.1796C9.74624 19.9588 10.0903 19.9588 10.3116 20.1796C11.2457 21.1137 13.2119 21.4329 14.6128 21.4329C16.0139 21.4329 18.0044 21.1136 18.9137 20.1796C19.135 19.9588 19.4791 19.9588 19.7004 20.1796C19.8969 20.4007 19.8969 20.7449 19.7004 20.966ZM19.3069 17.4514C18.1271 17.4514 17.1688 16.4931 17.1688 15.3133C17.1688 14.1336 18.1271 13.1753 19.3069 13.1753C20.487 13.1753 21.4453 14.1336 21.4453 15.3133C21.4453 16.4681 20.487 17.4514 19.3069 17.4514Z"
              fill="white"
            />
          </svg>
          <svg
            className="w-[27px] h-[27px]"
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="28"
            viewBox="0 0 29 28"
            fill="none"
          >
            <path
              d="M14.4691 0C6.89535 0 0.754883 6.17754 0.754883 13.797C0.754883 20.6824 5.7693 26.3894 12.3267 27.4284V17.7861H8.84297V13.797H12.3267V10.7572C12.3267 7.29659 14.3745 5.38827 17.5057 5.38827C19.0062 5.38827 20.578 5.65734 20.578 5.65734V9.05036H18.8444C17.1436 9.05036 16.6115 10.1156 16.6115 11.207V13.7942H20.4121L19.8045 17.7834H16.6115V27.4257C23.1689 26.3922 28.1833 20.6838 28.1833 13.797C28.1833 6.17754 22.0428 0 14.4691 0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
