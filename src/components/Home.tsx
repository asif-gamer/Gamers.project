import { FaSearch } from "react-icons/fa";
import CARD1 from "../assets/cards/card1.svg";
import CARD2 from "../assets/cards/card2.svg";
import CARD3 from "../assets/cards/card3.svg";
import CARD4 from "../assets/cards/card4.svg";
import CARD5 from "../assets/cards/card5.svg";
import CARD6 from "../assets/cards/card6.svg";
import CARD7 from "../assets/cards/card7.svg";
import CARD8 from "../assets/cards/card8.svg";
import LOGO from "../assets/sublogo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[800px] w-full px-4">
        <img src={LOGO} alt="logo" className="h-12  mb-6" />
        <h3 className="text-xl  text-gray-400 font-normal tracking-tighter mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatu asdfhl asdjalsdf jkjiehj
        </h3>

        <form className="bg-[#2b2e30] flex items-center gap-3 h-[36px] rounded-full mx-auto mb-10">
          <FaSearch className="text-gray-600 cursor-pointer w-[16px] h-[16px] ml-3 focus:hidden" />
          <input
            type="text"
            placeholder="Search profiles, Agents , Maps & more"
            className="bg-transparent text-white text-base focus:outline-none w-full mr-4"
          />
        </form>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/#">
            <img
              src={CARD1}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Heros of the storm
            </h3>
          </Link>
          <Link to="/#">
            <img
              src={CARD2}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Legends of Runeterra
            </h3>
          </Link>
          <Link to="/home">
            <img
              src={CARD3}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Valorant
            </h3>
          </Link>
          <Link to="/#">
            {" "}
            <img
              src={CARD4}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Battlegrounds
            </h3>
          </Link>
          <Link to="/#">
            {" "}
            <img
              src={CARD5}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Knives Out
            </h3>
          </Link>

          <Link to="/#">
            {" "}
            <img
              src={CARD6}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Knives Out
            </h3>
          </Link>

          <Link to="/#">
            <img
              src={CARD7}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Knives Out
            </h3>
          </Link>
          <Link to="/#">
            <img
              src={CARD8}
              alt="logo"
              className="h-60 w-full object-cover rounded-lg"
            />
            <h3 className="text-xl px-2 text-white font-semibold tracking-tighter">
              Knives Out
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

// import { FaSearch } from "react-icons/fa";
// import CARD1 from "../assets/cards/card1.svg";
// import CARD2 from "../assets/cards/card2.svg";
// import CARD3 from "../assets/cards/card3.svg";
// import CARD4 from "../assets/cards/card4.svg";
// import CARD5 from "../assets/cards/card5.svg";
// import CARD6 from "../assets/cards/card6.svg";
// import CARD7 from "../assets/cards/card7.svg";
// import CARD8 from "../assets/cards/card8.svg";
// import LOGO from "../assets/sublogo.svg";
// const Home = () => {
//   return (
//     <div >
//        <img src={LOGO} alt="logo" className="h-12 px-72 mb-6"  />
//        <h3 className="text-2xl px-72 text-gray-400  font-normal tracking-tighter mb-5">
//        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu asdfhl asdjalsdf jkjiehj
//           </h3>

//           <form className="bg-[#2b2e30] p-3 rounded-full w-[780px] ml-72 justify-center flex items-center px-72 mb-10">
//             <FaSearch
//               className="text-gray-600 cursor-pointer focus:hidden"
//               size={26}
//             />
//             <input
//               type="text"
//               placeholder="Search profiles..."
//               className="bg-transparent text-white text-2xl   focus:outline-none w-40 sm:w-[750px] mr-96"
//             />
//           </form>
//       <div className="container px-72 grid grid-cols-4 gap-4">
//         <div>
//           <img
//             src={CARD1}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>
//         <div>
//           {" "}
//           <img
//             src={CARD2}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>
//         <div>
//           <img
//             src={CARD3}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>
//         <div>
//           {" "}
//           <img
//             src={CARD4}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>
//         <div>
//           {" "}
//           <img
//             src={CARD5}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>

//         <div>
//           {" "}
//           <img
//             src={CARD6}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>

//         <div>
//           <img
//             src={CARD7}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>
//         <div>
//           <img
//             src={CARD8}
//             alt="logo"
//             className="h-60 w-full object-cover rounded-lg"
//           />
//           <h3 className="text-2xl px-2 text-white font-semibold tracking-tighter">
//             Heros of the storm
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
