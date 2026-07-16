import { cn } from "@/utils";

const SectionHeader = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col mb-10 md:mb-12",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
      {...props}
    >
      {subtitle && (
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">
          {subtitle}
        </span>
      )}
      
      {title && (
        <h2 className="text-3xl md:text-4xl font-semibold text-text tracking-tight">
          {title}
        </h2>
      )}

      {description && (
        <p className="mt-4 text-textMuted text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
