import { Link } from "react-router-dom";
import {
  AngularBrackets,
  NavIcon,
  SearchIcon,
  UserProfile,
} from "../../assets/SVGs/Icons";
import Logo from "../../assets/Logo.png";

const Navbar = () => {
  const navbarList: string[] = [
    "Politics",
    "Business",
    "Sports",
    "World",
    "Travel",
    "Podcast",
  ];

  return (
    <div className="flex w-[1920px] justify-center relative">
      <div className="w-full font-Nunito text-[16px] bg-white sm:h-20 bg-opacity-80 backdrop-blur-[28px] h-20 fixed top-0">
        <nav className="flex my-3.5 items-center sm:justify-center justify-between mx-6">
          <div className="md:mr-36 sm:mr-24 ">
            <Link to="/">
              <img
                className="sm:h-14 sm:w-16 h-10 w-12"
                src={Logo}
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex sm:gap-10 gap-3.5 items-center justify-evenly">
            <ul className="w-[48rem] sm:flex hidden gap-10  sm:gap-5 h-6 items-center">
              <li className="flex gap-1 items-center">
                <div className="h-2 w-2 bg-red-700 rounded-full"></div>
                <span>Corona Updates</span>
              </li>
              {navbarList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              <AngularBrackets />
            </ul>
            <div className="flex gap-5 items-center">
              <UserProfile />
              <Link to="/search">
                <SearchIcon />
              </Link>
              <NavIcon />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
