'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from 'framer-motion';

const caseStudies = [
  {
    title: "E-Commerce Platform Transformation",
    company: "RetailTech Solutions",
    category: "Web Development",
    problem: "A growing retail business struggled with outdated e-commerce platform causing slow load times, poor mobile experience, and limited scalability.",
    solution: "We built a modern, scalable e-commerce platform using Next.js, Headless CMS, and cloud infrastructure. Implemented Progressive Web App features for offline access.",
    results: [
      { metric: "Load Time", before: "8.5s", after: "1.2s", improvement: "86%" },
      { metric: "Conversion Rate", before: "2.1%", after: "5.8%", improvement: "176%" },
      { metric: "Mobile Revenue", before: "35%", after: "68%", improvement: "94%" },
      { metric: "Page Views", before: "120K", after: "450K", improvement: "275%" }
    ],
    tags: ["Next.js", "E-Commerce", "PWA"]
  },
  {
    title: "AI-Powered Customer Service",
    company: "FinanceCorp",
    category: "AI & Automation",
    problem: "High customer service costs and long response times impacting customer satisfaction and retention.",
    solution: "Developed intelligent chatbot using RAG technology with GPT-4 integration for instant, accurate responses. Seamlessly escalates complex issues to human agents.",
    results: [
      { metric: "Response Time", before: "24 hours", after: "30 seconds", improvement: "99.97%" },
      { metric: "Cost per Ticket", before: "$15", after: "$3", improvement: "80%" },
      { metric: "Customer Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "50%" },
      { metric: "Automation Rate", before: "0%", after: "78%", improvement: "N/A" }
    ],
    tags: ["AI", "RAG", "NLP", "Chatbot"]
  },
  {
    title: "Predictive Analytics Dashboard",
    company: "HealthCare Data Inc.",
    category: "Data Science",
    problem: "Medical facility needed better patient flow predictions and resource allocation to reduce wait times and improve efficiency.",
    solution: "Built ML-powered predictive analytics system using time series forecasting and machine learning to predict patient volumes and optimize staffing.",
    results: [
      { metric: "Wait Time", before: "45 min", after: "18 min", improvement: "60%" },
      { metric: "Staff Efficiency", before: "65%", after: "89%", improvement: "37%" },
      { metric: "Patient Satisfaction", before: "68%", after: "92%", improvement: "35%" },
      { metric: "Cost Savings", before: "$0", after: "$2.4M/year", improvement: "N/A" }
    ],
    tags: ["ML", "Predictive Analytics", "Time Series"]
  },
  {
    title: "Mobile Banking App Redesign",
    company: "Digital Bank",
    category: "Mobile & UI/UX",
    problem: "Low app engagement and high drop-off rates due to outdated UI and complex navigation.",
    solution: "Complete redesign with modern UI/UX principles, simplified navigation, biometric authentication, and accessibility compliance.",
    results: [
      { metric: "Daily Active Users", before: "15K", after: "58K", improvement: "287%" },
      { metric: "Task Completion", before: "62%", after: "94%", improvement: "52%" },
      { metric: "User Retention", before: "28%", after: "67%", improvement: "139%" },
      { metric: "App Rating", before: "3.1⭐", after: "4.7⭐", improvement: "52%" }
    ],
    tags: ["Mobile App", "UI/UX", "Banking"]
  }
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Case</span>{" "}
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent">
              Studies
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real projects. See how we&apos;ve helped businesses achieve their goals
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] p-8 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-semibold">
                    {study.category}
                  </span>
                  <span className="text-white/80">{study.company}</span>
                </div>
                <h2 className="text-3xl font-bold">{study.title}</h2>
              </div>

              <div className="p-8">
                {/* Problem */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-red-500">Problem</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{study.problem}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <span className="text-blue-500">Solution</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="text-green-500">Results</span>
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100"
                      >
                        <div className="font-semibold text-gray-900 mb-2">{result.metric}</div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-gray-600 line-through text-sm">{result.before}</span>
                          <span className="text-[#00AEEF] font-bold">{result.after}</span>
                        </div>
                        <div className="text-sm font-semibold text-green-600">
                          {result.improvement} improvement
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#00AEEF] to-[#F7931E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s create amazing results together
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#00AEEF] rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

