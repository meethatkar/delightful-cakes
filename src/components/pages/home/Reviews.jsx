import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { CustomerReviews } from '@/data/reviews'
import ReviewCards from './ReviewCards';
import ArrowLine from '@/components/ui/ArrowLine';
import { useMarquee } from '@/animations';

const Reviews = () => {
  const data = CustomerReviews;
  const { containerRef: marqueeRef, activeDirection } = useMarquee({
    speed: 10,
    direction: -1,
  });

  return (
    <Container>
      <Section>
        <SectionHeader description="Discover why dessert lovers choose our cakes for their most special moments." title="Baked with Love, Reviewed with Joy" />
        <ArrowLine direction={activeDirection} />
        <div ref={marqueeRef} className="relative w-full mt-[1%] overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ background: 'linear-gradient(to right, var(--color-background) 0%, transparent 10%, transparent 90%, var(--color-background) 100%)' }}
          />
          <div className="reviews-wrapper flex items-stretch gap-5 flex-nowrap w-max pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none relative z-0" data-marquee-track>
            {[...data, ...data, ...data].map((review, index) => (
              <ReviewCards key={index} {...review} />
            ))}
          </div>
        </div>
        <ArrowLine direction={activeDirection} />
      </Section>
    </Container>
  )
}

export default Reviews