import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import CARD1 from "../assets/HomeCard/location.svg";
import DetailCard from "./DetailCard";
import delimg1 from "../assets/DetailCard/detimg1.png";
import delimg2 from "../assets/DetailCard/detimg2.png";
import delimg3 from "../assets/DetailCard/detimg3.png";
import delimg4 from "../assets/DetailCard/detimg4.png";
import delimg5 from "../assets/DetailCard/detimg5.png";
import delimg6 from "../assets/DetailCard/detimg6.png";
import delimg7 from "../assets/DetailCard/detimg7.jpg";
import delimg9 from "../assets/DetailCard/detimg9.jpg";

const DetailsPage = () => {
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
              <p className="font-semibold text-2xl text-white border-b-4 pb-2 border-[#2E9BFA]">
                Standard
              </p>
            </Link>
            <Link to="/teamdeath">
              <p className=" text-xl text-[#7D8185]">Team Deathmatch</p>
            </Link>
            <Link to="/practice">
              <p className="text-xl text-[#7D8185]">Practice</p>
            </Link>
          </div>
        </div>

        <div className="bg-[#0c0c0c] sm:h-[1600px] md:h-[1100px] p-10  rounded-b-2xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4">
          <Link to="/ascend">
            <DetailCard image={delimg1} title="Ascent" />
          </Link>
          <Link to="/bind">
            <DetailCard image={delimg2} title="Bind" />
          </Link>
          <Link to="/breeze">
            <DetailCard image={delimg3} title="Breeze" />
          </Link>
          <Link to="/fracture">
            {" "}
            <DetailCard image={delimg4} title="Fracture" />
          </Link>
          <Link to="/haven">
            {" "}
            <DetailCard image={delimg5} title="Haven" />
          </Link>
          <Link to="/icebox">
            {" "}
            <DetailCard image={delimg6} title="Icebox" />
          </Link>
          <Link to="/lotus">
            {" "}
            <DetailCard image={delimg7} title="Lotus" />
          </Link>
          <Link to="/pearl">
            {" "}
            <DetailCard image={delimg3} title="Pearl" />
          </Link>
          <Link to="/split">
            <DetailCard image={delimg9} title="Split" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
