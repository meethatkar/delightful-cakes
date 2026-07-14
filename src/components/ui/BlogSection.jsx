import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';
import { blogsData } from '../../data/blogs';

const BlogSection = ({ title = "Recipe Blogs", className = "", ...props }) => {
  // Using real data from our data file
  const largeBlog = blogsData[0];
  const smallBlogs = blogsData.slice(1, 4); // Take up to 3 for the right side

  return (
    <section className={`w-full max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-stone-50/50 rounded-[2rem] ${className}`} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold text-stone-800 tracking-tight">{title}</h2>
        <Link to="/blogs" className="px-6 py-2.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white text-sm font-medium transition-colors">
          View more
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Side - Large Blog */}
        {largeBlog && (
          <div className="col-span-1 lg:col-span-7">
            <BlogCard 
              id={largeBlog.id}
              variant="large"
              image={largeBlog.image}
              date={largeBlog.date}
              title={largeBlog.title}
              description={largeBlog.description}
            />
          </div>
        )}

        {/* Right Side - Small Blogs List */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 lg:gap-8 justify-between">
          {smallBlogs.map((blog) => (
            <BlogCard 
              key={blog.id}
              id={blog.id}
              variant="small"
              image={blog.image}
              date={blog.date}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
