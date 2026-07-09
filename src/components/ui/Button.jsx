const Button = ({ text, className = "", onHover, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 rounded-full bg-stone-900 text-white font-medium transition-transform duration-300 active:scale-95 group ${className}`}
      {...props}
    >
      {/* Background slide effect */}
      <span className="absolute inset-0 bg-stone-700 transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100"></span>
      
      {/* Button Text */}
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default Button;