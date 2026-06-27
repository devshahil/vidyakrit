import React from 'react';
import { Monitor, Smartphone, Cpu, Settings, Cloud } from "lucide-react";

export const servicesData = [
  {
    id: "custom-software",
    icon: <Cpu size={24} color="var(--color-green)" />,
    title: "Custom Software",
    shortDescription: "Tailor-made enterprise software solutions designed to digitize and optimize your unique workflows.",
    problem: "Off-the-shelf software forces your business to adapt to its limitations, leading to inefficient workarounds, fragmented data silos, and a lack of true competitive advantage.",
    solution: "We build bespoke software from the ground up, specifically engineered to map 1:1 with your operational workflows, ensuring seamless integration and maximum efficiency.",
    benefits: [
      "100% Customization to your specific business logic",
      "No vendor lock-in or recurring per-user licensing fees",
      "Seamless integration with your existing legacy systems",
      "High scalability to grow effortlessly alongside your company"
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Deep-dive analysis of your business requirements and technical constraints." },
      { step: "02", title: "Architecture", desc: "System design, database modeling, and technology stack selection." },
      { step: "03", title: "Development", desc: "Agile engineering with bi-weekly sprints and continuous feedback." },
      { step: "04", title: "Deployment", desc: "Secure rollout, extensive testing, and staff training." }
    ],
    technologies: ["Node.js", "Python", "React", "PostgreSQL", "Docker", "AWS"],
    faq: [
      { q: "How long does a custom software project take?", a: "Depending on complexity, typical enterprise projects take 3 to 6 months for the initial MVP, followed by iterative enhancements." },
      { q: "Do we own the source code?", a: "Yes, upon project completion and final payment, you retain 100% ownership of the intellectual property and source code." }
    ],
    ctaText: "Discuss Your Custom Project"
  },
  {
    id: "web-development",
    icon: <Monitor size={24} color="var(--color-blue)" />,
    title: "Web Development",
    shortDescription: "High-performance corporate websites and web apps built with modern frameworks.",
    problem: "Slow, outdated websites damage brand credibility, frustrate users, and severely limit your ability to generate inbound leads or process online transactions.",
    solution: "We engineer lightning-fast, highly responsive web applications utilizing modern edge-computing frameworks to deliver premium user experiences that drive conversions.",
    benefits: [
      "Sub-second load times for improved SEO",
      "Flawless responsive design on all devices",
      "Enterprise-grade security and protection",
      "Intuitive CMS for effortless management"
    ],
    process: [
      { step: "01", title: "UX/UI Design", desc: "Creating high-fidelity wireframes and interactive prototypes." },
      { step: "02", title: "Frontend", desc: "Pixel-perfect implementation using React and Next.js." },
      { step: "03", title: "Backend", desc: "Building robust APIs and secure database architectures." },
      { step: "04", title: "Optimization", desc: "Performance tuning, SEO implementation, and launch." }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
    faq: [
      { q: "Can you integrate our existing CRM into the new website?", a: "Absolutely. We specialize in API integrations and can connect your site to Salesforce, HubSpot, or any custom CRM." },
      { q: "Will the website be optimized for Google Search?", a: "Yes, all our web applications are built with technical SEO best practices, including SSR (Server-Side Rendering) and semantic HTML." }
    ],
    ctaText: "Start Your Web Project"
  },
  {
    id: "mobile-apps",
    icon: <Smartphone size={24} color="var(--color-purple)" />,
    title: "Mobile Apps",
    shortDescription: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    problem: "Your customers expect seamless mobile access to your services, but poor app performance, clunky interfaces, or lack of offline support drives them to competitors.",
    solution: "We develop high-fidelity mobile applications that offer native-like performance, elegant gesture-based interfaces, and robust offline capabilities.",
    benefits: [
      "Consistent, premium user experience across iOS and Android",
      "Access to native device features (Camera, GPS, Biometrics)",
      "Offline-first architecture for uninterrupted usability",
      "Optimized battery consumption and memory management"
    ],
    process: [
      { step: "01", title: "Prototyping", desc: "Mapping user journeys and creating touch-optimized designs." },
      { step: "02", title: "Engineering", desc: "Developing cross-platform codebase with native modules." },
      { step: "03", title: "QA Testing", desc: "Rigorous testing across multiple physical devices and OS versions." },
      { step: "04", title: "App Store", desc: "Handling Apple App Store and Google Play Store submissions." }
    ],
    technologies: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "SQLite"],
    faq: [
      { q: "Should we build Native or Cross-platform?", a: "For 90% of business apps, we recommend React Native (cross-platform) as it cuts development time and costs in half while providing near-native performance." },
      { q: "Do you handle the App Store publishing process?", a: "Yes, we manage the entire submission process, including compliance checks and store listing optimization." }
    ],
    ctaText: "Build Your Mobile App"
  },
  {
    id: "ai-automation",
    icon: <Settings size={24} color="var(--color-orange)" />,
    title: "AI & Automation",
    shortDescription: "Integrate intelligent AI solutions into your business to automate repetitive tasks.",
    problem: "Your workforce is bogged down by repetitive manual data entry, customer support inquiries, and inefficient routing, leading to high operational costs and human error.",
    solution: "We deploy custom AI agents and intelligent workflow automations that work 24/7, instantly resolving queries and routing data without human intervention.",
    benefits: [
      "Drastic reduction in operational overhead and manual labor costs",
      "24/7 instant response times for customer support inquiries",
      "Elimination of human error in data entry and processing",
      "Scalable operations without needing proportional new hires"
    ],
    process: [
      { step: "01", title: "Audit", desc: "Identifying bottlenecks and repetitive tasks ripe for automation." },
      { step: "02", title: "Model Training", desc: "Fine-tuning LLMs on your company's proprietary data and docs." },
      { step: "03", title: "Integration", desc: "Connecting the AI agents to your existing software stack (Slack, CRM)." },
      { step: "04", title: "Monitoring", desc: "Ongoing monitoring to ensure accuracy and prevent hallucinations." }
    ],
    technologies: ["OpenAI API", "LangChain", "Python", "Pinecone", "Make.com", "Zapier"],
    faq: [
      { q: "Is our proprietary company data safe with your AI solutions?", a: "Yes. We utilize enterprise-grade APIs with zero-data-retention policies, meaning your private data is never used to train public models." },
      { q: "Can the AI interact with our existing software?", a: "Yes, our automation pipelines can connect to virtually any software that offers a REST API or webhook support." }
    ],
    ctaText: "Automate Your Workflows"
  },
  {
    id: "cloud-infrastructure",
    icon: <Cloud size={24} color="var(--color-pink)" />,
    title: "Cloud & Infrastructure",
    shortDescription: "Secure, scalable cloud deployments and ongoing infrastructure monitoring.",
    problem: "Managing on-premise servers is expensive, prone to catastrophic data loss, and unable to dynamically scale during traffic spikes, leading to downtime.",
    solution: "We architect resilient, auto-scaling cloud environments on top-tier providers, ensuring 99.99% uptime, robust disaster recovery, and optimized server costs.",
    benefits: [
      "Auto-scaling resources that instantly adapt to user traffic",
      "Automated daily backups and geographically redundant disaster recovery",
      "Significant reduction in physical hardware maintenance costs",
      "Enterprise-grade network security and DDoS protection"
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Evaluating current infrastructure and planning migration strategies." },
      { step: "02", title: "Provisioning", desc: "Writing Infrastructure as Code (IaC) to set up environments." },
      { step: "03", title: "Migration", desc: "Securely transferring data with zero or minimal planned downtime." },
      { step: "04", title: "DevOps", desc: "Setting up CI/CD pipelines for automated testing and deployment." }
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Linux"],
    faq: [
      { q: "Will our service go down during the cloud migration?", a: "We employ blue-green deployment strategies and out-of-hours migrations to ensure zero to near-zero downtime." },
      { q: "Can you help optimize our current AWS bill?", a: "Yes, our cloud audits typically identify significant cost savings by right-sizing instances and utilizing reserved capacity." }
    ],
    ctaText: "Modernize Your Infrastructure"
  }
];
