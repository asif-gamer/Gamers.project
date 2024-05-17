import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import CARD1 from "../assets/HomeCard/weapon.svg";
import mouseicon from "../assets/mouseicon.svg";
import agentbody from "../assets/Agent/agentbody.png";
import gun1 from "../assets/guns/sniper1.png";
import gun2 from "../assets/guns/sniper2.png";
import gun3 from "../assets/guns/sniper3.png";


import damage from "../assets/guns/damage.svg";
const WeaponsSniper = () => {
  return (
    <div className="w-[1400px] h-fit">
      <div className="flex justify-start gap-24">
        <div className="flex flex-col items-center ">
          <h1 className="text-[14px] text-white mb-2.5">Select Sidearms</h1>
          <div className="flex flex-col gap-1 items-center">
            <div className="bg-[#1A1C20] w-[48px] h-[48px] rounded-full">
              <img
                src={gun1}
                alt="logo"
                className="w-[31px] h-[22px] object-contain top-0 bottom-0 left-0 right-0 m-auto mt-4"
              />
            </div>
            <p className="text-[#B5B9BD] mb-4 text-[14px]">Classic</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="bg-[#1A1C20] w-[48px] h-[48px] rounded-full">
              <img
                src={gun2}
                alt="logo"
                className="w-[37.74px] h-[32.52px] object-contain top-0 bottom-0 left-0 right-0 m-auto mt-2"
              />
            </div>
            <p className="text-[#B5B9BD] mb-4 text-[14px]">Shorty</p>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div className="bg-[#1A1C20] w-[48px] h-[48px] rounded-full">
              <img
                src={gun3}
                alt="logo"
                className="w-[32.03px] h-[31px] object-contain top-0 bottom-0 left-0 right-0 m-auto mt-2"
              />
            </div>
            <p className="text-[#B5B9BD] mb-4 text-[14px]">Frenzy</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full">
          <h3 className="flex items-center  text-xl text-gray-400 font-normal tracking-tighter mb-5">
            <Link to="/home">
              <img src={Arrow} alt="logo" className="w-[25px] h-[10px]" />
            </Link>
            <span className="text-[16px]">Game Guide / Valorant /</span>
            <span className="text-white font-normal text-[16px] ">Weapons</span>
          </h3>
          <div className="flex flex-col gap-3 p-7  bg-[#1A1C1F] h-[164px] rounded-t-2xl">
            <div className="flex items-center gap-[20px] ">
              <img
                src={CARD1}
                alt="logo"
                className=" w-[40px] h-[40px] object-cover rounded-lg"
              />
              <span className="text-white text-[24px]">Weapons</span>
            </div>
            <p className="text-white text-[14px] ">
              Check out Classic headshot % by range, primary and alt fire modes
              and rates of fire, magazine capacity, wall penetration rating
            </p>
            <div className="flex items-start gap-[32px] mt-4">
              <Link to="/weapons">
                <p className=" text-[14px] text-[#7D8185]">Sidearms</p>
              </Link>
              <Link to="/smgs">
                <p className=" text-[14px] text-[#7D8185]">SMGs</p>
              </Link>
              <Link to="/shotguns">
                <p className="text-[14px] text-[#7D8185]">Shotguns</p>
              </Link>
              <Link to="/rifles">
                <p className="text-[14px] text-[#7D8185]">Rifles</p>
              </Link>
              <Link to="/snipers">
                <p className="font-semibold text-[16px] text-white border-b-4 pb-3 border-[#2E9BFA]">
                  Snipers
                </p>
              </Link>
              <Link to="/heavy">
                <p className="text-[14px] text-[#7D8185]">Heavy</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col  sm:h-[1600px] md:h-[1440px] p-10  rounded-b-2xl  gap-x-4 gap-y-4">
            <div className="flex items-start  gap-[32px] ">
              <Link to="#">
                <p className="flex font-semibold  items-center text-white border-b-4 pb-2 border-[#2E9BFA]">
                  <img
                    src={mouseicon}
                    alt="logo"
                    className="w-[32px] h-[32px]"
                  />
                  <p className="text-[16px]">Primary</p>
                </p>
              </Link>
              <Link to="#" className="flex items-center">
                <img src={mouseicon} alt="logo" className="w-[32px] h-[32px]" />
                <p className=" text-[14px] text-[#7D8185]">Alt. Fire</p>
              </Link>
            </div>
            <div className="flex">
              <div className="flex flex-col gap-2">
                <img
                  src={agentbody}
                  alt="logo"
                  className="w-[620px] h-[369px] rounded-3xl p-2"
                />
                <div className="px-2 flex  gap-3 ">
                  <div className="flex items-center gap-4">
                    <p className="text-[14px] text-[#7D8185]">Classic</p>
                    <p className="text-white  text-[16px]">Primary</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[14px] text-[#7D8185]">Fire Mode</p>
                    <p className="text-white text-[16px]">Semi-Automatic</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-[14px] text-[#7D8185]">Fire Rate</p>
                    <p className="text-white  text-[16px]">
                      6.57 <span className="text-[#7D8185]">Rounds/Sec</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-2">
                <div className="bg-[#1A1C1F] w-[300px] h-[149px] rounded-3xl flex flex-col border-2 border-blue-400  z-30 ">
                  <img
                    src={gun1}
                    alt="logo"
                    className="w-[101px] h-[73px] rounded-2xl top-0 bottom-0 left-0 right-0 m-auto mt-5"
                  />
                  <p className="text-white text-[14px] text-center mb-4">
                    Classic
                  </p>
                </div>
                <div className="flex flex-col  h-[551px] w-[300px] rounded-b-3xl bg-[#1A1C1F] -mt-4">
                  <div className="flex flex-col gap-1.5 mt-8">
                    <div className="flex flex-col  px-6  text-2xl">
                      <p className="text-white text-[14px] ">Pricing</p>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">Cost</p>
                        <p className="text-white text-[14px] font-semibold">
                          150
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col px-6 text-2xl">
                      <p className="text-white text-[14px] ">Primary Fire</p>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">Fire-Mode</p>
                        <p className="text-white text-[14px] font-semibold">
                          Semi-Automatic
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">
                          Rate of Fire
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          6.76
                          <span className="text-[#7D8185] text-[14px]">
                            Rounds/Sec
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col  px-6  text-2xl">
                      <p className="text-white text-[14px] ">Ail. Fire</p>
                      <div className="flex justify-between ">
                        <p className="text-[#7D8185] text-[14px] w-1/2">
                          Fire Mode
                        </p>
                        <p className="text-white text-[14px] font-semibold items-center w-1/2">
                          3-Round Burst, spread increase
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">
                          Rate of Fire
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          2.22
                          <span className="text-[#7D8185] text-[14px]">
                            Rounds/Sec
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col px-6 text-2xl">
                      <p className="text-white text-[14px] ">Other Details</p>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">
                          Magazine Capacity
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          12
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">
                          Wall Penetration
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          Low
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">
                          Reload Speed
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          Low
                        </p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-[#7D8185] text-[14px]">
                          Drop off Distance
                        </p>
                        <p className="text-white text-[14px] font-semibold">
                          Low
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#1A1C1F] rounded-3xl h-[213px] w-[300px] mt-4 ">
                  <div className="flex justify-between p-5">
                    <div className="flex flex-col justify-between">
                      <p className="text-center mb-3 text-[12px] text-[#7D8185]">
                        0-30
                      </p>
                      <div className="flex">
                        <img
                          src={damage}
                          alt="logo"
                          className="w-[48.81px] h-[132px]"
                        />
                        <div className="flex flex-col justify-between">
                          <p className="text-[#2E9BFA] text-[12px]"> - 78</p>
                          <p className="text-[#266AC6] text-[12px] mb-3">
                            {" "}
                            - 32
                          </p>
                          <p className="text-[#B5B9BD] text-[12px] mb-2.5">
                            {" "}
                            - 23
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between ">
                      <p className="text-center mb-3 text-[12px] text-[#7D8185]">
                        0-30
                      </p>
                      <div className="flex">
                        <img
                          src={damage}
                          alt="logo"
                          className="w-[48.81px] h-[132px]"
                        />
                        <div className="flex flex-col justify-between ">
                          <p className="text-[#2E9BFA] text-[12px]"> - 78</p>
                          <p className="text-[#266AC6] text-[12px] mb-3">
                            {" "}
                            - 32
                          </p>
                          <p className="text-[#B5B9BD] text-[12px] mb-2.5">
                            {" "}
                            - 23
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponsSniper;
