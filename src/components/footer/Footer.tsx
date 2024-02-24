import {
  FBIcon,
  RedditIcon,
  RssIcon,
  TwitterIcon,
} from "../../assets/SVGs/Icons";
import footerLogo from "../../assets/FooterLogo.png";

const Footer = () => {
  const list1 = [
    "Privacy Policy",
    "Do not sell my personal info",
    "Terms of Service",
    "nbcnews.com Site Map",
  ];
  const list2 = ["About", "Contact", "Careers", "Coupons"];
  return (
    <footer className="w-full sm:h-[250px] flex justify-center items-center h-[290px] bg-slate-900">
      <div className="flex flex-wrap flex-col sm:flex-row justify-between items-center sm:w-[1133px] sm:h-[117px] min-h-[222px] w-[184px]">
        <div className="flex flex-col sm:w-[189px] sm:h-[107px] h-[73px] sm:justify-between justify-center items-center">
          <div className="sm:h-[66px] w-[66px] h-10">
            <img src={footerLogo} alt="Footer Logo" />
          </div>
          <p className="text-white text-xs font-normal font-Poppins opacity-50">
            copyright {<span>&#169;</span>} 2020 | NBC NEWS
          </p>
        </div>
        <div className="w-[221px] sm:h-[116px] h-[83px] text-white text-[15px] font-medium font-Poppins hidden sm:block">
          <ul className="leading-8">
            {list1.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="text-white text-[15px] flex flex-col gap-[30px] justify-start font-medium font-Poppins sm:h-[90px]">
          <ul className="flex sm:justify-between sm:w-[387px] flex-col mt-[7px] sm:mt-0 sm:h-[32px] sm:flex-row w-full text-center">
            {list2.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className="flex w-full justify-end h-[28px]">
            <div className="flex sm:w-[266px] w-[189px] justify-between">
              <RssIcon />
              <TwitterIcon />
              <RedditIcon />
              <FBIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
