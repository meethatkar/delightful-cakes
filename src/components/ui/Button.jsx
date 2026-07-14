const Button = ({ children, variant = "primary", className = "", onHover, onClick, ...props }) => {
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-text hover:text-white group-hover:text-white",
  }

  const hoverBgStyles = {
    primary: "bg-accent",
    secondary: "bg-primary",
  }

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden px-8 py-3 rounded-full font-medium transition-all duration-300 active:scale-95 group ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Background slide effect */}
      <span className={`absolute inset-0 ${hoverBgStyles[variant]} transition-transform duration-300 ease-out scale-x-0 origin-left group-hover:scale-x-100`}></span>

      {/* Button Text */}
      <span className="relative z-10 transition-colors duration-300">{children}</span>
    </button>
  );
};

export default Button;