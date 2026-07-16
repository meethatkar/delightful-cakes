const ProductCard = ({
  image,
  title,
  price,
  alt,
  className = "",
  imageClassName = "",
  ...props
}) => {
  return (
    <div className={`flex flex-col items-center group cursor-pointer bg-white p-6 rounded-[2rem] border border-border/30 hover:shadow-lg transition-all duration-300 ${className}`} {...props}>
      {/* Image Container with subtle background */}
      <div className="w-full aspect-square bg-stone-50 flex items-center justify-center p-4 mb-6 transition-colors duration-300 group-hover:bg-stone-100">
        <img
          src={image}
          alt={alt || title}
          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-sm ${imageClassName}`}
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="flex flex-col items-center text-center space-y-2">
        <h3 className="text-base font-semibold text-stone-800 tracking-wide">{title}</h3>

        {/* Optional Price Text */}
        {price && (
          <p className="text-sm font-bold text-stone-700">{price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
