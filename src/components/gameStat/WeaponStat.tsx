import { Link } from "react-router-dom";
import Arrow from "../../assets/arrow.svg";
import CARD1 from "../../assets/HomeCard/stact.svg";
import downarrow from "../../assets/downarrow.svg";
import space from "../../assets/space.svg";
import searchicon from "../../assets/seaechicon.svg";
import gun1 from "../../assets/guns/statgun/statgun1.png";
import gun2 from "../../assets/guns/statgun/statgun2.png";
import gun3 from "../../assets/guns/statgun/statgun3.png";
import gun4 from "../../assets/guns/statgun/statgun4.png";
import gun5 from "../../assets/guns/statgun/statgun5.png";
import gun6 from "../../assets/guns/statgun/statgun6.png";
import gun7 from "../../assets/guns/statgun/statgun7.png";
import gun8 from "../../assets/guns/statgun/statgun8.png";

const WeaponStat = () => {
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
              <p className=" text-xl text-[#7D8185]"> Maps</p>
            </Link>
            <Link to="/agentstat">
              <p className="text-xl text-[#7D8185]"> Agents</p>
            </Link>
            <Link to="/weaponstat">
              <p className="font-semibold text-2xl text-white border-b-4 pb-2 border-[#2E9BFA]">
                Weapons
              </p>
            </Link>
          </div>
        </div>

        <div className="bg-[#0c0c0c]  h-[750px] p-7  rounded-b-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
          <div className="flex flex-col gap-5 ">
            <div className="flex justify-between w-[1140px]">
              <div className="flex gap-4 ">
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[170px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <p className="text-white text-2xl font-thin">General</p>
                    <img src={downarrow} alt="logo" className="w-4 h-4 mt-1" />
                  </div>
                </div>
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[170px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <p className="text-white text-2xl font-thin">Competitive</p>
                    <img src={downarrow} alt="logo" className="w-4 h-4 mt-1" />
                  </div>
                </div>
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[170px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <p className="text-white text-2xl font-thin">All Maps</p>
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
                <div className="flex bg-[#212426] rounded-xl h-[50px] w-[200px] gap-4">
                  <div className="p-2 flex gap-3 items-center ">
                    <img src={searchicon} alt="logo" className="w-6 h-6 mt-1" />
                    <p className="text-[#7D8185] text-2xl font-thin">
                      Search Agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-36 w-[1100px]">
              <div className="flex items-center gap-12">
                <span className="text-[#B5B9BD]">Rank</span>
                <span className="text-[#B5B9BD]">Weapons</span>
              </div>
              <div className="flex items-center gap-12 justify-end">
                <span className="text-[#B5B9BD]  ">Kills per round</span>
                <span className="text-[#B5B9BD] ">Alt. Kills per round</span>
                <span className="text-[#B5B9BD]">Headshot %</span>
                <span className="text-[#B5B9BD] ">Bodyshot %</span>
                <span className="text-[#B5B9BD]">Legshot %</span>
                <span className="text-[#B5B9BD]">Avg.Damage</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">1</span>
              <div className="flex items-center  gap-3">
                <img src={gun1} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Operator</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">2</span>
              <div className="flex items-center  gap-3">
                <img src={gun2} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Vendal</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">3</span>
              <div className="flex items-center  gap-3">
                <img src={gun3} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Phantom</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex bg-[#212426] px-3 rounded-xl  items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">4</span>
              <div className="flex items-center  gap-3">
                <img src={gun4} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Guardian</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">5</span>
              <div className="flex items-center  gap-3">
                <img src={gun5} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Odin</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">6</span>
              <div className="flex items-center  gap-3">
                <img src={gun6} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Marshal</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">7</span>
              <div className="flex items-center  gap-3">
                <img src={gun7} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Sherif</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-white font text-xl">8</span>
              <div className="flex items-center  gap-3">
                <img src={gun8} alt="logo" className="w-[140px] h-[50px] " />
                <p className="text-white font text-xl">Bulldog</p>
              </div>
              <span className="text-white font text-xl">0.88</span>
              <span className="text-white font text-xl">14.5/15.8/34.8</span>
              <span className="text-[#95D97D] font text-xl">64%</span>
              <span className="text-white font text-xl">07%</span>
              <span className="text-white font text-xl">206</span>
              <span className="text-[#95D97D] font text-xl">0.1%</span>
              <span className="text-white font text-xl">872,973</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponStat;
