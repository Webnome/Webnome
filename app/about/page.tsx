import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Webnome Tech Solution',
  description: 'Learn about Webnome, our mission, values, and dedicated team of technology experts.',
  keywords: 'about webnome, tech company, our team, company values',
  openGraph: {
    title: 'About Us - Webnome Tech Solution',
    description: 'Learn about our mission and team',
    type: 'website',
  },
};

const values = [
  {
    title: "Innovation First",
    description: "We stay ahead with cutting-edge technologies and creative solutions.",
    icon: "💡"
  },
  {
    title: "Client-Centric",
    description: "Your success is our success. We prioritize your business goals.",
    icon: "🎯"
  },
  {
    title: "Quality Excellence",
    description: "We deliver pixel-perfect, high-performance solutions every time.",
    icon: "⭐"
  },
  {
    title: "Transparency",
    description: "Clear communication and honest partnerships built on trust.",
    icon: "🤝"
  }
];

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    description: "15+ years in tech leadership",
    image: "👨‍💼"
  },
  {
    name: "Sarah Chen",
    role: "Head of Development",
    description: "Full-stack architect & team lead",
    image: "👩‍💻"
  },
  {
    name: "Michael Torres",
    role: "Creative Director",
    description: "Award-winning UX designer",
    image: "🎨"
  },
  {
    name: "Emily Davis",
    role: "Head of Data Science",
    description: "AI & ML specialist",
    image: "🤖"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">About</span>{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
              Webnome
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming businesses through innovation, creativity, and technology excellence
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth,
                innovation, and sustainable success in the digital age.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine expertise in artificial intelligence, data science, web development,
                and digital marketing to deliver comprehensive solutions that transform how businesses
                operate and compete.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-white to-gray-50 p-12 rounded-3xl border border-gray-100">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Innovation Driven</h3>
                <p className="text-gray-600">
                  We leverage the latest technologies to solve complex business challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Team</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="text-8xl mb-4">{member.image}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-[#00AEEF] font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#00AEEF] to-[#F7931E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/90">Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">200+</div>
              <div className="text-white/90">Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Team Members</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-white/90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

