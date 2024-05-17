import { Link } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import CARD1 from "../../assets/HomeCard/stact.svg";
import downarrow from "../../assets/downarrow.svg";
import space from "../../assets/space.svg";
import searchicon from "../../assets/seaechicon.svg";
import lacto from "../../assets/stat/lotus.jpg";
import soham from "../../assets/stat/soham.png";
import kristin from "../../assets/stat/kristin.png";
import marjorie from "../../assets/stat/marjorie.png";
import darrell from "../../assets/stat/darrell.png";
import arlene from "../../assets/stat/arlene.png";

const MapStat = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1244px] w-full px-4">
        <h3 className="flex items-center gap-2 text-xl text-gray-400 font-normal tracking-tighter mb-5">
          <Link to="/home">
            <img src={Arrow} alt="logo" className="w-[25px] h-[15px]" />
          </Link>
          <span>Game Guide / Valorant /</span>
          <span className="text-white font-normal">Game Statistics</span>
        </h3>
        <div className="flex flex-col gap-2.5 p-7  bg-[#1A1C1F] h-[200px] md:h-[175px] rounded-t-2xl">
          <div className="flex items-center gap-4 ">
            <img
              src={CARD1}
              alt="logo"
              className=" w-[40px] h-[40px] object-cover rounded-lg"
            />
            <span className="text-white text-2xl">Game Statistics</span>
          </div>
          <p className="text-white">
            View map win rates and play rates for any rank or game mode.
          </p>
          <div className="flex items-start gap-6 mt-4">
            <Link to="/mapstat">
              <p className="font-semibold text-2xl text-white border-b-4 pb-2 border-[#2E9BFA]">
                Maps
              </p>
            </Link>
            <Link to="/agentstat">
              <p className=" text-xl text-[#7D8185]">Agents</p>
            </Link>
            <Link to="/weaponstat">
              <p className="text-xl text-[#7D8185]">Weapons</p>
            </Link>
          </div>
        </div>

        <div className="bg-[#0c0c0c]  h-[750px] p-7  rounded-b-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
          <div className="flex flex-col gap-7 ">
            <div className="flex justify-between w-[1140px]">
              <div className="flex gap-4 ">
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[170px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <p className="text-white text-2xl font-thin">Competitive</p>
                    <img src={downarrow} alt="logo" className="w-4 h-4 mt-1" />
                  </div>
                </div>
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[190px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <img src={space} alt="logo" className="w-6 h-6 " />
                    <p className="text-white text-2xl font-thin">Platinum 3</p>
                    <img src={downarrow} alt="logo" className="w-4 h-4 mt-1" />
                  </div>
                </div>
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[170px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <p className="text-white text-2xl font-thin">
                      Ep 7 - Act 1
                    </p>
                    <img src={downarrow} alt="logo" className="w-4 h-4 mt-1" />
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[230px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <img src={searchicon} alt="logo" className="w-6 h-6 mt-1" />
                    <p className="text-[#7D8185] text-2xl font-thin">
                      Search Agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-[#B5B9BD] font-thin text-xl">Rank</span>
              <span className="text-[#B5B9BD] font-thin text-xl">Map</span>
              <span className="text-[#B5B9BD] font-thin text-xl ">
                Play Rate
              </span>
              <span className="text-[#B5B9BD] font-thin text-xl">
                Atk Round win%
              </span>
              <span className="text-[#B5B9BD] font-thin text-xl ">
                Def Round win%
              </span>
              <span className="text-[#B5B9BD] font-thin text-xl">Matches</span>
            </div>
            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">1</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={lacto}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Lacto</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">12.5%</span>
              <span className="text-[#95D97D] font text-xl mr-28 ml-20">
                50%
              </span>
              <span className="text-[#95D97D] font text-xl mr-16">64%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">2</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={soham}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Soham</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">14.5%</span>
              <span className="text-[#FF523B] font text-xl mr-28 ml-20">
                24%
              </span>
              <span className="text-[#95D97D] font text-xl mr-16">50%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex bg-[#212426] px-3 rounded-xl items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">3</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={kristin}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Kristin</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">25.5%</span>
              <span className="text-[#FF523B] font text-xl mr-28 ml-20">
                34%
              </span>
              <span className="text-[#95D97D] font text-xl mr-16">64%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">4</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={marjorie}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Marjorie</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">45.5%</span>
              <span className="text-[#FF523B] font text-xl mr-28 ml-20">
                04%
              </span>
              <span className="text-[#95D97D] font text-xl mr-16">78%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>

            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">5</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={darrell}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Darrell</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">23.5%</span>
              <span className="text-[#95D97D] font text-xl mr-28 ml-20">
                83%
              </span>
              <span className="text-[#95D97D] font text-xl mr-16">50%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">6</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={arlene}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Arlene</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">12%</span>
              <span className="text-[#95D97D] font text-xl mr-28 ml-20">
                83%
              </span>
              <span className="text-[#FF523B] font text-xl mr-16">32%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1000px]">
              <span className="text-white font text-xl">7</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={arlene}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-white font text-xl">Arlene</p>
              </div>
              <span className="text-[#B5B9BD] font text-xl">12%</span>
              <span className="text-[#95D97D] font text-xl mr-28 ml-20">
                83%
              </span>
              <span className="text-[#FF523B] font text-xl mr-16">14%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapStat;
