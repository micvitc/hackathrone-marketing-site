type PillarCardProps = {
  image: string;
};

const PillarCard = ({ image }: PillarCardProps) => (
  <div
    className="relative text-white text-center pt-12 h-[180px] sm:h-[250px] md:h-[300px] transition-transform duration-300 hover:scale-[1.03] cursor-pointer -mx-2"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />
);

export default PillarCard;