import logo from "./logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { TfiAngleDoubleRight } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="mx-auto font-[Nunito Sans] text-[16px] sm:w-[1920px] sm:h-20 bg-white bg-opacity-90 backdrop-blur-[28px]">
      <nav className="flex sm:h-[80px] h-[80px] mx-[24px] sm:mr-[277px] sm:ml-[295px] my-[14px] items-center justify-center">
        <img
          className="mr-[136px] sm:h-[52px] sm:w-[62.79px] h-[40px] w-[49.33px]"
          src={logo}
          alt="logo"
        />
        <div className="flex sm:gap-[40px] gap-[14px] items-center">
          <ul className="sm:flex hidden gap-[40px] h-[22px] items-center">
            <li className="flex gap-[4px] items-center">
              {/* <img className="h-[8px] w-[8px]" src={checkpoint} alt="red dot" /> */}
              <div className="h-[8px] w-[8px] bg-red-700 rounded-full"></div>
              <span>Corona Updates</span>
            </li>
            <li>Politics</li>
            <li>Business</li>
            <li>Sports</li>
            <li>World</li>
            <li>Travel</li>
            <li>Podcast</li>
            <TfiAngleDoubleRight className="sm:h-[12px] sm:w-[12px]" />
          </ul>
          <AiOutlineUser className="sm:h-[24px] h-[19] sm:w-[19.2px] w-[15px]" />
          <IoSearchOutline className="sm:h-[24px] sm:w-[24px] h-[19px] w-[19px] " />
          <RxHamburgerMenu className="sm:h-[24px] sm:w-[24px] h-[17px] w-[17px]" />
          {/* <img src={nav} height="22px" width="23.05px" alt="Navigation Bar" /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
