type CardProps = {
  image: string;
  title: string;
};
const DetailCard = ({ image, title }: CardProps) => {
  return (
    <div className=" h-[340px] relative ">
      <img
        src={image}
        alt="logo"
        className="h-[340px] object-cover rounded-3xl border-white border-l-2 border-t-2"
       
      />
      <p className="absolute bottom-0 p-4 ml-5 text-white text-2xl font-semibold">
        {title}
      </p>
    </div>
  );
};

export default DetailCard;



