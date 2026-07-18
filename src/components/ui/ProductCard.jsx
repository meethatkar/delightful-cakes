import { RiStarFill } from "@remixicon/react";
import Badge from "./Badge";

const ProductCard = ({
  image,
  title,
  price,
  rating,
  badges = [],
  category,
  alt,
  className = "",
  imageClassName = "",
  imageContianerClass = "",
  ...props
}) => {
  return (
    <div
      className={`flex flex-col bg-white p-5 rounded-[2.5rem] border border-border/30 hover:border-secondary/20 shadow-xs hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] transition-all duration-500 group cursor-pointer ${className}`}
      {...props}
    >
      {/* Image Container with subtle background */}
      <div className={`relative w-full aspect-square bg-background flex items-center justify-center mb-5 transition-colors duration-500 group-hover:bg-surfaceAlt rounded-[2rem] overflow-hidden ${imageContianerClass}`}>
        {/* Badges Overlay */}
        {badges && badges.length > 0 && (
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 items-start">
            {badges.map((badge, idx) => (
              <Badge key={idx} variant={badge.variant || "primary"} size="sm">
                {badge.label}
              </Badge>
            ))}
          </div>
        )}

        <img
          src={image}
          alt={alt || title}
          className={`w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.08] drop-shadow-md ${imageClassName}`}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col px-1 pb-1">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          {category && (
            <span className="text-[11px] font-semibold text-textMuted uppercase tracking-wider">
              {category}
            </span>
          )}
          {rating && (
            <div className="flex items-center gap-1 bg-amber-50/80 px-2 py-0.5 rounded-full border border-amber-100">
              <RiStarFill className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="text-[11px] font-bold text-amber-700">{rating.toFixed(1)}</span>
            </div>
          )}
        </div>

        <h3 className="text-base font-semibold text-text group-hover:text-primary transition-colors duration-300 leading-tight mb-2">
          {title}
        </h3>

        {/* Price & Action */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <p className="text-sm font-bold text-text">
            {price || "Custom Quote"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
