
export type Plan = {
  name: string;
  description: string;
  price: {
    amount: number | null; // Always in USD
    period: string;
  };
  features: string[];
  featured?: boolean;
};

export type ServiceOffering = {
  title: string;
  description: string;
  plans: Plan[];
}

export type SubServicePricing = {
  title: string;
  description: string;
  offerings: {
      [key: string]: ServiceOffering;
  }
};

export type RealmPricing = {
    title: string;
    subServices: {
        [key: string]: SubServicePricing;
    }
}

export const pricingPlans: { [key: string]: RealmPricing } = {
  design: {
    title: "Design",
    subServices: {
        "UI/UX Design": {
            title: "UI/UX Design",
            description: "Crafting beautiful and intuitive user experiences for digital products.",
            offerings: {
                "UX/UI Packages": {
                    title: "UX/UI Design Packages",
                    description: "End-to-end design solutions for applications of any scale.",
                    plans: [
                        {
                            name: "Starter",
                            description: "Essential UX/UI for a new feature or small app.",
                            price: { amount: 500, period: "/ project" },
                            features: ["Up to 5 Screens", "Wireframes", "Basic Prototype", "1 Round of Revisions"],
                        },
                        {
                            name: "Pro",
                            description: "Comprehensive design for a full product.",
                            price: { amount: 1500, period: "/ project" },
                            features: ["Up to 15 Screens", "High-Fidelity Mockups", "Interactive Prototype", "Component Library"],
                            featured: true,
                        },
                        {
                            name: "Business",
                            description: "End-to-end design for complex products.",
                            price: { amount: 3000, period: "/ project" },
                            features: ["Unlimited Screens", "Full Design System", "User Research & Testing", "2 Rounds of Revisions"],
                        },
                        {
                            name: "Enterprise",
                            description: "A complete design partnership with ongoing support.",
                            price: { amount: null, period: "Custom" },
                            features: ["Full design partnership", "Dedicated Designer", "Ongoing Support & Iteration", "A/B Testing & Optimization"],
                        },
                    ]
                }
            }
        },
        "Branding & Identity": {
            title: "Branding & Identity",
            description: "Building memorable brands that stand out from the competition.",
            offerings: {
                "Branding Packages": {
                    title: "Branding & Identity Packages",
                    description: "Complete branding solutions for businesses at any stage.",
                    plans: [
                        {
                            name: "Brand Kit",
                            description: "For new businesses needing a foundational brand identity.",
                            price: { amount: 500, period: "/ project" },
                            features: ["Logo Design (3 Concepts)", "Color Palette & Typography", "Mini Brand Style Guide"],
                        },
                        {
                            name: "Full Identity",
                            description: "A complete brand system for a strong market presence.",
                            price: { amount: 1200, period: "/ project" },
                            features: ["Full Brand Kit features", "Comprehensive Brand Guidelines", "Marketing Collateral (Business Cards)", "Brand Voice & Tone"],
                            featured: true,
                        },
                        {
                            name: "Rebranding",
                            description: "Strategic brand refresh for established businesses.",
                            price: { amount: 2500, period: "/ project" },
                            features: ["Brand Audit & Strategy", "Full Identity Redesign", "Launch Campaign Creatives", "Internal Brand Training"],
                        },
                        {
                            name: "Enterprise",
                            description: "Holistic brand management and strategy.",
                            price: { amount: null, period: "Custom" },
                            features: ["Ongoing brand stewardship", "Multiple sub-brands management", "Global brand localization", "Market research & positioning"],
                        },
                    ]
                }
            }
        },
        "Creative & Motion": {
            title: "Creative & Motion",
            description: "Bringing your brand to life with stunning visuals and animation.",
            offerings: {
                "Social Media Packs": {
                    title: "Social Media Creative Packs",
                    description: "Engaging visuals and videos tailored for your social media channels.",
                    plans: [
                        {
                            name: "Starter Pack",
                            description: "Essential visuals to get you started.",
                            price: { amount: 350, period: "/ month" },
                            features: ["10 Static Graphics", "2 Short Video Animations (Reels)", "Custom Templates"],
                        },
                        {
                            name: "Growth Pack",
                            description: "A steady stream of content to grow your audience.",
                            price: { amount: 700, period: "/ month" },
                            features: ["20 Static Graphics", "5 Short Video Animations", "Carousel Post Designs", "Monthly Content Calendar"],
                            featured: true,
                        },
                        {
                            name: "Dominator Pack",
                            description: "Aggressive content strategy for market leaders.",
                            price: { amount: 1400, period: "/ month" },
                            features: ["Unlimited Graphics & Videos", "Dedicated Content Strategist", "Community Management", "Monthly Strategy Call"],
                        },
                        {
                            name: "Enterprise Creative",
                            description: "Full-service creative direction and production.",
                            price: { amount: null, period: "Custom" },
                            features: ["Full campaign creative", "Influencer Content Creation", "Brand photoshoots/video shoots coordination", "Dedicated creative director"],
                        },
                    ]
                },
                "Explainer Videos": {
                    title: "Animated Explainer Videos",
                    description: "A compelling animated video to showcase your product or service.",
                    plans: [
                         {
                            name: "Short & Sweet",
                            description: "A concise video for quick impact.",
                            price: { amount: 1000, period: "/ project" },
                            features: ["Up to 60-second video", "Scriptwriting & Storyboarding", "Custom Illustrations"],
                        },
                        {
                            name: "In-Depth",
                            description: "A more detailed video for complex topics.",
                            price: { amount: 1800, period: "/ project" },
                            features: ["Up to 120-second video", "Advanced Motion Graphics", "Voiceover & Sound Design", "2 Rounds of Revisions"],
                            featured: true,
                        },
                         {
                            name: "Premium Production",
                            description: "High-end animation for brand campaigns.",
                            price: { amount: 3200, period: "/ project" },
                            features: ["Broadcast Quality Animation", "3D Elements", "Original Score", "Unlimited Revisions"],
                        },
                        {
                            name: "Series Production",
                            description: "A series of animated videos for a full campaign.",
                            price: { amount: null, period: "Custom" },
                            features: ["Multiple video series", "Consistent character & world design", "Multi-lingual versions", "Social media cut-downs"],
                        }
                    ]
                }
            }
        }
    }
  },
  build: {
    title: "Build",
    subServices: {
        "Web Development": {
            title: "Web Development",
            description: "Bringing your digital products to life with robust code.",
            offerings: {
                "Web Packages": {
                    title: "Web Development Packages",
                    description: "From simple websites to complex web applications.",
                    plans: [
                        {
                            name: "Web Presence",
                            description: "A professional marketing site or landing page.",
                            price: { amount: 700, period: "/ one-time" },
                            features: ["Up to 5 Pages", "Responsive Design", "Basic SEO Setup"],
                        },
                        {
                            name: "Business Site",
                            description: "A comprehensive website with a content management system.",
                            price: { amount: 1500, period: "/ one-time" },
                            features: ["Up to 10 Pages", "CMS Integration (WordPress/Sanity)", "Blog Functionality", "Analytics Setup"],
                        },
                        {
                            name: "Web Application",
                            description: "For complex SaaS products and custom platforms.",
                            price: { amount: 4000, period: "/ starting at" },
                            features: ["Custom Web Application", "Next.js & Firebase/Supabase", "User Authentication & Database", "API Integration"],
                            featured: true,
                        },
                        {
                            name: "Enterprise Scale",
                            description: "Large-scale applications with ongoing development.",
                            price: { amount: null, period: "Custom" },
                            features: ["Scalable Cloud Architecture", "Dedicated Development Team", "CI/CD & DevOps", "Ongoing Maintenance & Support"],
                        },
                    ]
                }
            }
        },
        "Mobile App Development": {
            title: "Mobile App Development",
            description: "Native and cross-platform apps for iOS & Android.",
            offerings: {
                "Mobile Packages": {
                    title: "Mobile App Development Packages",
                    description: "Solutions for every stage of your mobile strategy.",
                    plans: [
                        {
                            name: "MVP App",
                            description: "Launch your core idea quickly on one platform.",
                            price: { amount: 3000, period: "/ starting at" },
                            features: ["iOS or Android App", "Core Feature Set", "Simple Backend (Firebase)", "App Store Submission"],
                        },
                        {
                            name: "Cross-Platform App",
                            description: "A full-featured app for both iOS & Android.",
                            price: { amount: 6000, period: "/ starting at" },
                            features: ["iOS & Android App (React Native)", "Backend API Development", "Push Notifications", "Third-Party SDK Integrations"],
                            featured: true,
                        },
                        {
                            name: "Native Pro",
                            description: "High-performance native apps for the best user experience.",
                            price: { amount: 9000, period: "/ starting at" },
                            features: ["Native iOS (Swift) & Android (Kotlin)", "Offline Sync Capabilities", "Advanced Animations", "Performance Optimization"],
                        },
                        {
                            name: "Enterprise Mobile",
                            description: "Complex mobile solutions with ongoing support.",
                            price: { amount: null, period: "Custom" },
                            features: ["Scalable Microservices Backend", "Advanced Security & Compliance", "CI/CD & DevOps", "Dedicated Support & Maintenance"],
                        },
                    ]
                }
            }
        },
        "DevOps & Deployment": {
            title: "DevOps & Deployment",
            description: "Automating and managing your cloud infrastructure for reliability and scale.",
            offerings: {
                "DevOps Services": {
                    title: "DevOps & Cloud Management",
                    description: "Ensure your application is always running smoothly.",
                    plans: [
                        {
                            name: "CI/CD Setup",
                            description: "Automate your build, test, and deployment pipeline.",
                            price: { amount: 500, period: "/ project" },
                            features: ["GitHub Actions Setup", "Automated Testing Integration", "Deployment to Vercel/Cloud Run"],
                        },
                        {
                            name: "Infrastructure Mgmt",
                            description: "Ongoing management of your cloud resources.",
                            price: { amount: 350, period: "/ month" },
                            features: ["Cloud Monitoring & Alerting", "Cost Optimization", "Security Patching & Updates", "Performance Tuning"],
                            featured: true,
                        },
                        {
                            name: "Full DevOps",
                            description: "A complete DevOps partnership for enterprise needs.",
                            price: { amount: 1500, period: "/ month" },
                            features: ["Infrastructure as Code (IaC)", "Containerization (Docker)", "24/7 Monitoring & Incident Response", "Scalability Planning"],
                        },
                        {
                            name: "Enterprise DevOps",
                            description: "Strategic DevOps leadership and execution.",
                            price: { amount: null, period: "Custom" },
                            features: ["Full DevOps features", "Disaster Recovery Planning", "Dedicated DevOps Engineer", "Security Compliance (SOC 2, etc.)"],
                        },
                    ]
                }
            }
        }
    }
  },
  integrate: {
    title: "Integrate",
    subServices: {
        "API & Middleware": {
            title: "API & Middleware",
            description: "Connecting your systems for seamless data flow.",
            offerings: {
                "Integration Packages": {
                    title: "API & Middleware Solutions",
                    description: "From simple connectors to complex enterprise-wide integrations.",
                     plans: [
                        {
                            name: "Connector",
                            description: "Connect two standard applications (e.g., CRM to Email).",
                            price: { amount: 350, period: "/ per integration" },
                            features: ["Point-to-Point Integration", "Standard Data Mapping", "Webhook Setup"],
                        },
                        {
                            name: "Workflow",
                            description: "For complex, multi-system automation.",
                            price: { amount: 1500, period: "/ per workflow" },
                            features: ["Multi-Step Workflow Automation", "Custom API Development & Middleware", "Real-time Data Sync", "Basic Error Handling"],
                            featured: true,
                        },
                        {
                            name: "Platform",
                            description: "Develop a custom middleware platform for your business.",
                            price: { amount: 4500, period: "/ starting at" },
                            features: ["Custom Integration Platform", "Advanced Error Logging & Monitoring", "Scalable Architecture", "Developer Documentation"],
                        },
                        {
                            name: "Enterprise",
                            description: "Full-scale integration strategy and BI.",
                            price: { amount: null, period: "Custom" },
                            features: ["Enterprise Service Bus (ESB)", "Data Warehousing & BI Dashboards", "Tech Stack Audit & Strategy", "Dedicated Integration Specialist"],
                        },
                    ]
                }
            }
        },
        "ERP & Finance": {
            title: "ERP & Finance",
            description: "Automate your financial data and reporting for a single source of truth.",
            offerings: {
                "Financial Integration": {
                    title: "ERP & Finance Integrations",
                    description: "Streamline your accounting and enterprise resource planning.",
                    plans: [
                        {
                            name: "Accounting Sync",
                            description: "Sync your sales data with accounting software.",
                            price: { amount: 500, period: "/ setup" },
                            features: ["Connect E-commerce to QuickBooks/Xero", "Automated Invoice Creation", "Sales Data Synchronization"],
                        },
                        {
                            name: "Odoo Integration",
                            description: "Connect your business apps to Odoo ERP.",
                            price: { amount: 1800, period: "/ starting at" },
                            features: ["Integrate CRM, Inventory, and Sales", "Custom Odoo Module Development", "Data Migration to Odoo", "Workflow Automation"],
                            featured: true,
                        },
                         {
                            name: "Full ERP Strategy",
                            description: "End-to-end ERP implementation and integration.",
                            price: { amount: 5000, period: "/ starting at" },
                            features: ["System Selection & Architecture", "Full Data Migration", "Custom Reporting & Dashboards", "User Training & Support"],
                        },
                        {
                            name: "Enterprise Finance",
                            description: "Complex, multi-national financial system integrations.",
                            price: { amount: null, period: "Custom" },
                            features: ["Multi-currency & Tax Compliance", "Integration with legacy systems", "Consolidated financial reporting", "Dedicated finance integration team"],
                        },
                    ]
                }
            }
        }
    }
  },
  automate: {
    title: "Automate",
    subServices: {
        "CRM & Workflow Automation": {
            title: "CRM & Workflow Automation",
            description: "Streamlining your business processes with CRM and custom workflows.",
            offerings: {
                "CRM Automation": {
                    title: "CRM & Workflow Automation",
                    description: "From basic setup to full-scale business process re-engineering.",
                    plans: [
                        {
                            name: "CRM Setup",
                            description: "Basic setup and sales pipeline for Kommo.",
                            price: { amount: 500, period: "/ setup" },
                            features: ["Kommo Account Setup", "Sales Pipeline Configuration", "Webform Integration"],
                        },
                        {
                            name: "Growth Automation",
                            description: "For businesses looking to scale operations.",
                            price: { amount: 850, period: "/ mo" },
                            features: ["Up to 5 Automated Workflows", "CRM & Sales Process Automation", "Custom Analytics Dashboards", "User Training for up to 5 users"],
                            featured: true,
                        },
                        {
                            name: "Business Automation",
                            description: "Advanced automation for multiple departments.",
                            price: { amount: 1600, period: "/ mo" },
                            features: ["Up to 15 Automated Workflows", "Cross-departmental Process Automation", "API Integrations", "Monthly Optimization Review"],
                        },
                        {
                            name: "Enterprise Automation",
                            description: "End-to-end business process re-engineering.",
                            price: { amount: null, period: "Custom" },
                            features: ["Unlimited Automated Workflows", "Full Process Analysis & Redesign", "Integration with Custom Apps", "Dedicated Automation Consultant"],
                        },
                    ],
                }
            }
        },
        "AI Bots & Reporting": {
            title: "AI Bots & Reporting",
            description: "Leverage AI for customer interaction, lead generation, and insights.",
            offerings: {
                "AI Bot Services": {
                    title: "AI Bot Solutions",
                    description: "Deploy intelligent bots to automate tasks and engage customers.",
                     plans: [
                         {
                            name: "Support Bot",
                            description: "An AI chatbot to handle common customer queries.",
                            price: { amount: 400, period: "/ month" },
                            features: ["24/7 Automated Support", "Knowledge Base Integration", "Basic Conversation Flows"],
                        },
                        {
                            name: "Lead Gen Bot",
                            description: "An AI chatbot to qualify leads on your website.",
                            price: { amount: 700, period: "/ month" },
                            features: ["AI-Driven Lead Qualification", "CRM Integration (Kommo)", "Calendar Booking Integration", "Monthly Performance Report"],
                            featured: true,
                        },
                        {
                            name: "Custom AI",
                            description: "Bespoke AI solutions and integrations using Genkit.",
                            price: { amount: 2000, period: "/ starting at" },
                            features: ["Custom Genkit AI Flows", "Generative AI for Content/Images", "Predictive Analytics", "Advanced Conversation Flows"],
                        },
                        {
                            name: "Enterprise AI",
                            description: "Full AI-driven process automation and intelligence.",
                            price: { amount: null, period: "Custom" },
                            features: ["Integration with Internal Tools", "Fine-tuning of AI models", "AI-powered BI Dashboards", "Dedicated AI specialist"],
                        },
                    ]
                }
            }
        }
    }
  },
  grow: {
    title: "Grow",
    subServices: {
        "SEO & GEO Optimization": {
            title: "SEO & GEO",
            description: "Driving organic traffic and dominating search results.",
            offerings: {
                "SEO Packages": {
                    title: "SEO & GEO Optimization",
                    description: "Driving customer acquisition and retention through search.",
                    plans: [
                        {
                            name: "Local SEO",
                            description: "Improve visibility for local businesses.",
                            price: { amount: 350, period: "/ mo" },
                            features: ["Keyword Research (50 keywords)", "On-Page SEO & Technical Audit", "Google Business Profile Mgmt"],
                        },
                        {
                            name: "National SEO",
                            description: "A comprehensive strategy for competitive markets.",
                            price: { amount: 850, period: "/ mo" },
                            features: ["All Local SEO Features", "Content Strategy & 4 Blog Posts/mo", "Backlink Building Campaign", "Monthly Performance Report"],
                            featured: true,
                        },
                        {
                            name: "Dominator SEO",
                            description: "Aggressive SEO for market leadership.",
                            price: { amount: 2000, period: "/ mo" },
                            features: ["All National SEO Features", "Advanced Technical SEO", "Digital PR & Outreach", "Schema Markup & GEO Optimization"],
                        },
                        {
                            name: "Enterprise SEO",
                            description: "Full-service SEO as a growth partner.",
                            price: { amount: null, period: "Custom" },
                            features: ["All Dominator SEO Features", "Custom Analytics Dashboards", "Dedicated SEO Strategist", "International SEO"],
                        },
                    ],
                }
            }
        },
        "Paid Media & Lead Gen": {
            title: "Paid Media",
            description: "Targeted ad campaigns to drive qualified leads and sales.",
            offerings: {
                "Paid Media Management": {
                    title: "Paid Media Management",
                    description: "Maximize your return on ad spend with data-driven campaigns.",
                     plans: [
                        {
                            name: "Single Platform",
                            description: "Targeted campaigns on one major platform.",
                            price: { amount: 500, period: "/ mo + ad spend" },
                            features: ["Management of Meta or Google Ads", "Campaign Setup & A/B Testing", "Conversion Tracking"],
                        },
                        {
                            name: "Multi-Platform",
                            description: "Comprehensive ad management across multiple channels.",
                            price: { amount: 1000, period: "/ mo + ad spend" },
                            features: ["Manage up to 3 Platforms", "Advanced Retargeting Funnels", "Custom Audience Building", "Weekly Performance Reporting"],
                            featured: true,
                        },
                        {
                            name: "Full Funnel",
                            description: "Integrated strategy from awareness to conversion.",
                            price: { amount: 2200, period: "/ mo + ad spend" },
                            features: ["Cross-Channel Strategy", "CRM & Email Nurturing Integration", "Attribution Modeling", "Monthly Strategy & Reporting Call"],
                        },
                        {
                            name: "Enterprise Growth",
                            description: "Holistic paid media strategy and execution.",
                            price: { amount: null, period: "Custom" },
                            features: ["All Full Funnel features", "Landing page creation & optimization", "Creative production", "Dedicated Ads Strategist"],
                        },
                    ]
                }
            }
        }
    }
  },
  marketplace: {
    title: "Marketplace",
    subServices: {
        "Marketplace Management": {
            title: "Marketplace Management",
            description: "Maximize your sales on Amazon, eBay, and Etsy.",
            offerings: {
                "Marketplace Plans": {
                    title: "Marketplace Management Plans",
                    description: "Full-service management for your online marketplace stores.",
                     plans: [
                        {
                            name: "Listing Optimizer",
                            description: "Perfect your product listings on one marketplace.",
                            price: { amount: 400, period: "/ month" },
                            features: ["Up to 20 Product Listings", "Keyword Research & SEO", "Title & Description Copywriting"],
                        },
                        {
                            name: "Account Manager",
                            description: "Full account management for one marketplace.",
                            price: { amount: 800, period: "/ month" },
                            features: ["All Listing Optimizer Features", "Inventory & Order Management", "PPC Campaign Management", "Customer Service & Review Management"],
                            featured: true,
                        },
                        {
                            name: "Omni-Channel",
                            description: "Management across multiple marketplaces.",
                            price: { amount: 1500, period: "/ month" },
                            features: ["Management for Amazon, eBay, Etsy", "Centralized Inventory Sync", "Cross-Platform Ad Strategy", "A+ Content Creation"],
                        },
                        {
                            name: "Global Dominator",
                            description: "Comprehensive global marketplace strategy and execution.",
                            price: { amount: null, period: "Custom" },
                            features: ["All Omni-Channel Features", "International Marketplace Expansion", "Compliance & Logistics Support", "Dedicated Account Manager"],
                        },
                    ]
                }
            }
        }
    }
  },
  support: {
    title: "Support",
    subServices: {
        "Helpdesk & SLAs": {
            title: "Helpdesk & Maintenance",
            description: "Reliable maintenance and support for your digital assets.",
            offerings: {
                "Support & Maintenance Plans": {
                    title: "Support & Maintenance Plans",
                    description: "Keep your applications running smoothly and securely.",
                    plans: [
                        {
                            name: "Standard",
                            description: "Essential maintenance for peace of mind.",
                            price: { amount: 175, period: "/ mo" },
                            features: ["Weekly Software Updates", "Daily Cloud Backups", "Uptime Monitoring", "Email Support (Business Hours)"],
                        },
                        {
                            name: "Business",
                            description: "Priority support for mission-critical systems.",
                            price: { amount: 500, period: "/ mo" },
                            features: ["All Standard Features", "24/7 Emergency Support", "4-hour Critical Response SLA", "Monthly Health Reports"],
                            featured: true,
                        },
                        {
                            name: "Premium",
                            description: "Proactive support with enhanced security.",
                            price: { amount: 950, period: "/ mo" },
                            features: ["All Business Features", "Proactive Security Scans", "Performance Optimization", "Staging Environment Management"],
                        },
                        {
                            name: "Enterprise",
                            description: "A dedicated partnership for comprehensive support.",
                            price: { amount: null, period: "Custom" },
                            features: ["All Premium Features", "Dedicated Account Manager", "Codebase Maintenance", "Quarterly Strategy Reviews"],
                        },
                    ],
                }
            }
        },
        "Cybersecurity & Compliance": {
            title: "Cybersecurity",
            description: "Protect your business from digital threats and ensure compliance.",
            offerings: {
                "Security Services": {
                    title: "Cybersecurity Services",
                    description: "From one-time audits to continuous monitoring.",
                     plans: [
                        {
                            name: "Audit",
                            description: "A one-time comprehensive security assessment.",
                            price: { amount: 700, period: "/ project" },
                            features: ["Vulnerability Scanning", "Security Policy Review", "Actionable Recommendations Report"],
                        },
                        {
                            name: "Penetration Test",
                            description: "A simulated attack to find your vulnerabilities.",
                            price: { amount: 1600, period: "/ project" },
                            features: ["Web Application Penetration Test", "Network Penetration Test", "Social Engineering Test", "Detailed Report & Remediation Plan"],
                        },
                        {
                            name: "Monitoring",
                            description: "Ongoing security monitoring and threat detection.",
                            price: { amount: 400, period: "/ mo" },
                            features: ["24/7 Threat Monitoring", "WAF & DDoS Protection", "Regular Security Scans", "Incident Alerting"],
                            featured: true,
                        },
                        {
                            name: "Compliance",
                            description: "Achieve and maintain industry compliance.",
                            price: { amount: null, period: "Custom" },
                            features: ["GDPR/HIPAA/SOC 2 Gap Analysis", "Policy & Procedure Development", "Regular Audits & Reporting", "Employee Security Training"],
                        },
                    ]
                }
            }
        }
    }
  },
  assist: {
    title: "Assist",
    subServices: {
        "Virtual Assistant": {
            title: "Virtual Assistant",
            description: "Reliable support for your administrative, creative, and technical tasks.",
            offerings: {
                "VA Plans": {
                    title: "Virtual Assistant Plans",
                    description: "Flexible plans to support your daily business operations.",
                     plans: [
                        {
                            name: "Tasker",
                            description: "For startups and individuals needing occasional help.",
                            price: { amount: 250, period: "/ month" },
                            features: ["10 hours/month", "Administrative & Data Entry", "Email & Calendar Management"],
                        },
                        {
                            name: "Pro",
                            description: "For growing businesses needing consistent support.",
                            price: { amount: 500, period: "/ month" },
                            features: ["25 hours/month", "All Tasker Features", "Social Media Scheduling", "Customer Service Support (Tier 1)"],
                            featured: true,
                        },
                        {
                            name: "Business",
                            description: "Comprehensive assistance for established businesses.",
                            price: { amount: 900, period: "/ month" },
                            features: ["50 hours/month", "All Pro Features", "E-commerce & Marketplace Support", "Project Coordination"],
                        },
                        {
                            name: "Full-Time",
                            description: "A fully dedicated virtual assistant for your business.",
                            price: { amount: null, period: "Custom" },
                            features: ["160 hours/month", "Fully dedicated assistant", "Specialized Skill Sets", "Daily Stand-ups & Reporting"],
                        },
                    ]
                }
            }
        }
    }
  },
  learn: {
    title: "Learn",
    subServices: {
        "Product Training": {
            title: "Product Training",
            description: "Empowering your team with expert-led training on key business software.",
            offerings: {
                "Corporate Training": {
                    title: "Corporate Training Programs",
                    description: "Empowering your team with expert-led training.",
                    plans: [
                        {
                            name: "Workshop",
                            description: "A focused, half-day training session on a single topic.",
                            price: { amount: 350, period: "/ session" },
                            features: ["Up to 10 Participants", "Choice of 1 Topic (e.g., Kommo, Figma)", "Hands-on Exercises & Q&A"],
                        },
                        {
                            name: "Bootcamp",
                            description: "An intensive, multi-day program for deep skill-building.",
                            price: { amount: 1200, period: "/ program" },
                            features: ["Up to 15 Participants", "Deep Dive into a Service Area", "Customized Curriculum & Projects", "Digital Course Materials"],
                            featured: true,
                        },
                        {
                            name: "Certification Program",
                            description: "A full certification program with exams.",
                            price: { amount: 2500, period: "/ program" },
                            features: ["All Bootcamp Features", "Final Exam & Certification", "Practical Application Project", "Post-training support"],
                        },
                        {
                            name: "Retainer",
                            description: "Ongoing, customized training for your entire team.",
                            price: { amount: null, period: "Custom" },
                            features: ["Unlimited Participants", "Customized Learning Portal", "Skills Gap Analysis & Tracking", "Dedicated Trainer"],
                        },
                    ],
                }
            }
        },
        "Marketing Bootcamps": {
            title: "Marketing Bootcamps",
            description: "Upskill your team in the latest digital marketing strategies and tools.",
            offerings: {
                "Marketing Training": {
                    title: "Marketing Bootcamps",
                    description: "Upskill your team in the latest marketing strategies.",
                     plans: [
                         {
                            name: "Ads Bootcamp",
                            description: "Master paid advertising on Meta and Google.",
                            price: { amount: 850, period: "/ program" },
                            features: ["2-Day Intensive Workshop", "Campaign Setup & Management", "Budgeting & Bidding Strategies"],
                        },
                        {
                            name: "SEO Bootcamp",
                            description: "Learn the fundamentals of search engine optimization.",
                            price: { amount: 850, period: "/ program" },
                            features: ["2-Day Intensive Workshop", "Keyword Research & On-Page SEO", "Content Strategy for SEO", "Conversion Tracking & Analytics"],
                            featured: true,
                        },
                        {
                            name: "Full Digital",
                            description: "Comprehensive training across all digital marketing channels.",
                            price: { amount: 3000, period: "/ program" },
                            features: ["5-Day Comprehensive Program", "Covers SEO, Ads, Social, Email", "Strategy & Execution", "Link Building & Technical SEO"],
                        },
                        {
                            name: "Custom Corporate",
                            description: "A fully customized marketing training program for your team.",
                            price: { amount: null, period: "Custom" },
                            features: ["Tailored curriculum", "On-site or virtual delivery", "Final Project & Certification", "Post-training follow-up sessions"],
                        },
                    ]
                }
            }
        }
    }
  },
};
