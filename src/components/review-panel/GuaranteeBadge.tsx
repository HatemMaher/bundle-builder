import badgeImage from "../../assets/images/satisfaction-badge.png";

/**
 * GuaranteeBadge Component
 * * A simple, purely presentational component that renders the satisfaction guarantee asset.
 * Hardcoded dimensions ensure it aligns perfectly within the PricingSummary layout.
 */
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