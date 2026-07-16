import { cn } from "@/utils";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-primary text-white border-primary hover:text-white hover:border-accent",
    secondary: "bg-secondary text-text border-secondary hover:text-white hover:border-primary",
  };

  const sizeStyles = {
    sm: "px-5 py-2.5",
    md: "px-7 py-3",
    lg: "px-9 py-4",
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-full font-medium border border-transparent transition-all duration-500 active:scale-95 group cursor-pointer",
        variantStyles[variant] ?? variantStyles.primary,
        className
      )}
      {...props}
    >
      {/* Background slide effect (slides up from bottom) */}
      <span
        className="absolute -bottom-full left-0 w-full h-full rounded-[50%] transition-all duration-300 ease-in-out group-hover:bottom-0 group-hover:rounded-none pointer-events-none z-0 group-hover:bg-accent"
      ></span>

      {/* Button Text */}
      <span className={cn("relative z-10 block", sizeStyles[size] ?? sizeStyles.md)}>
        {children}
      </span>
    </button>
  );
};

export default Button;