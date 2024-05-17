import "./header.css";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo.svg";
import PROFILE from "../assets/profile.jpg";
import { FaRegMessage } from "react-icons/fa6";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { HiOutlineBell } from "react-icons/hi2";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-[#15181c] w-screen mx-auto h-[60px] px-[40px] py-[12px] flex items-center justify-between custom-bottom-border ">
      <Link
        to="/"
        className="text-3xl  text-white font-bold tracking-tight mr-10 md:mr-0"
      >
        <img src={LOGO} alt="logo" className="w-[32px] h-[36px] md:h-[32px] " />
      </Link>{" "}
      <div className="flex  items-center  w-[616px] h-[36px] gap-[12px]  ">
        <form className="bg-[#2b2e30] h-[36px] w-[150px] md:w-[680px] rounded-full flex items-center gap-2">
          <FaSearch className="text-gray-600 cursor-pointer w-[16px] h-[16px] ml-3 focus:hidden" />
          <input
            type="text"
            className="bg-transparent text-white text-base focus:outline-none w-24 lg:w-[640px]"
            placeholder=""
          />
        </form>

        <button className="bg-[#2b2e30] text-white rounded-full  h-[36px] px-4 md:px-8">
          <FaPlus className="w-[20px] h-[20px] md:w-[20px] md:h-[20px]" />
        </button>
      </div>
      <div className="flex items-center gap-[32px]">
        <div className="flex items-center gap-[8px]">
          <Link
            to="#"
            className="lg:flex hidden text-white items-center w-[32px] h-[32px] bg-[#2b2e30] rounded-full "
          >
            <FaRegMessage className="ml-2 " />
          </Link>
          <Link
            to="#"
            className="lg:flex hidden text-white items-center w-[32px] h-[32px] bg-[#2b2e30] rounded-full "
          >
            <HiOutlineUserGroup className="ml-2 " />
          </Link>
          <Link
            to="#"
            className="lg:flex hidden text-white w-[32px] h-[32px] bg-[#2b2e30] rounded-full  "
          >
            <HiOutlineBell className="w-[20px] h-[20px] ml-1.5 mt-1.5 " />
          </Link>
        </div>

        <Link to="#" className="flex  items-center font-bold">
          <img
            src={PROFILE}
            alt="profile"
            className=" w-[56px] md:h-[32px] md:w-[32px] rounded-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
