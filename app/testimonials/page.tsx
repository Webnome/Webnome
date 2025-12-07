'use client';

import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Thompson",
        role: "CTO",
        company: "TechFlow Inc.",
        image: "👩‍💼",
        content: "Webnome transformed our digital infrastructure completely. Their team's expertise in cloud solutions and modern web development helped us scale our operations by 300% in just six months.",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Founder",
        company: "StartUp Vision",
        image: "👨‍💻",
        content: "The AI integration they built for our customer service platform is game-changing. We've seen a 50% reduction in support tickets and customer satisfaction is at an all-time high.",
        rating: 5
    },
    {
        name: "Emily Rodriguez",
        role: "Marketing Director",
        company: "Global Brands",
        image: "👩‍🎨",
        content: "Their digital marketing strategies are data-driven and highly effective. We've seen a significant ROI on our campaigns and their reporting is transparent and insightful.",
        rating: 5
    },
    {
        name: "Michael Chang",
        role: "Product Manager",
        company: "FinTech Solutions",
        image: "👨‍💼",
        content: "Outstanding UI/UX design work. They took our complex financial application and made it intuitive and user-friendly. Our user engagement metrics have improved dramatically.",
        rating: 5
    },
    {
        name: "Lisa Patels",
        role: "Operations Head",
        company: "Logistics Pro",
        image: "👩‍✈️",
        content: "The custom software solution Webnome developed for our logistics tracking has streamlined our entire supply chain. Real-time visibility has never been better.",
        rating: 5
    },
    {
        name: "James Wilson",
        role: "CEO",
        company: "Retail Giants",
        image: "👨‍⚖️",
        content: "A true partner in digital transformation. From the initial consultation to the final deployment, the Webnome team was professional, responsive, and technically brilliant.",
        rating: 5
    }
];

export default function TestimonialsPage() {
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
                        <span className="text-[var(--foreground)]">Client</span>{" "}
                        <span className="gradient-text">
                            Testimonials
                        </span>
                    </h1>
                    <p className="text-xl text-[var(--foreground-secondary)] max-w-3xl mx-auto">
                        Don&apos;t just take our word for it. Here&apos;s what our partners have to say about working with Webnome.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 bg-[var(--background)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[var(--card-bg)] p-8 rounded-3xl border border-[var(--card-border)] hover:border-primary-blue/50 hover:shadow-xl transition-all duration-300 relative group"
                            >
                                {/* Quote Icon */}
                                <div className="absolute top-8 right-8 text-primary-blue/10 group-hover:text-primary-blue/20 transition-colors">
                                    <Quote size={48} />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="fill-primary-orange text-primary-orange" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-[var(--foreground-secondary)] mb-8 leading-relaxed relative z-10">
                                    &quot;{testimonial.content}&quot;
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[var(--background-secondary)] rounded-full flex items-center justify-center text-2xl border border-[var(--card-border)]">
                                        {testimonial.image}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[var(--foreground)]">{testimonial.name}</h4>
                                        <p className="text-sm text-primary-blue">{testimonial.role}</p>
                                        <p className="text-xs text-[var(--foreground-secondary)]">{testimonial.company}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary-blue to-primary-orange">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join Our Success Stories
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Ready to transform your business? Let&apos;s create something amazing together.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-primary-blue rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Start Your Project
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
