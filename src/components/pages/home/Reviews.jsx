import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import SectionHeader from '@/components/ui/SectionHeader';
import { CustomerReviews } from '@/data/reviews'
import ReviewCards from './ReviewCards';

const Reviews = () => {
  const data = CustomerReviews;
  return (
    <Container>
      <Section>
        <SectionHeader description="Discover why dessert lovers choose our cakes for their most special moments." title="Baked with Love, Reviewed with Joy" />
        <div className="reviews-wrapper w-full flex items-stretch gap-5 overflow-x-auto pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
          {data.map((review, index) => (
            <ReviewCards key={index} {...review} />
          ))}
        </div>
      </Section>
    </Container>
  )
}

export default Reviews