'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description: 'Tailored solutions designed specifically for your business needs. From concept to deployment, we build scalable and robust applications.',
    color: 'from-[#00AEEF] to-cyan-400'
  },
  {
    icon: '🌐',
    title: 'Web Application Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies. We create engaging user experiences that drive results.',
    color: 'from-blue-500 to-[#00AEEF]'
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We deliver apps that users love and businesses rely on.',
    color: 'from-[#F7931E] to-orange-500'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing with our scalable infrastructure solutions. Modernize your business with cloud migration and optimization.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: '🤖',
    title: 'AI & Machine Learning',
    description: 'Intelligent automation and AI-powered solutions to transform your business processes and unlock new possibilities.',
    color: 'from-[#00AEEF] to-[#F7931E]'
  },
  {
    icon: '🔒',
    title: 'Cybersecurity Solutions',
    description: 'Protect your digital assets with comprehensive security solutions. We implement robust security measures to keep your data safe.',
    color: 'from-red-500 to-[#F7931E]'
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent font-bold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Solutions for Every
            <span className="bg-gradient-to-r from-[#00AEEF] to-[#F7931E] bg-clip-text text-transparent"> Need</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive software solutions to help your business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`} />
              
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


