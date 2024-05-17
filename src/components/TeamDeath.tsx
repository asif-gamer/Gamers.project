import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import CARD1 from "../assets/HomeCard/location.svg";
import DetailCard from "./DetailCard";
import teamImg1 from "../assets/teamImg/teamimg1.png";
import teamImg2 from "../assets/teamImg/teamimg2.png";
import teamImg3 from "../assets/teamImg/teamimg3.png";
import teamImg4 from "../assets/teamImg/teamimg4.png";

const TeamDeath = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[1135px] w-full px-4">
        <h3 className="flex items-center gap-2 text-xl text-gray-400 font-normal tracking-tighter mb-5">
          <Link to="/home">
            <img src={Arrow} alt="logo" className="w-[25px] h-[15px]" />
          </Link>
          <span>Game Guide / Valorant /</span>
          <span className="text-white font-normal">Maps</span>
        </h3>
        <div className="flex flex-col gap-2.5 p-7  bg-[#1A1C1F] h-[200px] md:h-[175px] rounded-t-2xl">
          <div className="flex items-center gap-4 ">
            <img
              src={CARD1}
              alt="logo"
              className=" w-[40px] h-[40px] object-cover rounded-lg"
            />
            <span className="text-white text-2xl">Maps</span>
          </div>
          <p className="text-white ">
            Use our interactive map tool to quickly and easily learn 1300+
            lineups for every agent with pro video examples.
          </p>
          <div className="flex items-start gap-6 mt-4">
            <Link to="/home/details">
              <p className=" text-xl text-[#7D8185]">Standard</p>
            </Link>
            <Link to="/teamdeath">
              <p className="font-semibold text-2xl text-white border-b-4 pb-2 border-[#2E9BFA]">
                Team Deathmatch
              </p>
            </Link>
            <Link to="/practice">
              <p className="text-xl text-[#7D8185]">Practice</p>
            </Link>
          </div>
        </div>

        <div className="bg-[#0c0c0c] sm:h-[1600px] md:h-[800px] p-10  rounded-b-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 ">
          <Link to="/district">
            {" "}
            <DetailCard image={teamImg1} title="District" />
          </Link>
          <Link to="/kasbah">
            {" "}
            <DetailCard image={teamImg2} title="Kasbah" />
          </Link>
          <Link to="/piazza">
            {" "}
            <DetailCard image={teamImg3} title="Piazza" />
          </Link>
          <Link to="/drift">
            {" "}
            <DetailCard image={teamImg4} title="Drift" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamDeath;
