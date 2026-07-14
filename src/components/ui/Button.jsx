const Button = ({ children, variant = "primary", padding = "px-8 py-3", className = "", onClick, ...props }) => {
  const variantStyles = {
    primary: "bg-primary text-white border-primary hover:text-white hover:border-accent",
    secondary: "bg-secondary text-text border-secondary hover:text-white hover:border-primary",
  }

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-full font-medium border border-transparent transition-all duration-500 active:scale-95 group  cursor-pointer ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {/* Background slide effect (slides up from bottom) */}
      <span
        className={`absolute -bottom-full left-0 w-full h-full rounded-[50%] transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:rounded-none pointer-events-none z-0 group-hover:bg-accent`}
      ></span>

      {/* Button Text */}
      <span className={`relative z-10 block ${padding}`}>{children}</span>
    </button>
  );
};

export default Button;