"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import styles from './ExperienceSection.module.css';

const BULLETS = [
  "Built and deployed scalable MERN-stack applications with secure authentication workflows, REST APIs, responsive frontend systems, and production-oriented backend architecture.",
  "Developed reusable frontend interfaces using React.js, JavaScript, and Tailwind CSS while improving performance, responsiveness, and cross-device compatibility.",
  "Designed backend services using Node.js and Express.js with MongoDB, Firebase, and Redis integrations for real-time updates, caching, and secure data handling.",
  "Worked with deployment workflows, Linux-based environments, API integrations, and cloud hosting platforms while managing debugging and production fixes across client projects.",
  "Integrated GenAI workflows and third-party APIs for automation systems, AI-assisted processing, chatbot interactions, and structured backend pipelines."
];

export default function ExperienceSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className={styles.section}>
      <motion.div 
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.headerArea}>
          <h2 className={styles.heading}>Professional Experience</h2>
        </div>
        
        <div className={styles.consoleCard}>
          <div className={styles.roleHeader}>
            <div className={styles.iconContainer}>
              <Briefcase size={36} />
            </div>
            <div>
              <h3 className={styles.role}>Freelance Full-Stack Developer</h3>
              <div className={styles.meta}>
                <span className={styles.company}>Independent Contractor (Remote)</span>
                <span className={styles.date}>Sep. 2025 – Present</span>
              </div>
            </div>
          </div>

          <div className={styles.contentLayout}>
            <div className={styles.timelineSidebar}>
               <div className={styles.timelineLine} />
               <motion.div 
                 className={styles.timelineGlow}
                 animate={{
                   top: hoveredIndex !== null ? `${(hoveredIndex / BULLETS.length) * 100}%` : '0%',
                   height: hoveredIndex !== null ? `${100 / BULLETS.length}%` : '0%',
                   opacity: hoveredIndex !== null ? 1 : 0
                 }}
                 transition={{ type: "spring", stiffness: 300, damping: 30 }}
               />
            </div>

            <ul className={styles.bulletsList}>
              {BULLETS.map((bullet, i) => (
                <li 
                  key={i} 
                  className={`${styles.bulletItem} ${hoveredIndex === i ? styles.bulletHovered : ''}`}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div 
                    className={styles.bulletNode}
                    animate={{
                      scale: hoveredIndex === i ? 1.5 : 1,
                      backgroundColor: hoveredIndex === i ? 'var(--accent-pink)' : 'rgba(255,255,255,0.2)'
                    }}
                  />
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
