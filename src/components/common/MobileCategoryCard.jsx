import Badge from "../ui/Badge";

const MobileCategoryCard = ({
  title,
  description,
  productCount,
  imageSrc,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center text-center group cursor-pointer ${className}`}
      {...props}
    >
      {/* Circle Image Container */}
      <div className="relative w-32 h-32 rounded-full border border-primary/10 p-1 bg-white shadow-sm mb-8">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Product Count Badge */}
        <Badge size="sm" className="absolute top-15 -right-2 px-2">
          {productCount}
        </Badge>
      </div>

      <div className="relative w-full flex flex-col items-center">

        {/* Text Info */}
        <h3 className="text-lg font-serif text-[#744E54] mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-[11px] text-textMuted leading-snug px-1">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MobileCategoryCard;
