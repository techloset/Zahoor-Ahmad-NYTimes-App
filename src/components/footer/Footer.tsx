import {
  FBIcon,
  RedditIcon,
  RssIcon,
  TwitterIcon,
} from "../../assets/SVGs/Icons";
import footerLogo from "../../assets/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="sm:flex sm:flex-wrap  w-full sm:h-[290px] min-h-[290px] bg-slate-900 mb-0 justify-center">
      <div className="sm:mr-[188px] mr-[94px]">
        <img
          className="sm:ml-[448px] mx-auto sm:pt-[79px] pt-[20px] sm:mb-[41px] mb-[7px]"
          src={footerLogo}
          alt="Footer Logo"
          height="66px"
          width="66px"
        />
        <p className="sm:ml-[395px] ml-[94px] text-white text-xs font-normal font-Poppins leading-[25.20px] tracking-tight sm:pb-[64px] pb-[15px]">
          copyright © 2024 | NBC NEWS
        </p>
      </div>
      <div className="w-[221px] h-[116px] text-white text-[15px] font-medium font-Poppins leading-loose tracking-tight mr-[148px] mt-[80px] hidden sm:block">
        <ul>
          <li>Privacy Policy</li>
          <li>Do not sell my personal info</li>
          <li>Terms of Service</li>
          <li>nbcnews.com Site Map</li>
        </ul>
      </div>
      <div className="text-white text-[15px] font-medium font-Poppins leading-loose tracking-tight sm:mr-[392px] sm:mt-[80px] mt-[15px]">
        <ul className="flex sm:gap-6 flex-col sm:flex-row sm:w-full w-screen text-center">
          <li>About</li>
          <li>Contact</li>
          <li>Careers</li>
          <li>Coupons</li>
        </ul>
        <div className="flex sm:gap-[51.43px] gap-[30px] py-[30px] sm:justify-end justify-center">
          <RssIcon />
          <TwitterIcon />
          <RedditIcon />
          <FBIcon />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
