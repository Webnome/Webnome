import { Code2, Globe, Smartphone, Cloud, Bot, Shield, Megaphone, Server, Palette, Search, PenTool, Layout, Database, Cpu, Lock, BarChart } from 'lucide-react';

export const serviceCategories = [
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Drive growth and visibility with data-driven marketing strategies. We help you reach your target audience and convert them into loyal customers.",
        mainIcon: Megaphone,
        gradient: "from-pink-500 to-rose-500",
        features: [
            {
                id: "seo-optimization",
                title: "SEO Optimization",
                icon: Search,
                desc: "Rank higher on search engines",
                details: {
                    shortDesc: "Improve your search rankings and drive organic traffic.",
                    longDesc: "Our SEO optimization services are designed to help your website rank higher on search engine results pages (SERPs). We use data-driven strategies to identify the best keywords for your business, optimize your on-page content, and build high-quality backlinks. By improving your visibility, we help you attract more organic traffic and generate more leads.",
                    benefits: [
                        "Increased organic traffic",
                        "Higher search engine rankings",
                        "Improved brand visibility",
                        "Better user experience",
                        "Long-term results"
                    ]
                }
            },
            {
                id: "social-media",
                title: "Social Media",
                icon: Globe,
                desc: "Engage audience on all platforms",
                details: {
                    shortDesc: "Build a strong presence on social media platforms.",
                    longDesc: "We help you build a strong presence on social media platforms like Facebook, Instagram, Twitter, LinkedIn, and more. Our team creates engaging content, manages your community, and runs targeted ad campaigns to help you reach your ideal audience. Whether you want to increase brand awareness, drive traffic to your website, or generate leads, we have the expertise to help you succeed.",
                    benefits: [
                        "Increased brand awareness",
                        "Improved customer engagement",
                        "Targeted advertising",
                        "Higher conversion rates",
                        "Real-time feedback"
                    ]
                }
            },
            {
                id: "ppc-advertising",
                title: "PPC Advertising",
                icon: BarChart,
                desc: "Maximize ROI with paid ads",
                details: {
                    shortDesc: "Get immediate results with paid advertising campaigns.",
                    longDesc: "Pay-Per-Click (PPC) advertising is a powerful way to get immediate results. We manage your ad campaigns on platforms like Google Ads and Bing Ads to ensure you get the best return on investment (ROI). Our team conducts thorough keyword research, writes compelling ad copy, and optimizes your landing pages to maximize conversions.",
                    benefits: [
                        "Immediate visibility",
                        "Precise targeting",
                        "Measurable results",
                        "Control over budget",
                        "Higher ROI"
                    ]
                }
            },
            {
                id: "content-strategy",
                title: "Content Strategy",
                icon: PenTool,
                desc: "Compelling storytelling",
                details: {
                    shortDesc: "Create content that resonates with your audience.",
                    longDesc: "Content is king. We help you create a comprehensive content strategy that aligns with your business goals. From blog posts and articles to videos and infographics, we produce high-quality content that engages your audience and establishes your brand as an authority in your industry.",
                    benefits: [
                        "Established authority",
                        "Increased engagement",
                        "Better SEO performance",
                        "Customer loyalty",
                        "Lead generation"
                    ]
                }
            }
        ]
    },
    {
        id: "ui-ux",
        title: "UI/UX Design",
        description: "Create intuitive, engaging, and beautiful user experiences. We design interfaces that users love and that drive business results.",
        mainIcon: Palette,
        gradient: "from-purple-500 to-indigo-500",
        features: [
            {
                id: "user-research",
                title: "User Research",
                icon: Search,
                desc: "Deep user insights",
                details: {
                    shortDesc: "Understand your users to build better products.",
                    longDesc: "User research is the foundation of great design. We conduct in-depth research to understand your users' needs, behaviors, and pain points. By gathering insights through surveys, interviews, and usability testing, we ensure that your product is designed with the user in mind.",
                    benefits: [
                        "Data-driven design decisions",
                        "Improved user satisfaction",
                        "Reduced development costs",
                        "Higher adoption rates",
                        "Competitive advantage"
                    ]
                }
            },
            {
                id: "interface-design",
                title: "Interface Design",
                icon: Layout,
                desc: "Pixel-perfect UI",
                details: {
                    shortDesc: "Visually stunning interfaces that delight users.",
                    longDesc: "Our interface design services focus on creating visually stunning and intuitive user interfaces. We pay attention to every detail, from typography and color schemes to layout and iconography, to ensure that your product looks and feels premium. Our designs are not only beautiful but also functional and easy to use.",
                    benefits: [
                        "Enhanced visual appeal",
                        "Consistent branding",
                        "Improved usability",
                        "Positive first impression",
                        "Increased user retention"
                    ]
                }
            },
            {
                id: "prototyping",
                title: "Prototyping",
                icon: PenTool,
                desc: "Interactive mockups",
                details: {
                    shortDesc: "Test and validate ideas before development.",
                    longDesc: "Prototyping allows you to visualize and test your ideas before investing in development. We create interactive prototypes that simulate the user experience, allowing you to gather feedback and make necessary adjustments early in the process. This helps reduce risks and ensures that the final product meets user expectations.",
                    benefits: [
                        "Early feedback",
                        "Reduced risk",
                        "Clearer requirements",
                        "Faster development",
                        "Better stakeholder alignment"
                    ]
                }
            },
            {
                id: "design-systems",
                title: "Design Systems",
                icon: Palette,
                desc: "Consistent branding",
                details: {
                    shortDesc: "Scalable design systems for consistent products.",
                    longDesc: "A design system is a collection of reusable components, guidelines, and standards that ensure consistency across your products. We help you build and maintain a robust design system that streamlines your design and development process, improves collaboration, and ensures a unified brand experience.",
                    benefits: [
                        "Consistency across products",
                        "Faster design and development",
                        "Improved collaboration",
                        "Scalability",
                        "Easier maintenance"
                    ]
                }
            }
        ]
    },
    {
        id: "web-mobile",
        title: "Web & Mobile Development",
        description: "Build robust, scalable, and high-performance applications. From native mobile apps to complex web platforms, we deliver excellence.",
        mainIcon: Code2,
        gradient: "from-blue-500 to-cyan-500",
        features: [
            {
                id: "custom-web-apps",
                title: "Custom Web Apps",
                icon: Globe,
                desc: "Scalable web solutions",
                details: {
                    shortDesc: "Tailor-made web applications for your business.",
                    longDesc: "We build custom web applications that are tailored to your specific business needs. Whether you need a customer portal, an internal tool, or a SaaS platform, our team has the expertise to deliver a solution that is scalable, secure, and high-performing. We use modern technologies like React, Next.js, and Node.js to ensure your app is future-proof.",
                    benefits: [
                        "Tailored to your needs",
                        "Scalable architecture",
                        "High performance",
                        "Enhanced security",
                        "Seamless integration"
                    ]
                }
            },
            {
                id: "mobile-apps",
                title: "Mobile Apps",
                icon: Smartphone,
                desc: "iOS & Android native",
                details: {
                    shortDesc: "Native and cross-platform mobile applications.",
                    longDesc: "Reach your customers on their favorite devices with our mobile app development services. We build native iOS and Android apps as well as cross-platform solutions using frameworks like React Native and Flutter. Our apps are designed to provide a seamless user experience and leverage the latest mobile technologies.",
                    benefits: [
                        "Wider reach",
                        "Better user engagement",
                        "Push notifications",
                        "Offline access",
                        "Brand recognition"
                    ]
                }
            },
            {
                id: "e-commerce",
                title: "E-Commerce",
                icon: Database,
                desc: "Online store solutions",
                details: {
                    shortDesc: "Robust e-commerce platforms to drive sales.",
                    longDesc: "Launch and grow your online store with our e-commerce development services. We specialize in building robust and scalable e-commerce platforms using technologies like Shopify, WooCommerce, and custom solutions. From product management and payment gateways to shipping integrations and analytics, we handle it all.",
                    benefits: [
                        "Increased sales",
                        "Global reach",
                        "24/7 availability",
                        "Personalized shopping experience",
                        "Data-driven insights"
                    ]
                }
            },
            {
                id: "api-integration",
                title: "API Integration",
                icon: Server,
                desc: "Seamless connectivity",
                details: {
                    shortDesc: "Connect your systems for seamless data flow.",
                    longDesc: "Integrate your applications and systems with our API integration services. We help you connect third-party services, payment gateways, CRMs, and more to ensure seamless data flow and improve operational efficiency. Our team ensures that your integrations are secure, reliable, and scalable.",
                    benefits: [
                        "Improved efficiency",
                        "Automated workflows",
                        "Real-time data sync",
                        "Enhanced functionality",
                        "Reduced manual errors"
                    ]
                }
            }
        ]
    },
    {
        id: "ai-data",
        title: "AI & Data Science",
        description: "Harness the power of Artificial Intelligence and Machine Learning. Transform your data into actionable insights and automated workflows.",
        mainIcon: Bot,
        gradient: "from-emerald-500 to-teal-500",
        features: [
            {
                id: "ai-agents",
                title: "AI Agents",
                icon: Bot,
                desc: "Intelligent automation",
                details: {
                    shortDesc: "Automate tasks with intelligent AI agents.",
                    longDesc: "AI agents are autonomous programs that can perform tasks on your behalf. We build intelligent AI agents that can automate customer support, data entry, scheduling, and more. By leveraging natural language processing and machine learning, our agents can understand and respond to user requests, improving efficiency and customer satisfaction.",
                    benefits: [
                        "24/7 availability",
                        "Reduced operational costs",
                        "Improved accuracy",
                        "Scalability",
                        "Enhanced customer experience"
                    ]
                }
            },
            {
                id: "predictive-analytics",
                title: "Predictive Analytics",
                icon: BarChart,
                desc: "Future trend forecasting",
                details: {
                    shortDesc: "Forecast future trends with data-driven insights.",
                    longDesc: "Predictive analytics uses historical data to forecast future outcomes. We help you leverage predictive models to anticipate market trends, customer behavior, and operational risks. By making data-driven decisions, you can stay ahead of the competition and optimize your business strategies.",
                    benefits: [
                        "Better decision making",
                        "Risk mitigation",
                        "Optimized operations",
                        "Increased revenue",
                        "Competitive advantage"
                    ]
                }
            },
            {
                id: "nlp",
                title: "NLP",
                icon: Cpu,
                desc: "Language processing",
                details: {
                    shortDesc: "Unlock insights from text data with NLP.",
                    longDesc: "Natural Language Processing (NLP) enables computers to understand and interpret human language. We use NLP techniques to analyze text data from social media, customer reviews, and support tickets. This helps you gain valuable insights into customer sentiment, identify trends, and automate text-based tasks.",
                    benefits: [
                        "Sentiment analysis",
                        "Automated text classification",
                        "Improved customer support",
                        "Efficient data extraction",
                        "Language translation"
                    ]
                }
            },
            {
                id: "computer-vision",
                title: "Computer Vision",
                icon: Search,
                desc: "Image analysis",
                details: {
                    shortDesc: "Analyze and interpret visual data.",
                    longDesc: "Computer vision enables machines to 'see' and interpret visual data. We build computer vision solutions for image recognition, object detection, facial recognition, and more. Whether you need to automate quality control, enhance security, or create immersive experiences, we have the expertise to help.",
                    benefits: [
                        "Automated inspection",
                        "Enhanced security",
                        "Improved accuracy",
                        "Real-time analysis",
                        "Innovative applications"
                    ]
                }
            }
        ]
    },
    {
        id: "cloud-security",
        title: "Cloud & Security",
        description: "Secure your infrastructure and scale with confidence. We provide comprehensive cloud solutions and robust cybersecurity measures.",
        mainIcon: Cloud,
        gradient: "from-orange-500 to-red-500",
        features: [
            {
                id: "cloud-migration",
                title: "Cloud Migration",
                icon: Cloud,
                desc: "AWS, Azure, GCP",
                details: {
                    shortDesc: "Seamless migration to the cloud.",
                    longDesc: "Migrating to the cloud can be complex. We help you migrate your applications and data to leading cloud platforms like AWS, Azure, and Google Cloud. Our team ensures a smooth transition with minimal downtime, allowing you to take advantage of the scalability, flexibility, and cost-savings of the cloud.",
                    benefits: [
                        "Scalability",
                        "Cost savings",
                        "Improved performance",
                        "Enhanced security",
                        "Disaster recovery"
                    ]
                }
            },
            {
                id: "devops",
                title: "DevOps",
                icon: Server,
                desc: "CI/CD automation",
                details: {
                    shortDesc: "Streamline development and operations.",
                    longDesc: "DevOps practices bridge the gap between development and operations. We help you implement CI/CD pipelines, automate infrastructure provisioning, and monitor your applications. This leads to faster deployment cycles, higher quality code, and improved collaboration between teams.",
                    benefits: [
                        "Faster time to market",
                        "Improved code quality",
                        "Reduced failure rate",
                        "Efficient collaboration",
                        "Automated workflows"
                    ]
                }
            },
            {
                id: "cybersecurity",
                title: "Cybersecurity",
                icon: Shield,
                desc: "Threat protection",
                details: {
                    shortDesc: "Protect your business from cyber threats.",
                    longDesc: "Cybersecurity is critical in today's digital landscape. We provide comprehensive security solutions to protect your business from cyber threats. From vulnerability assessments and penetration testing to security monitoring and incident response, we ensure that your data and systems are secure.",
                    benefits: [
                        "Data protection",
                        "Compliance adherence",
                        "Risk mitigation",
                        "Business continuity",
                        "Customer trust"
                    ]
                }
            },
            {
                id: "compliance",
                title: "Compliance",
                icon: Lock,
                desc: "Regulatory adherence",
                details: {
                    shortDesc: "Ensure compliance with industry regulations.",
                    longDesc: "Navigating regulatory requirements can be challenging. We help you ensure compliance with industry standards and regulations such as GDPR, HIPAA, and PCI-DSS. Our team conducts audits, implements controls, and provides training to help you avoid penalties and maintain trust.",
                    benefits: [
                        "Regulatory adherence",
                        "Risk reduction",
                        "Avoidance of penalties",
                        "Improved reputation",
                        "Operational efficiency"
                    ]
                }
            }
        ]
    }
];
