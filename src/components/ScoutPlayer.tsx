import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import CARD1 from "../assets/HomeCard/stact.svg";
import downarrow from "../assets/downarrow.svg";
import space from "../assets/space.svg";
import searchicon from "../assets/seaechicon.svg";
import agent1 from "../assets/Agent/agent1.png";
import agent2 from "../assets/Agent/agent2.png";
import agent3 from "../assets/Agent/agent3.png";
import agent4 from "../assets/Agent/agent4.png";
import agent5 from "../assets/Agent/agent5.png";
import agent6 from "../assets/Agent/agent6.png";

const ScoutPlayer = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1244px] w-full px-4">
        <h3 className="flex items-center gap-2 text-xl text-gray-400 font-normal tracking-tighter mb-5">
          <Link to="/home">
            <img src={Arrow} alt="logo" className="w-[25px] h-[15px]" />
          </Link>
          <span>Game Guide / Valorant /</span>
          <span className="text-white font-normal">Scout Players</span>
        </h3>
        <div className="flex flex-col gap-2.5 p-7  bg-[#1A1C1F] h-[200px] md:h-[125px] rounded-t-2xl">
          <div className="flex items-center gap-4 ">
            <img
              src={CARD1}
              alt="logo"
              className=" w-[40px] h-[40px] object-cover rounded-lg"
            />
            <span className="text-white text-2xl">Scout Players</span>
          </div>
          <p className="text-white">
            View map win rates and play rates for any rank or game mode.
          </p>
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
            <div className="flex items-center gap-36 w-[1100px]">
              <div className="flex items-center gap-12 ">
                <span className="text-[#B5B9BD] font-thin text-xl">S.No</span>
                <span className="text-[#B5B9BD] font-thin text-xl">Player</span>
              </div>
              <div className="flex items-center gap-16 ">
                <span className="text-[#B5B9BD] font-thin text-xl ">Rank</span>
                <span className="text-[#B5B9BD] font-thin text-xl">Role</span>
                <span className="text-[#B5B9BD] font-thin text-xl ">
                  Agents
                </span>
                <span className="text-[#B5B9BD] font-thin text-xl">Place</span>
                <span className="text-[#B5B9BD] font-thin text-xl">
                  Language
                </span>
                <span className="text-[#B5B9BD] font-thin text-xl">Age</span>
                <span className="text-[#B5B9BD] font-thin text-xl">Salary</span>
                <span className="text-[#B5B9BD] font-thin text-xl">
                  Profile
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-[#FAFBFC]">1</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={agent1}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-[#FAFBFC] ">Lacto</p>
              </div>
              <div className="ml-5 flex items-center gap-10">
                <span className="text-[#FAFBFC]">Immortal</span>
                <span className="text-[#FAFBFC]">Lurker</span>
                <span className="text-[#FAFBFC]">Contrller</span>
                <span className="text-[#FAFBFC]">Bengaluru</span>
                <span className="text-[#FAFBFC] mr-16">English,Hindi</span>
                <span className="text-[#FAFBFC]">17</span>
                <span className="text-[#FAFBFC]">Free Agent</span>
                <span className="text-[#2E9BFA] ">View</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-[#FAFBFC]">2</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={agent2}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-[#FAFBFC]">Lacto</p>
              </div>
              <div className="ml-5 flex items-center gap-10">
                <span className="text-[#FAFBFC]">Immortal</span>
                <span className="text-[#FAFBFC]">Lurker</span>
                <span className="text-[#FAFBFC]">Contrller</span>
                <span className="text-[#FAFBFC]">Bengaluru</span>
                <span className="text-[#FAFBFC] mr-16">English,Hindi</span>
                <span className="text-[#FAFBFC]">17</span>
                <span className="text-[#FAFBFC]">Free Agent</span>
                <span className="text-[#2E9BFA] ">View</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-[#FAFBFC]">3</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={agent3}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-[#FAFBFC]">Lacto</p>
              </div>
              <div className="ml-5 flex items-center gap-10">
                <span className="text-[#FAFBFC]">Immortal</span>
                <span className="text-[#FAFBFC]">Lurker</span>
                <span className="text-[#FAFBFC]">Contrller</span>
                <span className="text-[#FAFBFC]">Bengaluru</span>
                <span className="text-[#FAFBFC] mr-16">English,Hindi</span>
                <span className="text-[#FAFBFC]">17</span>
                <span className="text-[#FAFBFC]">Free Agent</span>
                <span className="text-[#2E9BFA] ">View</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-[#FAFBFC]">4</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={agent4}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-[#FAFBFC]">Lacto</p>
              </div>
              <div className="ml-5 flex items-center gap-10">
                <span className="text-[#FAFBFC]">Immortal</span>
                <span className="text-[#FAFBFC]">Lurker</span>
                <span className="text-[#FAFBFC]">Contrller</span>
                <span className="text-[#FAFBFC]">Bengaluru</span>
                <span className="text-[#FAFBFC] mr-16">English,Hindi</span>
                <span className="text-[#FAFBFC]">17</span>
                <span className="text-[#FAFBFC]">Free Agent</span>
                <span className="text-[#2E9BFA] ">View</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-[#FAFBFC]">5</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={agent5}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-[#FAFBFC]">Lacto</p>
              </div>
              <div className="ml-5 flex items-center gap-10">
                <span className="text-[#FAFBFC]">Immortal</span>
                <span className="text-[#FAFBFC]">Lurker</span>
                <span className="text-[#FAFBFC]">Contrller</span>
                <span className="text-[#FAFBFC]">Bengaluru</span>
                <span className="text-[#FAFBFC] mr-16">English,Hindi</span>
                <span className="text-[#FAFBFC]">17</span>
                <span className="text-[#FAFBFC]">Free Agent</span>
                <span className="text-[#2E9BFA]  ">View</span>
              </div>
            </div>
            <div className="flex items-center justify-between w-[1100px]">
              <span className="text-[#FAFBFC] ">6</span>
              <div className="flex items-center -ml-2.5 gap-3">
                <img
                  src={agent6}
                  alt="logo"
                  className="w-[50px] h-[50px] rounded-lg"
                />
                <p className="text-[#FAFBFC]  text-xl">Lacto</p>
              </div>
              <div className="ml-5 flex items-center gap-10">
                <span className="text-[#FAFBFC] ">Immortal</span>
                <span className="text-[#FAFBFC] ">Lurker</span>
                <span className="text-[#FAFBFC] ">Contrller</span>
                <span className="text-[#FAFBFC] ">Bengaluru</span>
                <span className="text-[#FAFBFC]  mr-16">English,Hindi</span>
                <span className="text-[#FAFBFC] ">17</span>
                <span className="text-[#FAFBFC] ">Free Agent</span>
                <span className="text-[#2E9BFA]  ">View</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoutPlayer;
