import {
  AngularBrackets,
  NavIcon,
  SearchIcon,
  UserProfile,
} from "../../assets/SVGs/Icons";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-center relative">
      <div className="w-full font-Nunito text-[16px] bg-white w-fulll sm:h-20 bg-opacity-80 backdrop-blur-[28px] fixed top-0 h-[80px]">
        <nav className="flex my-[14px] items-center justify-center">
          <img
            className="mr-[136px] sm:h-[52px] sm:w-[62.79px] h-[40px] w-[49.33px]"
            src={logo}
            alt="logo"
          />
          <div className="flex sm:gap-[40px] gap-[14px] items-center justify-evenly">
            <ul className="w-[893px] sm:flex hidden gap-[40px] h-[22px] items-center">
              <li className="flex gap-[4px] items-center">
                <div className="h-[8px] w-[8px] bg-red-700 rounded-full"></div>
                <span>Corona Updates</span>
              </li>
              <li>Politics</li>
              <li>Business</li>
              <li>Sports</li>
              <li>World</li>
              <li>Travel</li>
              <li>Podcast</li>
              <AngularBrackets />
            </ul>
            <UserProfile />
            <SearchIcon />
            <NavIcon />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
