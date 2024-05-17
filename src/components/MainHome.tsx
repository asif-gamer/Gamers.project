import CARD1 from "../assets/HomeCard/location.svg";
import CARD2 from "../assets/HomeCard/contact.svg";
import CARD3 from "../assets/HomeCard/weapon.svg";
import CARD4 from "../assets/HomeCard/stact.svg";
import CARD5 from "../assets/HomeCard/player.svg";
import CARD6 from "../assets/HomeCard/player.svg";
import HCARD1 from "../assets/HomeCard/locationHero.svg";
import HCARD2 from "../assets/HomeCard/contactHero.svg";
import HCARD3 from "../assets/HomeCard/waeponHero.svg";
import HCARD4 from "../assets/HomeCard/stactHero.svg";
import HCARD5 from "../assets/HomeCard/playerHero.svg";
import HCARD6 from "../assets/HomeCard/playerHero.svg";
import Arrow from "../assets/arrow.svg";
import Hero from "../assets/homeHero.svg";
import Card from "./Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[800px] w-full px-4">
        <h3 className="flex items-center gap-2 text-xl text-gray-400 font-normal tracking-tighter mb-5">
          <Link to="/">
            <img src={Arrow} alt="logo" className="w-[25px] h-[15px]" />
          </Link>
          <span>Game Guide /</span>
          <span className="text-white font-normal">Valorant</span>
        </h3>
        <img
          src={Hero}
          alt="logo"
          className="h-[193px] w-full top-[136px] object-cover rounded-lg mb-5"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/home/details">
            <Card
              icon={CARD1}
              title="Maps"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing ..."
              hericon={HCARD1}
            />
          </Link>
          <Link to="#">
            <Card
              icon={CARD2}
              title="Agents"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing ..."
              hericon={HCARD2}
            />
          </Link>
          <Link to="/weapons">
            <Card
              icon={CARD3}
              title="Weapons"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing ..."
              hericon={HCARD3}
            />
          </Link>
          <Link to="/mapstat">
            <Card
              icon={CARD4}
              title="Game statistics"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing ..."
              hericon={HCARD4}
            />
          </Link>
          <Link to="/scoutplayer">
            <Card
              icon={CARD5}
              title="Players"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing ..."
              hericon={HCARD5}
            />
          </Link>
          <Link to="#">
            <Card
              icon={CARD6}
              title="Coaches"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing ..."
              hericon={HCARD6}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
