'use client';

import Footer from "@/components/Footer";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { serviceCategories } from "@/data/services";

export default function ServicesPage() {
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[var(--foreground)]">Our</span>{" "}
              <span className="gradient-text">
                Expertise
              </span>
            </h1>
            <p className="text-xl text-[var(--foreground-secondary)] max-w-3xl mx-auto leading-relaxed">
              We deliver end-to-end technology solutions tailored to your business goals.
              From strategy to execution, we are your partners in digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Alternating Service Sections */}
      <div className="flex flex-col gap-0">
        {serviceCategories.map((category, index) => {
          const isEven = index % 2 === 0;
          const MainIcon = category.mainIcon;

          return (
            <section key={category.id} className="py-24 relative overflow-hidden border-t border-[var(--card-border)] bg-[var(--background)]">
              {/* Background Glow */}
              <div className={`absolute top-1/2 ${isEven ? '-left-64' : '-right-64'} -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r ${category.gradient} opacity-[0.03] rounded-full blur-3xl pointer-events-none`} />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>

                  {/* Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8 bg-gradient-to-br ${category.gradient} shadow-lg`}>
                      <MainIcon size={32} className="text-white" />
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--foreground)]">
                      {category.title}
                    </h2>
                    <p className="text-xl text-[var(--foreground-secondary)] mb-10 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Feature Grid */}
                    <div className="grid sm:grid-cols-2 gap-6">
                      {category.features.map((feature, idx) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <Link
                            key={idx}
                            href={`/services/${category.id}/${feature.id}`}
                            className="block group"
                          >
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-primary-blue/30 transition-all hover:shadow-lg hover:-translate-y-1">
                              <div className={`p-2 rounded-lg bg-[var(--background-secondary)] text-[var(--foreground)] group-hover:text-primary-blue transition-colors`}>
                                <FeatureIcon size={20} />
                              </div>
                              <div>
                                <h4 className="font-bold text-[var(--foreground)] group-hover:text-primary-blue transition-colors">{feature.title}</h4>
                                <p className="text-sm text-[var(--foreground-secondary)]">{feature.desc}</p>
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Visual / Image Side */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full"
                  >
                    <div className={`relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br ${category.gradient} p-1`}>
                      <div className="absolute inset-0 bg-[var(--background)] m-[1px] rounded-[23px] flex items-center justify-center overflow-hidden">
                        {/* Abstract Visual Representation */}
                        <div className="relative w-full h-full">
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10`} />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <MainIcon size={120} className={`text-[var(--foreground)] opacity-10`} />
                          </div>

                          {/* Floating Elements Animation */}
                          {(() => {
                            const Icon1 = category.features[0].icon;
                            const Icon2 = category.features[1].icon;
                            const Icon3 = category.features[2].icon;

                            return (
                              <>
                                <motion.div
                                  animate={{ y: [0, -20, 0] }}
                                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                  className="absolute top-1/4 left-1/4 p-4 rounded-2xl bg-[var(--card-bg)] shadow-xl border border-[var(--card-border)]"
                                >
                                  <Icon1 size={32} className="text-primary-blue" />
                                </motion.div>

                                <motion.div
                                  animate={{ y: [0, 20, 0] }}
                                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                  className="absolute bottom-1/4 right-1/4 p-4 rounded-2xl bg-[var(--card-bg)] shadow-xl border border-[var(--card-border)]"
                                >
                                  <Icon2 size={32} className="text-primary-orange" />
                                </motion.div>

                                <motion.div
                                  animate={{ x: [0, 20, 0] }}
                                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                  className="absolute top-1/2 right-10 p-3 rounded-xl bg-[var(--card-bg)] shadow-lg border border-[var(--card-border)]"
                                >
                                  <Icon3 size={24} className="text-purple-500" />
                                </motion.div>
                              </>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-blue to-primary-orange">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let&apos;s build something extraordinary together.
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
