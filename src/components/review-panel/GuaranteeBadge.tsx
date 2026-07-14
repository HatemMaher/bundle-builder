import badgeImage from "../../assets/images/satisfaction-badge.png";

const GuaranteeBadge = () => {
  return (
    <img
      src={badgeImage}
      alt="100% Wyze Satisfaction Guarantee"
      className="h-[90px] w-[100px] shrink-0 object-contain"
    />
  );
};

export default GuaranteeBadge;