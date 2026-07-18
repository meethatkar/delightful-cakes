
import { Link } from 'react-router-dom';

const BlogCard = ({ 
  id,
  variant = 'large', 
  image, 
  date, 
  title, 
  description, 
  category,
  readTime,
  authorName,
  authorAvatar,
  className = "", 
  ...props 
}) => {
  if (variant === 'grid') {
    return (
      <Link to={`/blogs/${id}`} className={`flex flex-col bg-white rounded-3xl shadow-sm border border-border/40 p-4 group cursor-pointer transition-shadow hover:shadow-md ${className}`} {...props}>
        {/* Image with Tag */}
        <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden mb-4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {category && (
            <div className="absolute bottom-3 left-3 bg-white px-3 py-1.5 rounded-xl text-xs font-bold text-text shadow-sm z-10">
              {category}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="flex flex-col flex-grow px-2">
          {readTime && (
            <div className="flex items-center text-textMuted text-xs font-medium space-x-1.5 mb-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{readTime}</span>
            </div>
          )}
          
          <h3 className="text-lg font-bold text-text leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-sm text-textMuted line-clamp-2 mb-4">
            {description}
          </p>
          
          {/* Footer */}
          <div className="mt-auto pt-4 flex items-center space-x-3 border-t border-border/20">
            {authorAvatar && (
              <img src={authorAvatar} alt={authorName} className="w-8 h-8 rounded-full object-cover" />
            )}
            <div className="flex flex-col">
              <span className="text-xs font-bold text-text">{authorName}</span>
              <span className="text-[10px] text-textMuted font-medium">{date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'small') {
    return (
      <Link to={`/blogs/${id}`} className={`flex gap-4 group cursor-pointer ${className}`} {...props}>
        <div className="w-32 sm:w-40 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center space-y-1.5 py-1">
          <span className="text-xs text-textMuted font-medium">{date}</span>
          <h3 className="text-base font-semibold text-text transition-colors group-hover:text-primary line-clamp-1">{title}</h3>
          <p className="text-sm text-textMuted line-clamp-2">{description}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/blogs/${id}`} className={`flex flex-col group cursor-pointer ${className}`} {...props}>
      <div className="w-full aspect-[16/9] sm:aspect-[2/1] md:aspect-[16/9] rounded-2xl overflow-hidden mb-5">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col space-y-2 px-1">
        <span className="text-sm text-textMuted font-medium">{date}</span>
        <h3 className="text-xl font-semibold text-text transition-colors group-hover:text-primary">{title}</h3>
        <p className="text-base text-textMuted line-clamp-2">{description}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
