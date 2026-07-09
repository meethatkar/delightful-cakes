
import { useParams, Link } from 'react-router-dom';
import { blogsData } from '../../data/blogs';
import BlogCard from '../../components/ui/BlogCard';

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === id);
  
  // Get other blogs for the sidebar
  const otherBlogs = blogsData.filter(b => b.id !== id).slice(0, 3);

  if (!blog) {
    return (
      <div className="w-full min-h-[70vh] flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-3xl font-bold text-stone-900 mb-4">Blog not found</h1>
        <Link to="/blogs" className="px-6 py-2.5 rounded-full bg-teal-500 hover:bg-teal-600 text-white font-medium transition-colors">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/blogs" className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-8 transition-colors">
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
              <span className="text-sm text-stone-500 font-medium">{blog.date}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-stone-800">{blog.title}</h1>
            </div>

            {/* Blog Content */}
            <div className="prose prose-stone prose-lg max-w-none">
              <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                {blog.description}
              </p>
              
              <div className="text-stone-700 leading-loose whitespace-pre-line">
                {blog.content}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="col-span-1 lg:col-span-4">
            <h3 className="text-2xl font-bold text-stone-900 mb-8 border-b border-stone-100 pb-4">Recent Posts</h3>
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
        
      </div>
    </div>
  );
};

export default BlogDetailPage;
