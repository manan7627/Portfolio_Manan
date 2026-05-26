"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink } from 'lucide-react';
import styles from './ProjectsSection.module.css';

const AuroraLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" className={styles.projectLogo}>
    <defs>
      <linearGradient id={`grad-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} />
        <stop offset="100%" stopColor="#ffffff" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill={`url(#grad-${color})`} opacity="0.15"/>
    <path d="M50 20 L80 80 L65 80 L50 45 L35 80 L20 80 Z" fill={`url(#grad-${color})`}/>
  </svg>
);

const SetuLogo = () => (
  <svg viewBox="0 0 100 100" className={styles.projectLogo}>
    <defs>
      <linearGradient id="grad-setu" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#ff7b00" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#grad-setu)" opacity="0.15"/>
    <path d="M70 30 Q50 10 30 30 Q10 50 50 50 Q70 50 70 70 Q70 90 30 70" stroke="url(#grad-setu)" strokeWidth="12" strokeLinecap="round" fill="none"/>
  </svg>
);

const EcoLensLogo = () => (
  <svg viewBox="0 0 100 100" className={styles.projectLogo}>
    <defs>
      <linearGradient id="grad-eco" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="50" fill="url(#grad-eco)" opacity="0.15"/>
    <path d="M50 20 Q80 50 50 80 Q20 50 50 20 Z" fill="url(#grad-eco)"/>
    <circle cx="50" cy="50" r="10" fill="#ffffff" opacity="0.8"/>
  </svg>
);

const PROJECTS = [
  {
    title: "AuroraSwap",
    subtitle: "Crypto-to-Fiat Exchange Infrastructure",
    logo: <AuroraLogo color="#00f0ff" />,
    tech: ["Node.js", "Ethers.js", "Redis", "WebSockets"],
    modalTech: ["Node.js", "Ethers.js", "Redis", "WebSockets", "Solidity", "Alchemy Webhooks", "Smart Contracts", "Express.js"],
    description: "Multi-chain transaction infrastructure supporting ERC-20 and BEP-20 deposits with isolated HD wallet generation. Implemented real-time blockchain monitoring via Alchemy Webhooks and Redis.",
    fullDescription: "Built a multi-chain transaction infrastructure supporting ERC-20 and BEP-20 deposits with isolated HD wallet generation and secure backend transaction workflows. Implemented real-time blockchain monitoring pipelines using Alchemy Webhooks, Redis caching, and fallback RPC polling for reliable transaction synchronization and low-latency verification. Designed event-driven backend services for payment processing, asset settlement, gas estimation, and automated vault transfer handling across multiple blockchain networks. Worked with asynchronous backend workflows, WebSocket communication, and Redis-based synchronization systems for scalable real-time transaction processing.",
    color: "#00f0ff",
    link: null
  },
  {
    title: "Project Setu",
    subtitle: "AI-Powered EdTech Assessment Platform",
    logo: <SetuLogo />,
    tech: ["Next.js", "WordPress", "Gemini 2.5", "SQLite"],
    modalTech: ["Next.js", "WordPress", "Gemini 2.5 Flash", "SQLite", "React", "Tailwind CSS", "WP-Cron", "REST APIs"],
    description: "Headless AI-powered academic assessment platform with WP-Cron background processing for asynchronous Gemini inference tasks. Features skill-gap analysis and adaptive practice.",
    fullDescription: "Built a headless AI-powered academic assessment platform using Next.js and a custom WordPress API layer for evaluating written submissions and generating personalized mock tests. Designed asynchronous evaluation workflows using WP-Cron background processing to handle long-running Gemini inference tasks without blocking frontend interactions. Implemented schema-constrained AI response pipelines with Gemini 2.5 Flash to generate structured readiness scores, evaluation summaries, skill-gap analysis, and adaptive practice questions. Developed secure HMAC-based token authentication, custom REST endpoints, and structured submission persistence using SQLite-backed WordPress infrastructure.",
    color: "#d946ef",
    link: "https://frontend-manan2006.vercel.app"
  },
  {
    title: "EcoLens OS",
    subtitle: "AI Vision & Image Processing Platform",
    logo: <EcoLensLogo />,
    tech: ["Node.js", "Express.js", "Gemini 2.5", "Firebase"],
    modalTech: ["Node.js", "Express.js", "Gemini 2.5 Flash", "Firebase", "Jimp", "Firestore", "Google Cloud", "Authentication"],
    description: "AI-powered image analysis platform for municipal waste classification. Implemented perceptual image hashing via Jimp to prevent duplicate submissions and integrated secure Firestore transactions.",
    fullDescription: "Built an AI-powered image analysis platform for municipal waste classification using Gemini 2.5 Flash with structured JSON-based inference workflows. Implemented perceptual image hashing and duplicate-detection pipelines using Jimp to improve scan reliability and prevent repeated submissions. Integrated Firebase Firestore transactions and backend validation logic to maintain data consistency and handle concurrent reward-processing workflows securely. Developed REST APIs and real-time backend processing systems for image uploads, AI inference handling, and scalable client-side interaction management.",
    color: "#10b981",
    link: null
  },
  {
    title: "AuroraSwap Client",
    subtitle: "Trading Interface & Client Architecture",
    logo: <AuroraLogo color="#f43f5e" />,
    tech: ["React.js", "TradingView", "Firebase", "SSE"],
    modalTech: ["React.js", "TradingView Lightweight Charts", "Firebase", "SSE", "WebSockets", "Tailwind CSS", "Vite", "Zustand"],
    description: "Responsive trading dashboard with live market tracking, real-time price synchronization, and interactive TradingView chart integrations.",
    fullDescription: "Developed a responsive trading dashboard with live market tracking, real-time price synchronization, and interactive TradingView chart integrations. Implemented Server-Sent Events (SSE) and client-side caching mechanisms to reduce API overhead and improve frontend responsiveness during live transaction updates. Built secure order confirmation workflows, QR-based deposit handling, and dynamic frontend state management for transaction verification flows. Optimized reusable frontend architecture and rendering performance using modern React.js patterns and responsive UI practices.",
    color: "#f43f5e",
    link: null
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Featured Projects</h2>
        
        <div className={styles.projectsGrid}>
          {PROJECTS.map((project, i) => (
            <motion.div 
              key={i} 
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={styles.card} style={{ '--project-color': project.color } as any}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoContainer}>
                    {project.logo}
                  </div>
                  <div>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectSubtitle}>{project.subtitle}</p>
                  </div>
                </div>

                <div className={styles.techStack}>
                  {project.tech.map((t: string) => (
                    <span key={t} className={styles.techBadge}>{t}</span>
                  ))}
                </div>
                
                <p className={styles.projectDesc}>{project.description}</p>
                
                <button className={styles.caseStudyBtn} onClick={() => setSelectedProject(project)}>
                  View Deep Dive <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              style={{ '--project-color': selectedProject.color } as React.CSSProperties}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className={styles.modalHeader}>
                <div className={styles.modalLogo}>{selectedProject.logo}</div>
                <div>
                  <h3 className={styles.modalTitle}>{selectedProject.title}</h3>
                  <p className={styles.modalSubtitle}>{selectedProject.subtitle}</p>
                </div>
              </div>
              
              <div className={styles.expandedTechStack}>
                {selectedProject.modalTech.map((t: string) => (
                  <span key={t} className={styles.modalTechBadge}>{t}</span>
                ))}
              </div>

              <p className={styles.modalDesc}>{selectedProject.fullDescription}</p>

              {selectedProject.link && (
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className={styles.modalLink}>
                  Visit Live Project <ExternalLink size={20} />
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
