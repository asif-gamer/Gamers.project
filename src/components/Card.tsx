type CardProps = {
  icon: string;
  hericon: string;
  title: string;
  desc: string;
};
const Card = ({icon,title,desc,hericon}:CardProps) => {
  return <div className="bg-[#1A1C1F] h-[280px] flex flex-col justify-between p-5 rounded-3xl">
     <div className="flex items-center gap-2 ">
      <img
        src={icon}
        alt="logo"
        className=" w-[24px] h-[24px] object-cover rounded-lg"
      />
      <span className="text-white" >
        {title}
      </span>
     </div>
     <p className="text-[#7D8185]
">{desc}</p>
      <img src={hericon } alt="logo" className="h-[140px] items-center w-full object-contain rounded-lg" />
  </div>;
};

export default Card;
