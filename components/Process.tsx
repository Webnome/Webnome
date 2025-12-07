'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Code, Rocket, Headphones, ShieldCheck } from 'lucide-react';

const steps = [
    {
        icon: Search,
        title: 'Discovery',
        description: 'We dive deep into your business goals, requirements, and target audience to build a solid foundation.',
        color: 'text-blue-500',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20'
    },
    {
        icon: PenTool,
        title: 'Design',
        description: 'Our designers create intuitive, stunning UI/UX prototypes that align with your brand identity.',
        color: 'text-purple-500',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/20'
    },
    {
        icon: Code,
        title: 'Development',
        description: 'We build robust, scalable solutions using cutting-edge technologies and clean coding practices.',
        color: 'text-pink-500',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/20'
    },
    {
        icon: ShieldCheck,
        title: 'Testing',
        description: 'Rigorous QA testing ensures your product is bug-free, secure, and performs flawlessly across devices.',
        color: 'text-orange-500',
        bg: 'bg-orange-500/10',
        border: 'border-orange-500/20'
    },
    {
        icon: Rocket,
        title: 'Launch',
        description: 'We handle the deployment process smoothly, ensuring a successful go-live with zero downtime.',
        color: 'text-green-500',
        bg: 'bg-green-500/10',
        border: 'border-green-500/20'
    },
    {
        icon: Headphones,
        title: 'Support',
        description: 'Our partnership continues with 24/7 support, maintenance, and updates to keep you ahead.',
        color: 'text-cyan-500',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/20'
    }
];

export default function Process() {
    return (
        <section className="py-24 bg-[var(--background)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-blue/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block px-4 py-2 rounded-full bg-primary-blue/10 text-primary-blue font-medium text-sm mb-4"
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]"
                    >
                        Our Proven <span className="gradient-text">Process</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-[var(--foreground-secondary)] max-w-2xl mx-auto"
                    >
                        A streamlined workflow designed to deliver excellence from concept to completion.
                    </motion.p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--card-border)] to-transparent -z-10" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className={`p-8 rounded-3xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-primary-blue/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col items-start relative overflow-hidden`}>

                                    {/* Step Number Background */}
                                    <div className="absolute -right-4 -top-4 text-9xl font-bold text-[var(--foreground)] opacity-[0.03] select-none">
                                        {index + 1}
                                    </div>

                                    {/* Icon */}
                                    <div className={`w-14 h-14 rounded-2xl ${step.bg} ${step.color} flex items-center justify-center mb-6 border ${step.border} group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon size={28} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold mb-3 text-[var(--foreground)] group-hover:text-primary-blue transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-[var(--foreground-secondary)] leading-relaxed">
                                        {step.description}
                                    </p>

                                    {/* Hover Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br from-primary-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
