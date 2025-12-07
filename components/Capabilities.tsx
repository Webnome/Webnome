'use client';

import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Cloud, Brain, TrendingUp } from 'lucide-react';

const capabilities = [
    {
        icon: Code2,
        title: 'Software Engineering',
        items: ['Enterprise Applications', 'SaaS Platforms', 'System Integration', 'Legacy Modernization']
    },
    {
        icon: Smartphone,
        title: 'App Development',
        items: ['iOS & Android', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    },
    {
        icon: Globe,
        title: 'Web Technologies',
        items: ['React & Next.js', 'Node.js & Python', 'E-commerce', 'Progressive Web Apps']
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        items: ['AWS & Azure', 'CI/CD Pipelines', 'Kubernetes', 'Infrastructure as Code']
    },
    {
        icon: Brain,
        title: 'AI & Data Science',
        items: ['Machine Learning', 'NLP & Computer Vision', 'Data Analytics', 'Predictive Models']
    },
    {
        icon: TrendingUp,
        title: 'Marketing & Growth',
        items: ['SEO & SEM', 'Content Strategy', 'Social Media', 'Analytics & CRO']
    },
];

export default function Capabilities() {
    return (
        <section className="py-24 bg-[var(--background-secondary)] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-gradient-to-r from-primary-blue/10 to-primary-orange/10 dark:from-primary-blue/20 dark:to-primary-orange/20 rounded-full border border-[var(--card-border)]">
                        <span className="gradient-text font-semibold text-sm uppercase tracking-wider">
                            Capabilities
                        </span>
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--foreground)]">
                        Our
                        <span className="gradient-text"> Expertise</span>
                    </h2>
                    <p className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto">
                        Comprehensive technology capabilities to power your digital transformation.
                    </p>
                </motion.div>

                {/* Capabilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group p-6 bg-[var(--card-bg)] rounded-2xl border border-[var(--card-border)] hover:border-primary-blue/50 transition-all duration-300 card-hover"
                            >
                                <div className="flex items-start gap-4 mb-5">
                                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue to-primary-orange flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-xl font-bold text-[var(--foreground)] pt-2">
                                        {capability.title}
                                    </h3>
                                </div>
                                <ul className="space-y-2">
                                    {capability.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-[var(--foreground-secondary)]">
                                            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary-blue to-primary-orange" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
