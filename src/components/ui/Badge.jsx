import { Sparkles, Heart, Tag } from "lucide-react";

const iconMap = {
  sparkles: Sparkles,
  heart: Heart,
  sale: Tag,
};

const Badge = ({
  variant = "primary",
  size = "md",
  icon,
  className = "",
  children,
  ...props
}) => {
  const variantStyles = {
    primary: "bg-primary/12 text-primary border-primary/25",
  };

  const sizeStyles = {
    sm: "text-[10px] px-2 py-0.5 gap-1",
    md: "text-xs px-2.5 py-0.5 gap-1.5",
    lg: "text-sm px-3.5 py-1 gap-2",
  };

  // Determine if the icon is a pre-defined string key or a component/element
  const IconComponent = typeof icon === "string" ? iconMap[icon.toLowerCase()] : icon;

  const currentSize = sizeStyles[size] || sizeStyles.md;

  return (
    <span
      className={`inline-flex items-center rounded-full font-semibold border ${variantStyles[variant] || variantStyles.primary} ${currentSize} ${className}`}
      {...props}
    >
      {IconComponent && <IconComponent className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;