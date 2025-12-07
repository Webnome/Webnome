import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Webnome Tech Solution',
  description: 'Comprehensive technology solutions including Digital Marketing, Web & Mobile Development, UI/UX Design, AI & Data Science services.',
  keywords: 'web development, mobile apps, UI/UX design, digital marketing, AI, data science, cloud solutions',
  openGraph: {
    title: 'Our Services - Webnome Tech Solution',
    description: 'Comprehensive technology solutions for your business',
    type: 'website',
  },
};

const services = [
  {
    category: "Digital Marketing",
    services: [
      {
        title: "Search Engine Optimization",
        description: "Improve your search rankings and drive organic traffic with data-driven SEO strategies.",
        icon: "🔍",
        color: "from-[#00AEEF] to-cyan-400"
      },
      {
        title: "Social Media Marketing",
        description: "Engage with your audience across all platforms with tailored social media campaigns.",
        icon: "📱",
        color: "from-[#00AEEF] to-blue-400"
      },
      {
        title: "Content Marketing",
        description: "Create compelling content that attracts, engages, and converts your target audience.",
        icon: "✍️",
        color: "from-orange-500 to-[#F7931E]"
      },
      {
        title: "Pay-Per-Click Advertising",
        description: "Maximize ROI with strategic PPC campaigns across Google, Bing, and social platforms.",
        icon: "🎯",
        color: "from-[#F7931E] to-red-500"
      }
    ]
  },
  {
    category: "UI/UX Design",
    services: [
      {
        title: "User Research & Testing",
        description: "Understand your users with comprehensive research and usability testing.",
        icon: "🔬",
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Interface Design",
        description: "Beautiful, intuitive interfaces that provide exceptional user experiences.",
        icon: "🎨",
        color: "from-[#00AEEF] to-[#F7931E]"
      },
      {
        title: "Design Systems",
        description: "Create scalable design systems that ensure consistency across all platforms.",
        icon: "📐",
        color: "from-blue-500 to-purple-500"
      },
      {
        title: "Prototype & Wireframes",
        description: "Visualize and test ideas before development with high-fidelity prototypes.",
        icon: "📝",
        color: "from-green-500 to-teal-500"
      }
    ]
  },
  {
    category: "Web & Mobile Development",
    services: [
      {
        title: "Custom Web Applications",
        description: "Scalable, secure web applications built with modern frameworks and best practices.",
        icon: "💻",
        color: "from-[#00AEEF] to-cyan-400"
      },
      {
        title: "E-Commerce Solutions",
        description: "Feature-rich online stores that drive sales and provide seamless shopping experiences.",
        icon: "🛒",
        color: "from-[#00AEEF] to-blue-400"
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android devices.",
        icon: "📱",
        color: "from-[#F7931E] to-orange-500"
      },
      {
        title: "Progressive Web Apps",
        description: "Fast, reliable web apps that work offline and feel native.",
        icon: "⚡",
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "API Development & Integration",
        description: "Secure APIs and seamless integrations with third-party services.",
        icon: "🔌",
        color: "from-green-500 to-teal-500"
      }
    ]
  },
  {
    category: "AI & Data Science",
    services: [
      {
        title: "AI Agents",
        description: "Intelligent chatbots and virtual assistants that enhance customer experience.",
        icon: "🤖",
        color: "from-[#00AEEF] to-[#F7931E]"
      },
      {
        title: "RAG Systems",
        description: "Retrieval-Augmented Generation systems for intelligent document processing.",
        icon: "🔍",
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Predictive Analytics",
        description: "Forecast trends and behaviors with advanced machine learning models.",
        icon: "📊",
        color: "from-blue-500 to-cyan-500"
      },
      {
        title: "Personalization Engines",
        description: "AI-driven recommendations that deliver personalized experiences at scale.",
        icon: "🎯",
        color: "from-orange-500 to-[#F7931E]"
      },
      {
        title: "Natural Language Processing",
        description: "Extract insights from text data with NLP and sentiment analysis.",
        icon: "💬",
        color: "from-green-500 to-teal-500"
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis solutions for automation and insights.",
        icon: "👁️",
        color: "from-[#00AEEF] to-blue-400"
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Our</span>{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-gray-900">{category.category}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, index) => (
                <div
                  key={index}
                  className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:scale-105"
                >
                  {/* Icon */}
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#00AEEF] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Effect Border */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-t-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#00AEEF] to-[#F7931E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s discuss how we can help transform your business
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#00AEEF] rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

