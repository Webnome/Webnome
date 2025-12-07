import { notFound } from 'next/navigation';
import { serviceCategories } from '@/data/services';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface PageProps {
    params: {
        categoryId: string;
        featureId: string;
    };
}

export function generateStaticParams() {
    const params = [];
    for (const category of serviceCategories) {
        for (const feature of category.features) {
            params.push({
                categoryId: category.id,
                featureId: feature.id,
            });
        }
    }
    return params;
}

export default function ServiceFeaturePage({ params }: PageProps) {
    const category = serviceCategories.find((c) => c.id === params.categoryId);
    const feature = category?.features.find((f) => f.id === params.featureId);

    if (!category || !feature) {
        notFound();
    }

    const Icon = feature.icon;

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className={`relative pt-32 pb-20 overflow-hidden`}>
                {/* Background Gradients */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${category.gradient} opacity-5`} />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-[var(--foreground-secondary)] hover:text-primary-blue transition-colors mb-8 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Services
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        <div className="flex-1">
                            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 bg-gradient-to-br ${category.gradient} shadow-lg`}>
                                <Icon size={40} className="text-white" />
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[var(--foreground)]">
                                {feature.title}
                            </h1>
                            <p className="text-xl text-[var(--foreground-secondary)] leading-relaxed mb-8">
                                {feature.details.shortDesc}
                            </p>
                            <div className="flex gap-4">
                                <Link
                                    href="/contact"
                                    className="px-8 py-4 bg-primary-blue text-white rounded-full font-semibold hover:bg-blue-600 transition-colors shadow-lg hover:shadow-primary-blue/30"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        {/* Visual Abstract Shape */}
                        <div className="flex-1 w-full flex justify-center">
                            <div className={`relative w-full max-w-md aspect-square rounded-full bg-gradient-to-tr ${category.gradient} opacity-10 animate-pulse`} />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <Icon size={200} className={`text-[var(--foreground)] opacity-5`} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Content Section */}
            <section className="py-20 bg-[var(--background-secondary)]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Overview</h2>
                            <p className="text-lg text-[var(--foreground-secondary)] leading-relaxed whitespace-pre-line">
                                {feature.details.longDesc}
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-[var(--foreground)]">Key Benefits</h2>
                            <div className="space-y-4">
                                {feature.details.benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)]">
                                        <CheckCircle2 className="text-green-500 shrink-0" size={24} />
                                        <span className="text-[var(--foreground)] font-medium">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-primary-blue to-primary-orange">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to get started with {feature.title}?
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Contact us today to discuss your project and see how we can help.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-primary-blue rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
