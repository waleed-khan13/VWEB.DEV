
export type Realm = {
    title: string;
    description: string;
    slug: string;
    href: string;
    name: string;
    subheading: string;
    sections: {
        sectionTitle: string;
        sectionIntro?: string;
        items: {
            title: string;
            bullets: string[];
        }[];
    }[];
};

export const realms: Realm[] = [
  {
    title: "Design",
    slug: "design",
    href: "/design",
    name: "Design",
    description: "Crafting exceptional brand experiences through UI/UX and creative design.",
    subheading: "Good design is good business. Our human-centered approach to UI/UX, branding, and creative direction ensures your product is not only beautiful but also intuitive and engaging.",
    sections: [
      {
        sectionTitle: "UI/UX Design",
        sectionIntro: "We create intuitive and engaging user interfaces by focusing on user-centric design principles, ensuring a seamless and accessible experience across all devices.",
        items: [
          {
            title: "Core Principles",
            bullets: ["Human-Centered Design", "User journey mapping", "Accessibility (WCAG) compliance", "Information architecture", "Interaction design"],
          },
          {
            title: "Deliverables",
            bullets: ["Wireframes & prototypes", "Design system development", "High-fidelity mockups", "User flow diagrams", "Interactive style guides"],
          },
          {
            title: "Tools & Process",
            bullets: ["Figma", "Agile design sprints", "Collaborative workshops", "Adobe Creative Suite", "Prototyping tools (e.g., ProtoPie)"],
          },
          {
              title: "User Research",
              bullets: ["User interviews & surveys", "Persona development", "Usability testing & analysis", "A/B testing for design", "Heuristic evaluation"]
          }
        ],
      },
      {
        sectionTitle: "Branding & Identity",
        sectionIntro: "Our team develops memorable brand identities, from logos to comprehensive style guides, that resonate with your target audience and establish a strong market presence.",
        items: [
          {
            title: "Brand Systems",
            bullets: ["Logo & identity systems", "Comprehensive style guides", "Brand voice & tone", "Typography systems", "Color palette development"],
          },
          {
            title: "Marketing Materials",
            bullets: ["Digital & print collateral", "Packaging & signage", "Campaign activations", "Social media templates", "Business card design"],
          },
          {
            title: "Digital Presence",
            bullets: ["Website branding", "Social media profile design", "Email template design", "Favicon and app icon design", "Online ad creatives"],
          },
          {
              title: "Brand Strategy",
              bullets: ["Market positioning", "Competitor analysis", "Brand storytelling", "Audience definition", "Value proposition crafting"]
          }
        ],
      },
      {
        sectionTitle: "Creative & Motion",
        sectionIntro: "We bring your brand to life with stunning visuals and animations, creating engaging content for marketing campaigns, social media, and user interfaces.",
        items: [
          {
            title: "Visual Content",
            bullets: ["Marketing collateral", "3D mockups & visualizations", "Photography art direction", "Iconography design", "Infographic creation"],
          },
          {
            title: "Animation",
            bullets: ["Explainer videos", "Motion graphics", "UI micro-interactions", "Logo animations", "Social media video ads"],
          },
           {
            title: "Strategy & Concepts",
            bullets: ["Creative direction", "Mood boards & style scapes", "Campaign conceptualization", "Storyboarding", "Art direction for photoshoots"],
          },
          {
              title: "Video Production",
              bullets: ["Short-form video content", "Promotional videos", "Corporate video production", "Video editing and post-production", "Scriptwriting for video"]
          }
        ],
      },
      {
        sectionTitle: "Product Design",
        sectionIntro: "We offer end-to-end product design services, from initial user research and journey mapping to high-fidelity mockups and interactive prototypes.",
        items: [
          {
            title: "User Research",
            bullets: ["Persona development", "User interviews", "Surveys and questionnaires", "Competitive analysis", "Usability testing"],
          },
          {
            title: "Prototyping",
            bullets: ["Wireframing", "Interactive prototypes", "High-fidelity mockups", "User flow diagrams", "Design handoff to developers"],
          },
        ]
      },
      {
        sectionTitle: "Design Systems",
        sectionIntro: "Establish consistency and scale your design efforts with a robust design system, including component libraries, style guides, and documentation.",
        items: [
          {
            title: "Component Libraries",
            bullets: ["UI component design", "Reusable assets", "Token-based styling", "Version control", "Cross-platform consistency"],
          },
          {
            title: "Documentation",
            bullets: ["Style guides", "Usage guidelines", "Design principles", "Accessibility standards", "Onboarding for designers"],
          },
        ]
      }
    ],
  },
  {
    title: "Build",
    slug: "build",
    href: "/build",
    name: "Build",
    description: "Web, Mobile & E-commerce development tailored to your needs.",
    subheading: "From concept to launch, we build robust and scalable digital experiences. Our web, mobile, and e-commerce solutions are crafted with precision, performance, and passion.",
    sections: [
      {
        sectionTitle: "Web Development",
        sectionIntro: "Crafting bespoke web solutions that are fast, secure, and scalable. We leverage modern frameworks and CMS platforms to build everything from marketing sites to complex enterprise applications.",
        items: [
          {
            title: "Frameworks & Tech",
            bullets: ["Next.js/React", "Node.js/Express", "HTML5 & CSS3/SASS", "TypeScript", "GraphQL/REST APIs"],
          },
          {
            title: "CMS Platforms",
            bullets: ["WordPress", "Shopify", "Wix Studio", "Ecwid", "Sanity", "Strapi", "Monday.com", "Squarespace"],
          },
          {
            title: "E-commerce",
            bullets: ["Custom Storefronts", "Payment Gateway Integration", "Subscription Models", "Inventory Management", "Multi-currency Support"],
          },
          {
            title: "Custom Applications",
            bullets: ["SaaS platforms", "Internal business tools", "Customer portals", "API development", "Real-time applications with WebSockets"]
          }
        ],
      },
      {
        sectionTitle: "Mobile App Development",
        sectionIntro: "Building intuitive and high-performance mobile applications for iOS and Android. We cover the full lifecycle from ideation and design to deployment and maintenance.",
        items: [
          {
            title: "Native & Cross-Platform",
            bullets: ["iOS (Swift/SwiftUI)", "Android (Kotlin/Jetpack Compose)", "React Native", "Flutter", "Progressive Web Apps (PWAs)"],
          },
          {
            title: "Backend & Infrastructure",
            bullets: ["Firebase/Supabase Integration", "REST & GraphQL APIs", "Scalable Cloud Architecture", "Offline-first capabilities", "Real-time Data Sync"],
          },
          {
            title: "App Store & Distribution",
            bullets: ["App Store Submission (Apple & Google Play)", "Beta testing via TestFlight & Google Play Console", "Analytics and Crash Reporting", "In-App Purchases & Subscriptions", "Push Notifications"],
          },
          {
              title: "Feature Development",
              bullets: ["Geolocation and mapping", "Social integrations", "Camera and media handling", "Biometric authentication", "Bluetooth/NFC integration"]
          }
        ],
      },
      {
        sectionTitle: "DevOps & Deployment",
        sectionIntro: "Ensuring your application is deployed efficiently and reliably. We establish automated pipelines and manage cloud infrastructure to support continuous delivery and scalability.",
        items: [
          {
            title: "Cloud & Hosting",
            bullets: ["Vercel/Netlify", "AWS (Amplify, S3, EC2, Lambda)", "Google Cloud (Firebase, Cloud Run)", "DigitalOcean Droplets", "Managed Hosting Solutions"],
          },
          {
            title: "CI/CD",
            bullets: ["GitHub Actions", "Automated Testing (Unit, Integration, E2E)", "Blue/Green Deployments", "Containerization (Docker)", "Infrastructure as Code (IaC)"],
          },
           {
            title: "Monitoring",
            bullets: ["Uptime Monitoring & Health Checks", "Performance Logging & Analysis", "Security Audits & Vulnerability Scanning", "Alerting and Incident Response", "Cost Optimization & Reporting"],
          },
          {
            title: "Database Management",
            bullets: ["Database setup and configuration", "Automated backups and recovery", "Performance tuning", "Data migration services", "Scalable database architecture (e.g., sharding)"]
          }
        ],
      },
      {
        sectionTitle: "Quality Assurance",
        sectionIntro: "We provide comprehensive quality assurance and testing services to ensure your application is bug-free, performs well, and meets user expectations.",
        items: [
          {
            title: "Manual Testing",
            bullets: ["Exploratory testing", "Regression testing", "Usability testing", "Compatibility testing", "Test case execution"],
          },
          {
            title: "Automated Testing",
            bullets: ["Test automation strategy", "UI automation (e.g., Selenium)", "API automation", "Performance and load testing", "Continuous integration with CI/CD"],
          },
        ]
      },
      {
        sectionTitle: "AI Development",
        sectionIntro: "We integrate artificial intelligence and machine learning to build smarter applications, from generative AI features to predictive analytics.",
        items: [
          {
            title: "Generative AI",
            bullets: ["Custom Genkit AI flows", "Content and image generation", "Chatbot development", "AI-powered search", "Summarization and analysis"],
          },
          {
            title: "Machine Learning",
            bullets: ["Predictive modeling", "Recommendation engines", "Natural Language Processing (NLP)", "Computer vision", "Data analysis and visualization"],
          },
        ]
      }
    ],
  },
  {
    title: "Integrate",
    slug: "integrate",
    href: "/integrate",
    name: "Integrate",
    description: "Connecting your systems for unified and seamless business operations.",
    subheading: "Create a single source of truth by integrating your disparate systems. We connect ERP, finance, POS, and more to streamline data flow and enhance decision-making.",
    sections: [
      {
        sectionTitle: "ERP & Finance",
        sectionIntro: "We connect your financial and enterprise systems, automating data flow to provide a unified view of your business operations and streamline financial reporting.",
        items: [
          {
            title: "Platforms",
            bullets: ["Odoo", "QuickBooks", "Xero", "SAP Business One", "NetSuite"],
          },
          {
            title: "Automation",
            bullets: ["Automated tax calculations & invoicing", "Financial reporting consolidation", "Expense management integration", "Payroll system sync", "Procurement process automation"],
          },
          {
            title: "Custom Connectors",
            bullets: ["Bespoke integrations for legacy systems", "Data synchronization scripts", "Custom reporting modules", "Real-time data feeds", "API wrappers for non-API systems"],
          },
          {
            title: "Consulting",
            bullets: ["System selection and evaluation", "Integration architecture planning", "Data migration strategy", "Workflow analysis and optimization", "Security and compliance review"],
          }
        ],
      },
      {
        sectionTitle: "POS & Inventory",
        sectionIntro: "Synchronize your point-of-sale and inventory systems with your e-commerce platforms and backend, ensuring accurate stock levels and a seamless omnichannel retail experience.",
        items: [
          {
            title: "Systems",
            bullets: ["ASTER POS", "Shopify POS", "Square", "Lightspeed", "Clover"],
          },
          {
            title: "Synchronization",
            bullets: ["Real-time stock & pricing updates", "Multi-location inventory management", "Order fulfillment integration", "Customer data sync with CRM", "Barcode & RFID system integration"],
          },
          {
            title: "Omnichannel Retail",
            bullets: ["Click-and-collect solutions", "Unified customer profiles", "Cross-channel promotions", "In-store returns of online orders", "Loyalty program integration"],
          },
          {
            title: "Hardware Integration",
            bullets: ["Receipt printers", "Barcode scanners", "Payment terminals", "Cash drawers", "Customer-facing displays"],
          }
        ],
      },
      {
        sectionTitle: "API & Middleware",
        sectionIntro: "We develop custom APIs and middleware solutions to bridge the gap between your applications, enabling secure and reliable data exchange across your entire tech stack.",
        items: [
          {
            title: "Development",
            bullets: ["Custom REST/GraphQL API development", "Secure data bridges & gateways", "Third-party API integration", "API documentation & versioning", "Rate limiting & security policies"],
          },
          {
            title: "Data Flow",
            bullets: ["Webhooks & real-time data streaming", "ETL (Extract, Transform, Load) pipelines", "Data mapping & transformation", "Error handling & retry logic", "Integration monitoring & logging"],
          },
          {
            title: "iPaaS Solutions",
            bullets: ["Make.com / Integromat", "Zapier", "Custom middleware development", "Workflow automation between apps", "Connector development for iPaaS"],
          },
          {
            title: "API Management",
            bullets: ["API security and authentication (OAuth, JWT)", "Developer portals", "Analytics and usage monitoring", "API gateway setup and configuration", "Monetization strategies for APIs"],
          }
        ],
      },
       {
        sectionTitle: "BI & Analytics",
        sectionIntro: "Consolidate data from multiple sources into powerful business intelligence dashboards, providing actionable insights and automated reports to drive informed decision-making.",
        items: [
          {
            title: "Dashboards",
            bullets: ["GA4 & Looker Studio dashboards", "Sales & operations KPIs", "Custom data visualizations", "Real-time analytics boards", "Executive summary dashboards"],
          },
          {
            title: "Reporting",
            bullets: ["Automated executive-level reports", "Data warehousing & modeling", "Integration with BI tools (Tableau, Power BI)", "Ad-hoc reporting capabilities", "Cross-system data aggregation"],
          },
          {
            title: "Data Warehousing",
            bullets: ["Google BigQuery setup", "Data modeling and schema design", "ETL pipeline development", "Data governance and quality checks", "Performance optimization for queries"],
          },
          {
            title: "Predictive Analytics",
            bullets: ["Sales forecasting", "Customer churn prediction", "Demand planning", "Customer segmentation modeling", "Fraud detection"],
          }
        ],
      },
      {
        sectionTitle: "Healthcare Integration",
        sectionIntro: "Specialized integration services for the healthcare industry, ensuring secure and compliant data exchange between EHRs, patient portals, and other clinical systems.",
        items: [
          {
            title: "EHR/EMR Integration",
            bullets: ["HL7/FHIR standards", "Patient data synchronization", "Appointment scheduling integration", "Secure messaging", "Patient portal integration"],
          },
          {
            title: "Compliance",
            bullets: ["HIPAA-compliant solutions", "Secure data handling", "Audit trails", "Access control", "Data encryption"],
          },
        ]
      }
    ],
  },
  {
    title: "Automate",
    slug: "automate",
    href: "/automate",
    name: "Automate",
    description: "Streamline your operations with CRM, AI, and workflow automation.",
    subheading: "Unlock efficiency and scale your business with intelligent automation. We integrate CRM, AI, and custom workflows to eliminate manual tasks and optimize your processes.",
    sections: [
      {
        sectionTitle: "CRM & Workflow Automation",
        sectionIntro: "We configure and customize your CRM to automate sales and marketing workflows, from lead capture and nurturing to customer segmentation and follow-ups.",
        items: [
          {
            title: "CRM",
            bullets: ["Kommo pipelines & setup", "Sales funnel automation", "Lead capture & webforms", "Contact management & segmentation", "Custom field configuration"],
          },
          {
            title: "Integrations",
            bullets: ["WhatsApp/Instagram integrations", "VoIP/SMS integrations", "Email marketing integration", "Calendar & scheduling sync", "Payment gateway connections"],
          },
          {
            title: "Sales Automation",
            bullets: ["Automated follow-ups", "Lead rotation", "Quote generation", "Sales forecasting", "Task creation for sales reps"],
          },
          {
            title: "Marketing Automation",
            bullets: ["Drip campaigns", "Lead nurturing sequences", "Audience segmentation", "A/B testing", "Dynamic content personalization"],
          }
        ],
      },
      {
        sectionTitle: "AI Bots & Reporting",
        sectionIntro: "Leverage the power of AI to automate customer interactions, generate insights, and produce reports. Our custom bots and analytics solutions work around the clock for you.",
        items: [
          {
            title: "AI & Chat",
            bullets: ["GPT-powered chatbots", "Customer feedback loops", "AI-driven lead qualification", "24/7 automated support", "Internal knowledge base bots"],
          },
          {
            title: "Analytics",
            bullets: ["Automated dashboards", "Predictive analytics & forecasting", "Sales performance reports", "Marketing ROI tracking", "Customer behavior analysis"],
          },
          {
            title: "Generative AI",
            bullets: ["Content generation bots", "Image generation models", "AI-powered email drafting", "Code generation assistants", "Summarization of long documents"],
          },
          {
            title: "Sentiment Analysis",
            bullets: ["Customer feedback analysis", "Social media monitoring", "Brand reputation tracking", "Product review analysis", "Employee feedback analysis"],
          }
        ],
      },
      {
        sectionTitle: "Business Process Automation",
        sectionIntro: "We identify and automate repetitive manual tasks across your business, from HR and finance to project management, freeing up your team to focus on high-value work.",
        items: [
          {
            title: "Task Management",
            bullets: ["Automated tasks & notifications (Kommo + Monday.com)", "Project template creation", "Deadline reminders", "Resource allocation automation", "Dependency management"],
          },
          {
            title: "Process Optimization",
            bullets: ["Document & ticket routing", "Automated lead scoring & SLA timers", "Approval workflows", "Data entry automation", "Onboarding process automation"],
          },
          {
            title: "Financial Automation",
            bullets: ["Invoice processing", "Expense report automation", "Payment reminders", "Purchase order approvals", "Reconciliation of accounts"],
          },
          {
            title: "HR Automation",
            bullets: ["Employee onboarding", "Leave request management", "Performance review workflows", "Timesheet approvals", "Candidate screening"],
          }
        ],
      },
      {
        sectionTitle: "Marketing Automation",
        sectionIntro: "Automate your marketing efforts from lead capture to customer retention, including email campaigns, social media posting, and personalized customer journeys.",
        items: [
          {
            title: "Email Marketing",
            bullets: ["Drip campaigns", "Welcome series", "Customer segmentation", "A/B testing subject lines", "Performance tracking"],
          },
          {
            title: "Social Media",
            bullets: ["Content scheduling", "Automated posting", "Best-time-to-post analysis", "Social listening alerts", "Performance reporting"],
          },
        ]
      },
      {
        sectionTitle: "Sales Automation",
        sectionIntro: "Empower your sales team by automating repetitive tasks like lead assignment, follow-ups, and reporting, allowing them to focus on closing deals.",
        items: [
          {
            title: "Lead Management",
            bullets: ["Automated lead routing", "Lead scoring", "CRM data entry automation", "Automated follow-up emails", "Task creation"],
          },
          {
            title: "Reporting",
            bullets: ["Sales performance dashboards", "Forecasting", "Activity tracking", "Commission calculation", "Win/loss analysis"],
          },
        ]
      }
    ],
  },
  {
    title: "Grow",
    slug: "grow",
    href: "/grow",
    name: "Grow",
    description: "Driving growth through strategic marketing, SEO, and targeted campaigns.",
    subheading: "Acquire, engage, and retain customers with data-driven growth strategies. We leverage SEO, paid media, and compelling content to build your brand and boost your bottom line.",
    sections: [
      {
        sectionTitle: "SEO & GEO Optimization",
        sectionIntro: "Boost your organic visibility and dominate search rankings with our comprehensive SEO strategies, optimized for both traditional search and modern AI-driven search engines.",
        items: [
          {
            title: "Strategy",
            bullets: ["Comprehensive keyword research", "On-page & Off-page SEO", "Technical SEO audits", "Content gap analysis", "Backlink building campaigns"],
          },
          {
            title: "Modern Search",
            bullets: ["GEO (AI search optimization)", "KPI dashboards & performance tracking", "Local SEO & Google Business Profile management", "Voice search optimization", "Schema markup implementation"],
          },
          {
            title: "Content for SEO",
            bullets: ["Blog post optimization", "Landing page copy", "Topical authority building", "Video SEO", "Image optimization"],
          },
          {
            title: "E-commerce SEO",
            bullets: ["Product page optimization", "Category page strategy", "Structured data for products", "Faceted navigation optimization", "Internal linking strategy"],
          }
        ],
      },
      {
        sectionTitle: "Paid Media & Lead Gen",
        sectionIntro: "We manage targeted paid media campaigns across all major platforms, optimizing for conversions and maximizing your return on ad spend through data-driven strategies.",
        items: [
          {
            title: "Campaign Management",
            bullets: ["Meta, Google, TikTok, LinkedIn, & YouTube Ads", "Landing pages & conversion funnels", "A/B testing & optimization", "Budget management", "Audience segmentation"],
          },
          {
            title: "Nurturing",
            bullets: ["Email & SMS automation sequences", "ROI optimization cycles", "Lead magnet creation", "Retargeting campaigns", "CRM integration for lead tracking"],
          },
          {
            title: "Analytics & Reporting",
            bullets: ["Conversion tracking setup", "ROAS analysis", "Custom performance dashboards", "Cross-channel attribution", "Customer lifetime value (LTV) analysis"],
          },
          {
            title: "Ad Creative",
            bullets: ["Ad copy writing", "Video ad production", "Image ad design", "A/B testing creative variations", "Dynamic creative optimization (DCO)"],
          }
        ],
      },
       {
        sectionTitle: "Social & Content",
        sectionIntro: "Build a thriving online community with compelling content and strategic social media management. We produce everything from viral reels to in-depth podcasts.",
        items: [
          {
            title: "Strategy",
            bullets: ["Content calendars & strategy", "Community management & influencer outreach", "Brand storytelling", "Platform-specific content creation", "Performance analytics"],
          },
          {
            title: "Production",
            bullets: ["Studio reels & short-form video", "Podcast production & distribution", "Blog post & article writing", "Infographics & visual assets", "Case studies & whitepapers"],
          },
          {
            title: "Community Engagement",
            bullets: ["Social media monitoring", "Replying to comments and messages", "User-generated content campaigns", "Running contests and giveaways", "Building online communities"],
          },
          {
            title: "Influencer Marketing",
            bullets: ["Influencer identification", "Campaign management", "Performance tracking", "Contract negotiation", "Building long-term partnerships"],
          }
        ],
      },
       {
        sectionTitle: "Growth Workshops",
        sectionIntro: "Empower your in-house team with our expert-led workshops, covering everything from paid advertising and SEO to sales enablement and growth hacking strategies.",
        items: [
          {
            title: "Marketing Training",
            bullets: ["Ads & SEO bootcamps", "Content studio setup & training", "Social media management workshops", "Analytics & reporting masterclass", "Email marketing best practices"],
          },
          {
            title: "Sales Enablement",
            bullets: ["CRM best practices", "Sales funnel optimization", "Lead nurturing techniques", "Closing strategies", "Sales script development"],
          },
          {
            title: "Growth Hacking",
            bullets: ["Experimentation frameworks", "Viral loop creation", "User acquisition strategies", "A/B testing methodologies", "Referral program design"],
          },
          {
            title: "Executive Training",
            bullets: ["Understanding digital KPIs", "Marketing strategy for leaders", "Building a growth culture", "Budgeting for growth", "Competitive analysis workshops"],
          }
        ],
      },
      {
        sectionTitle: "CRO",
        sectionIntro: "Improve your website's performance by converting more visitors into customers through data-driven analysis and A/B testing.",
        items: [
            {
                title: "Analysis",
                bullets: ["Funnel analysis", "Heatmaps and session recordings", "User surveys and feedback", "Heuristic evaluation", "A/B test planning"],
            },
            {
                title: "Optimization",
                bullets: ["Landing page optimization", "Checkout process optimization", "Call-to-action (CTA) testing", "Copy and messaging testing", "Personalization"],
            },
        ]
      }
    ],
  },
  {
    title: "Marketplace",
    slug: "marketplace",
    href: "/marketplace",
    name: "Marketplace",
    description: "Maximize sales on Amazon, eBay, & Etsy with expert management.",
    subheading: "Dominate the world's largest e-commerce platforms. We provide end-to-end marketplace management, from listing optimization and advertising to inventory and customer service.",
    sections: [
      {
        sectionTitle: "Marketplace Management",
        sectionIntro: "Maximize your sales on platforms like Amazon, eBay, and Etsy with our expert account management, listing optimization, and advertising services.",
        items: [
          {
            title: "Account Management",
            bullets: ["Seller account setup & health monitoring", "Performance analytics & reporting", "Handling customer service & cases", "Inventory management & forecasting", "Reputation & review management"],
          },
          {
            title: "Listing Optimization",
            bullets: ["Keyword research & SEO", "Compelling copywriting", "A+ Content & enhanced brand content", "Image & video optimization", "Price monitoring & strategy"],
          },
           {
            title: "Advertising",
            bullets: ["PPC campaign management", "Promotions & coupon setup", "A/B testing ad creatives", "Budget optimization", "Performance tracking & analysis"],
          },
          {
            title: "Strategy",
            bullets: ["Multi-marketplace strategy", "International expansion", "Competitor analysis", "Product launch strategy", "Brand store setup"],
          },
        ],
      },
      {
        sectionTitle: "E-commerce Platform Integration",
        sectionIntro: "Connect your e-commerce website with major marketplaces for centralized management of inventory, orders, and product data.",
        items: [
          {
            title: "Synchronization",
            bullets: ["Real-time inventory sync", "Order management automation", "Product data consistency", "Pricing synchronization", "Fulfillment integration"],
          },
          {
            title: "Platforms",
            bullets: ["Shopify to Amazon/eBay", "WooCommerce to Amazon/eBay", "BigCommerce integration", "Custom platform integration", "Multi-channel listing software"],
          },
        ],
      },
      {
        sectionTitle: "Compliance & Global Expansion",
        sectionIntro: "Navigate the complexities of international marketplaces, including compliance, logistics, and currency management, to expand your global reach.",
        items: [
          {
            title: "Compliance",
            bullets: ["Marketplace policy adherence", "VAT and sales tax management", "Product category compliance", "Intellectual property protection", "Terms of service monitoring"],
          },
          {
            title: "Global Expansion",
            bullets: ["International marketplace setup", "Cross-border shipping logistics", "Currency conversion tools", "Listing translation and localization", "Global customer support strategy"],
          },
        ],
      },
      {
        sectionTitle: "Marketplace Analytics",
        sectionIntro: "Gain deep insights into your marketplace performance with custom dashboards and reports, tracking key metrics to drive growth.",
        items: [
          {
            title: "Reporting",
            bullets: ["Sales performance dashboards", "Advertising ROI analysis", "Inventory turnover reports", "Customer behavior insights", "Competitor tracking"],
          },
          {
            title: "Data Integration",
            bullets: ["Consolidating data from multiple marketplaces", "Integration with BI tools", "Automated report generation", "Custom KPI tracking", "Forecasting and trend analysis"],
          },
        ],
      },
      {
        sectionTitle: "Brand Store Management",
        sectionIntro: "Create a powerful brand presence on marketplaces with custom brand stores that showcase your products and tell your brand story.",
        items: [
          {
            title: "Store Design",
            bullets: ["Amazon Brand Store design", "eBay Store design", "Custom landing pages", "Mobile-optimized layout", "Branded visual assets"],
          },
          {
            title: "Content Strategy",
            bullets: ["Brand storytelling", "Product showcases", "Promotional content", "Video integration", "Lifestyle imagery"],
          },
        ],
      },
    ],
  },
  {
    title: "Support",
    slug: "support",
    href: "/support",
    name: "Support",
    description: "Providing secure, reliable, and responsive care for your digital assets.",
    subheading: "Your systems are mission-critical. Our comprehensive support plans provide peace of mind with tiered helpdesk support, robust security, and proactive maintenance.",
    sections: [
      {
        sectionTitle: "Helpdesk & SLAs",
        sectionIntro: "We provide multi-tiered technical support with guaranteed response times, ensuring your users have access to timely and effective assistance whenever they need it.",
        items: [
          {
            title: "Support Tiers",
            bullets: ["L1–L3 technical support", "Guaranteed response times (SLAs)", "Remote & on-site assistance options", "Dedicated support channels (email, phone, portal)", "Ticketing system management"],
          },
          {
            title: "24/7 Support",
            bullets: ["After-hours and weekend support", "Emergency support services", "Global support coverage", "Holiday coverage plans", "Proactive system monitoring"],
          },
          {
            title: "Customer Success",
            bullets: ["Dedicated account manager", "Regular check-in meetings", "Proactive issue resolution", "User feedback collection", "Service improvement planning"],
          },
          {
            title: "Reporting",
            bullets: ["Ticket resolution time reports", "Common issue analysis", "Customer satisfaction surveys", "SLA compliance reports", "Support team performance metrics"],
          }
        ],
      },
      {
        sectionTitle: "Cybersecurity & Compliance",
        sectionIntro: "Protect your digital assets with our continuous security monitoring, threat management, and compliance support, safeguarding your business against cyber threats.",
        items: [
          {
            title: "Protection",
            bullets: ["SSL certificate management", "WAF/CDN implementation & configuration", "Continuous security monitoring", "DDoS mitigation", "Regular vulnerability scanning"],
          },
          {
            title: "Compliance",
            bullets: ["GDPR/HIPAA awareness & best practices", "Data privacy assessments", "PCI DSS compliance support", "Regular compliance reporting", "Security policy development"],
          },
          {
            title: "Threat Management",
            bullets: ["Intrusion detection systems", "Malware scanning and removal", "Security incident response", "Penetration testing", "Threat intelligence feeds"],
          },
          {
            title: "Employee Training",
            bullets: ["Phishing awareness training", "Secure coding practices", "Data privacy best practices", "Password policy enforcement", "Social engineering awareness"],
          }
        ],
      },
      {
        sectionTitle: "Maintenance & Lifecycle",
        sectionIntro: "We keep your systems running smoothly with proactive maintenance, regular performance audits, and robust backup and disaster recovery planning to ensure business continuity.",
        items: [
          {
            title: "Proactive Care",
            bullets: ["Regular software patching & updates", "Performance & optimization audits", "Database maintenance & optimization", "Backup & disaster recovery planning", "Codebase health checks"],
          },
          {
            title: "Performance Monitoring",
            bullets: ["Load time optimization", "Server performance monitoring", "API response time tracking", "Database query optimization", "Real-user monitoring (RUM)"],
          },
          {
            title: "Backup & Recovery",
            bullets: ["Automated daily backups", "Point-in-time recovery", "Disaster recovery drills", "Off-site backup storage", "Data retention policy management"],
          },
          {
            title: "Software Updates",
            bullets: ["Dependency updates", "Framework upgrades", "Security patching", "Third-party integration updates", "Deprecation management"],
          }
        ],
      },
      {
        sectionTitle: "Onboarding & Handover",
        sectionIntro: "We ensure a smooth transition with comprehensive user training, detailed documentation, and dedicated post-launch support to empower your team from day one.",
        items: [
          {
            title: "Enablement",
            bullets: ["Comprehensive user training sessions", "Standard Operating Procedure (SOP) documentation", "Dedicated client support portal", "Knowledge base creation", "Post-launch support period"],
          },
          {
            title: "Documentation",
            bullets: ["System architecture diagrams", "Codebase documentation", "User guides and manuals", "API documentation (Swagger/OpenAPI)", "Disaster recovery plans"],
          },
          {
            title: "Training",
            bullets: ["Train-the-trainer programs", "Customized training materials", "Live and recorded training sessions", "Interactive workshops", "Ongoing skill development sessions"],
          },
          {
            title: "Transition",
            bullets: ["Phased handover process", "Post-handover support", "Knowledge transfer sessions", "Clear exit strategy documentation", "Access credential management"],
          }
        ],
      },
      {
        sectionTitle: "Managed Services",
        sectionIntro: "Offload the management of your cloud infrastructure, applications, and security to our expert team, allowing you to focus on your core business.",
        items: [
          {
            title: "Cloud Management",
            bullets: ["Infrastructure management", "Cost optimization", "Performance tuning", "Security monitoring", "24/7 support"],
          },
          {
            title: "Application Management",
            bullets: ["Application monitoring", "Bug fixes and updates", "Performance optimization", "User support", "Feature enhancements"],
          },
        ]
      }
    ],
  },
   {
    title: "Assist",
    slug: "assist",
    href: "/assist",
    name: "Assist",
    description: "Reliable virtual assistants for admin, creative, and technical tasks.",
    subheading: "Delegate with confidence. Our virtual assistants provide reliable administrative, technical, and creative support to help you manage your workload and focus on growth.",
    sections: [
       {
        sectionTitle: "Virtual Assistant Services",
        sectionIntro: "Our virtual assistants provide reliable administrative, technical, and creative support to help you manage your workload and focus on what matters most.",
        items: [
            {
                title: "Administrative Support",
                bullets: ["Email & calendar management", "Data entry & file organization", "Customer service & email support", "Travel & meeting coordination", "Transcription & proofreading"],
            },
            {
                title: "E-commerce Support",
                bullets: ["Product listing management", "Order processing & tracking", "Inventory updates", "Customer inquiries & returns", "Marketplace account health"],
            },
             {
                title: "Marketing Support",
                bullets: ["Social media scheduling", "Basic graphic design (Canva)", "Email newsletter preparation", "Competitor research", "Content formatting & publishing"],
            },
            {
                title: "Technical Support",
                bullets: ["Website content updates", "Plugin & theme updates", "Tier 1 technical support", "User account management", "Reporting & analytics data gathering"],
            },
            {
                title: "Executive Assistance",
                bullets: ["Managing executive schedules", "Preparing meeting agendas & minutes", "Handling confidential correspondence", "Personal task management", "Acting as a gatekeeper"],
            },
        ],
      },
      {
        sectionTitle: "Project Coordination",
        sectionIntro: "Our virtual assistants can help manage your projects by tracking timelines, coordinating with team members, and preparing status reports.",
        items: [
          {
            title: "Task Management",
            bullets: ["Tracking project timelines", "Following up on action items", "Organizing project documentation", "Coordinating with team members", "Preparing status reports"],
          },
          {
            title: "Communication",
            bullets: ["Scheduling project meetings", "Distributing meeting minutes", "Communicating updates to stakeholders", "Managing project communication channels", "Facilitating team collaboration"],
          },
        ]
      },
      {
        sectionTitle: "Financial Administration",
        sectionIntro: "Delegate your financial administrative tasks, from invoicing and expense tracking to payroll preparation, to our reliable virtual assistants.",
        items: [
          {
            title: "Bookkeeping",
            bullets: ["Invoice creation and tracking", "Expense report management", "Reconciling accounts", "Payroll preparation", "Generating financial reports"],
          },
          {
            title: "Accounts Payable/Receivable",
            bullets: ["Managing vendor invoices", "Processing payments", "Following up on outstanding invoices", "Customer billing", "Resolving payment discrepancies"],
          },
        ]
      },
      {
        sectionTitle: "HR Support",
        sectionIntro: "Our virtual assistants can support your HR department with tasks like recruitment support, employee onboarding, and maintaining records.",
        items: [
          {
            title: "Recruitment",
            bullets: ["Posting job openings", "Screening resumes", "Scheduling interviews", "Communicating with candidates", "Conducting initial screenings"],
          },
          {
            title: "Employee Management",
            bullets: ["Onboarding new hires", "Maintaining employee records", "Tracking leave requests", "Assisting with performance reviews", "Offboarding employees"],
          },
        ]
      },
      {
        sectionTitle: "Specialized Support",
        sectionIntro: "We offer specialized virtual assistant services for various industries, including real estate, legal, and healthcare, with knowledge of industry-specific software and compliance.",
        items: [
          {
            title: "Industry-Specific",
            bullets: ["Real estate transaction coordination", "Legal document preparation", "Medical billing and coding", "Academic research assistance", "Non-profit grant writing support"],
          },
          {
            title: "Software Expertise",
            bullets: ["CRM management (various platforms)", "Project management tools (Asana, Trello)", "E-commerce platforms (Shopify, WooCommerce)", "Social media management tools", "Microsoft Office Suite & Google Workspace"],
          },
        ]
      }
    ],
  },
  {
    title: "Learn",
    slug: "learn",
    href: "/learn",
    name: "Learn",
    description: "Upskill your team and empower them to succeed with expert-led training.",
    subheading: "Knowledge is power. Our tailored training programs empower your team with the skills they need to excel, from mastering CRM and marketing tools to understanding design principles.",
    sections: [
      {
        sectionTitle: "Product Training",
        sectionIntro: "We provide hands-on training for both off-the-shelf and custom software, ensuring your team can effectively use the tools that power your business.",
        items: [
            {
                title: "Software",
                bullets: ["Kommo CRM administration & use", "Monday.com for project management", "ERP/POS user enablement", "CMS content management (WordPress, Shopify, etc.)", "Analytics platform training (Google Analytics)"]
            },
            {
                title: "Custom Solutions",
                bullets: ["Training on custom-built applications", "User adoption programs", "Feature update training", "Troubleshooting common issues", "Best practice workflows"]
            },
            {
                title: "Admin Training",
                bullets: ["System configuration", "User management", "Reporting and dashboards", "Security settings", "Customization and extension"]
            },
            {
                title: "Best Practices",
                bullets: ["Workflow optimization", "Data entry standards", "Security best practices", "Collaboration techniques", "Productivity tips and tricks"]
            }
        ]
      },
      {
        sectionTitle: "Marketing Bootcamps",
        sectionIntro: "Our intensive marketing bootcamps are designed to upskill your team in critical areas like digital advertising, SEO, content creation, and social media management.",
        items: [
            {
                title: "Digital Marketing",
                bullets: ["Meta & Google Ads mastery", "Advanced SEO & content calendars", "Influencer marketing & studio creation", "Email marketing automation", "Conversion Rate Optimization (CRO) techniques"]
            },
            {
                title: "Content Marketing",
                bullets: ["Content strategy development", "Blog and article writing", "Video content creation", "Podcast production", "Content distribution strategies"]
            },
            {
                title: "Social Media",
                bullets: ["Platform-specific strategies", "Community management", "Social media advertising", "Analytics and reporting", "Crisis management"]
            },
            {
                title: "Analytics",
                bullets: ["Google Analytics 4", "Looker Studio", "Data-driven decision making", "A/B testing and experimentation", "Customer journey analysis"]
            }
        ]
      },
      {
        sectionTitle: "Design & Tech",
        sectionIntro: "From design fundamentals to introductory coding, our workshops provide non-technical teams with the foundational knowledge to collaborate more effectively with creative and engineering talent.",
        items: [
            {
                title: "Design Skills",
                bullets: ["UI/UX fundamentals (Figma)", "Canva for marketing teams & brand kits", "Motion design basics (After Effects)", "Design thinking workshops", "Prototyping & user testing best practices"]
            },
            {
                title: "Web Development",
                bullets: ["Introduction to React & Next.js", "HTML/CSS fundamentals", "JavaScript for beginners", "API consumption", "Responsive design principles"]
            },
            {
                title: "Mobile Development",
                bullets: ["Introduction to React Native", "Building your first mobile app", "App store submission process", "Mobile UI/UX design principles", "Offline functionality"]
            },
            {
                title: "AI & Genkit",
                bullets: ["Introduction to Generative AI", "Building AI flows with Genkit", "Prompt engineering basics", "Integrating AI into applications", "Ethical considerations in AI"]
            }
        ]
      },
      {
        sectionTitle: "E-commerce Skills",
        sectionIntro: "Master the art of online retail with our specialized e-commerce training, covering everything from store operations and marketing to analytics and customer experience.",
        items: [
            {
                title: "Operations",
                bullets: ["Shopify store management & operations", "Product SEO & CRO for e-commerce", "Marketplace compliance (Amazon, eBay)", "Inventory management best practices", "Customer service for online retail"]
            },
            {
                title: "Marketing",
                bullets: ["E-commerce email marketing", "Paid advertising for online stores", "Social commerce strategies", "Affiliate marketing programs", "Loyalty and rewards programs"]
            },
            {
                title: "Analytics",
                bullets: ["Shopify Analytics", "Google Analytics for e-commerce", "Customer lifetime value analysis", "Funnel analysis and optimization", "Product performance reporting"]
            },
            {
                title: "Customer Experience",
                bullets: ["Personalization strategies", "Optimizing the checkout process", "Post-purchase engagement", "Handling returns and exchanges", "Customer feedback and reviews"]
            }
        ]
      },
      {
        sectionTitle: "Leadership & Strategy",
        sectionIntro: "Executive-level workshops designed to equip leaders with the strategic insights needed to navigate the digital landscape and drive growth.",
        items: [
          {
            title: "Digital Strategy",
            bullets: ["Building a digital transformation roadmap", "Understanding digital KPIs", "Competitive analysis", "Budgeting for innovation", "Building a growth-oriented culture"],
          },
          {
            title: "Product Management",
            bullets: ["Agile and scrum methodologies", "Product roadmap planning", "User story writing", "MVP development", "Stakeholder management"],
          },
        ]
      }
    ]
  }
];
