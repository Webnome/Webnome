import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Webnome Tech Solution',
  description: 'Insights, trends, and expert opinions on technology, marketing, and business growth.',
  keywords: 'tech blog, AI insights, digital marketing, web development blog',
  openGraph: {
    title: 'Blog - Webnome Tech Solution',
    description: 'Latest insights on technology and business',
    type: 'website',
  },
};

const blogPosts = [
  {
    title: "The Future of AI in Marketing: Trends for 2025",
    excerpt: "Discover how artificial intelligence is reshaping digital marketing strategies and what to expect in the coming year.",
    category: "AI & Marketing",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "🤖"
  },
  {
    title: "Building Scalable Web Applications: A Complete Guide",
    excerpt: "Learn best practices for creating web applications that can grow with your business from day one.",
    category: "Development",
    date: "March 10, 2024",
    readTime: "8 min read",
    image: "💻"
  },
  {
    title: "Enhancing User Experience with Modern UI/UX Principles",
    excerpt: "Explore the latest design trends and user experience strategies that drive engagement and conversions.",
    category: "Design",
    date: "March 5, 2024",
    readTime: "6 min read",
    image: "🎨"
  },
  {
    title: "Data Science in Action: Real-World Applications",
    excerpt: "See how predictive analytics and machine learning are solving real business problems across industries.",
    category: "Data Science",
    date: "February 28, 2024",
    readTime: "7 min read",
    image: "📊"
  },
  {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understanding the importance of mobile optimization in 2025 and how to implement effective mobile strategies.",
    category: "Mobile",
    date: "February 22, 2024",
    readTime: "5 min read",
    image: "📱"
  },
  {
    title: "Cybersecurity Best Practices for Modern Businesses",
    excerpt: "Essential security measures every business should implement to protect digital assets and customer data.",
    category: "Security",
    date: "February 15, 2024",
    readTime: "6 min read",
    image: "🔒"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, trends, and expert opinions on technology, marketing, and business growth
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Image */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-12 text-8xl flex items-center justify-center">
                  {post.image}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#00AEEF] transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>Read More →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-gradient-to-r from-[#00AEEF] to-[#F7931E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to our newsletter for the latest insights and updates
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border-0 focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-[#00AEEF] rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}

