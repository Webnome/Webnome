'use client';

import { useState } from 'react';
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import customConsole from '@/lib/customConsole';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    customConsole.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[var(--background)] relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-primary-blue/20 dark:bg-primary-blue/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-primary-orange/20 dark:bg-primary-orange/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-[var(--foreground)]">Get in</span>{" "}
            <span className="gradient-text">
              Touch
            </span>
          </h1>
          <p className="text-xl text-[var(--foreground-secondary)] max-w-3xl mx-auto">
            Ready to transform your business? Let&apos;s discuss your project
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-[var(--foreground)]">Let&apos;s Connect</h2>
              <p className="text-[var(--foreground-secondary)] mb-8 leading-relaxed">
                Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll
                respond as soon as possible.
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-orange flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Email</h3>
                    <a href="mailto:contact@webnome.com" className="text-primary-blue hover:underline">
                      contact@webnome.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-orange flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-primary-blue hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-orange flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Office</h3>
                    <p className="text-[var(--foreground-secondary)]">Global Team - Available Worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-orange flex items-center justify-center text-white flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)] mb-1">Hours</h3>
                    <p className="text-[var(--foreground-secondary)]">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-[var(--card-bg)] p-8 rounded-3xl border border-[var(--card-border)]">
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="company" className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                    placeholder="Your company"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="ai-ml">AI & Machine Learning</option>
                    <option value="data-science">Data Science</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--foreground)] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-orange text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-blue to-primary-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free consultation to discuss your needs
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-white text-primary-blue rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
