import Badge from "../ui/Badge";
import "../pages/home/home.css"

const CategoryCard = ({
  title,
  description,
  productCount,
  imageSrc,
  arrow,
  className = "",
  id = "",
  arrowClassName = "bottom-[25%] left-[12%]",
  ...props
}) => {
  return (
    <div
      id={id}
      data-spread-item
      data-position={id}
      className={`relative w-full max-w-[280px] aspect-4/5 mx-auto flex flex-col justify-end p-4 group cursor-pointer ${className}`}
      {...props}
    >
      {/* Circle Image Container */}
      <div className="absolute top-0 right-2 w-[75%] aspect-square rounded-full border border-primary/20 p-1 bg-white shadow-xs group-hover:border-primary transition-colors duration-500 overflow-hidden flex items-center justify-center">
        <picture className="w-full h-full">
          <source srcSet={imageSrc} type="image/avif" />
          <img
            src={imageSrc}
            alt={title}
            width="200"
            height="200"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </picture>
      </div>

      {/* Product Count Badge (e.g. 12+ / 24+ items) */}
      <Badge className="absolute bottom-[35%] right-0 rounded-full shadow-xs z-10 text-xs tracking-wider">
        {productCount}
      </Badge>

      {/* SVG Curved Arrow pointing from text to image */}
      <div className={`absolute w-[22%] ${arrowClassName} aspect-square text-primary pointer-events-none -rotate-12`}>
        {arrow || (
          <svg
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-full h-full"
          >
            <path d="M10,40 C10,25 20,15 38,12" />
            <polyline points="28,8 40,12 36,24" />
          </svg>
        )}
      </div>

      {/* Text Info */}
      <div className="w-[85%] flex flex-col text-left pl-2 pb-2">
        <h3 className="text-lg font-bold text-text group-hover:text-primary transition-colors duration-300 mb-1">
          {title}
        </h3>
        <p className="text-xs text-textMuted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
