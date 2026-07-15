import { blogsData } from '../../data/blogs';
import BlogCard from '../../components/pages/blogs/BlogCard';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const BlogPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#FAFAFA] pb-24">
      {/* Page Header */}
      <Section className="bg-white shadow-sm mb-12">
        <Container className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our Recipe Blogs</h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover our latest recipes, cooking tips, and culinary adventures to inspire your next meal.
          </p>
        </Container>
      </Section>

      {/* Blogs Grid */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <BlogCard
                key={blog.id}
                id={blog.id}
                variant="grid"
                image={blog.image}
                date={blog.date}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                readTime={blog.readTime}
                authorName={blog.authorName}
                authorAvatar={blog.authorAvatar}
              />
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default BlogPage;