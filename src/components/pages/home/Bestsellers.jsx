import Container from '@/components/ui/Container'
import ProductCard from '@/components/ui/ProductCard'
import Section from '@/components/ui/Section'
import SectionHeader from '@/components/ui/SectionHeader'
import { getBestSellers } from '@/utils/productSelector'

const Bestsellers = () => {
  const bestsellers = getBestSellers();

  return (
    <Section>
      <Container>
        <SectionHeader title="Bestsellers" description="The One that you can't miss to taste" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-10">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              alt={product.slug}
              price={product.price}
              rating={product.rating}
              category={product.category}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Bestsellers