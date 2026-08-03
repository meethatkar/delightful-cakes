import { GoogleIcon } from '@/assets/icons/GoogleIcon';
import { RiStarFill, RiInstagramFill, RiFacebookCircleFill, RiStore2Fill } from '@remixicon/react';

const ReviewCards = ({ imgSrc, name, role, reviewedOn, stars, comment }) => {
  const getIcon = (source) => {
    switch (source) {
      case 'google': return <GoogleIcon />;
      case 'instagram': return <RiInstagramFill className="text-pink-500 w-5 h-5" />;
      case 'facebook': return <RiFacebookCircleFill className="text-blue-600 w-5 h-5" />;
      case 'in-shop': return <RiStore2Fill className="text-textMuted w-5 h-5" />;
      default: return null;
    }
  }

  return (
    <div className="bg-surface shrink-0 rounded-xl border border-border w-[260px] md:w-[320px] flex flex-col gap-3 md:gap-4 p-4 md:p-5 shadow-sm snap-start">
      <div className="header w-full flex items-center justify-between">
        <div className="h-left flex items-center gap-3">
          <img className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover" src={imgSrc} alt={name || "Reviewer"} />
          <div className="flex flex-col">
            <h3 className="font-semibold text-text text-sm md:text-base leading-tight">{name || "Customer"}</h3>
            <span className="text-[10px] md:text-xs text-textMuted font-semibold tracking-wider uppercase mt-0.5">{role || "CUSTOMER"}</span>
          </div>
        </div>
        <div className="h-right self-start pt-1">
          {getIcon(reviewedOn)}
        </div>
      </div>
      <div className="stars flex gap-1">
        {[...Array(5)].map((_, i) => (
          <RiStarFill key={i} className={`w-4 h-4 md:w-5 md:h-5 ${i < (stars || 5) ? 'text-accent' : 'text-border'}`} />
        ))}
      </div>
      <p className="text-textMuted text-xs md:text-sm leading-relaxed">
        {comment}
      </p>
    </div>
  )
}

export default ReviewCards;