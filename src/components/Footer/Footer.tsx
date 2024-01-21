import footerLogo from "./footer-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

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
        <div className="flex gap-[51.43px] sm:mt-[30px] sm:justify-end">
          <FaRss className="w-7 h-7" />
          <FaTwitter className="w-[29.04px] h-6" />
          <FaRedditAlien className="w-[24.47px] h-[27.43px]" />
          <FaFacebook className="w-[27px] h-[27px]" />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
