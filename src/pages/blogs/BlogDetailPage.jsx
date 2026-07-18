import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../../data/blogs';
import BlogCard from '../../components/pages/blogs/BlogCard';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === id);

  // Get other blogs for the sidebar
  const otherBlogs = blogsData.filter(b => b.id !== id).slice(0, 3);

  if (!blog) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-background px-4">
        <h1 className="text-3xl font-bold text-text mb-4">Blog not found</h1>
        <Link to="/blogs" className="px-6 py-2.5 rounded-full bg-primary hover:bg-accent text-white font-medium transition-colors">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <Section>
      <Container>

        <Link to="/blogs" className="inline-flex items-center text-primary hover:text-accent font-medium mb-8 transition-colors">
          ← Back to all blogs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content - Left Side */}
          <div className="col-span-1 lg:col-span-8">
            {/* Hero Image */}
            <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blog Header Info */}
            <div className="flex flex-col space-y-4 mb-8">
              <span className="text-sm text-textMuted font-medium">{blog.date}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text">{blog.title}</h1>
            </div>

            {/* Blog Content */}
            <div className="prose prose-stone prose-lg max-w-none">
              <p className="text-xl text-textMuted mb-8 leading-relaxed">
                {blog.description}
              </p>

              <div className="text-text leading-loose whitespace-pre-line">
                {blog.content}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="col-span-1 lg:col-span-4">
            <h3 className="text-2xl font-bold text-text mb-8 border-b border-border pb-4">Recent Posts</h3>
            <div className="flex flex-col gap-6">
              {otherBlogs.map((otherBlog) => (
                <BlogCard
                  key={otherBlog.id}
                  id={otherBlog.id}
                  variant="small"
                  image={otherBlog.image}
                  date={otherBlog.date}
                  title={otherBlog.title}
                  description={otherBlog.description}
                />
              ))}
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
};

export default BlogDetailPage;
