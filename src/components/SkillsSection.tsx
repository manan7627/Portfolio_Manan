"use client";
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, 
  SiExpress, SiMongodb, SiRedis, SiFirebase, SiTailwindcss, SiOpenai, SiCplusplus 
} from 'react-icons/si';
import { FaJava, FaAws, FaGithub, FaLinux, FaDatabase } from 'react-icons/fa';
import styles from './SkillsSection.module.css';

const SKILLS = [
  { name: "React.js", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "AWS", icon: <FaAws />, color: "#FF9900" },
  { name: "Gemini AI", icon: <SiOpenai />, color: "#10b981" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "WebSockets", icon: <SiReact />, color: "#c77dff" },
  { name: "Redis", icon: <SiRedis />, color: "#DC382D" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Docker", icon: <FaLinux />, color: "#2496ED" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "Java", icon: <FaJava />, color: "#007396" },
  { name: "SQL", icon: <FaDatabase />, color: "#F29111" }
];

function MagneticIcon({ children, delay }: { children: React.ReactNode, delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.4, y: y * 0.4 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        x: position.x, 
        y: position.y !== 0 ? position.y : [0, -10, 0] 
      }}
      transition={{ 
        type: "spring", stiffness: 150, damping: 15, mass: 0.1,
        y: position.y === 0 ? { repeat: Infinity, duration: 4, ease: "easeInOut", delay } : undefined
      }}
      className={styles.iconMagneticWrapper}
    >
      {children}
    </motion.div>
  );
}

export default function SkillsSection() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const cards = document.getElementsByClassName(styles.bentoCardWrapper);
    for (const card of Array.from(cards)) {
      const htmlCard = card as HTMLElement;
      const rect = htmlCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      htmlCard.style.setProperty("--mouse-x", `${x}px`);
      htmlCard.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Technical Arsenal</h2>
        <div className={styles.bentoGrid} onMouseMove={handleMouseMove}>
          {SKILLS.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className={styles.bentoCardWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <div className={styles.bentoCard}>
                <div className={styles.iconWrapper} style={{ color: skill.color }}>
                  <MagneticIcon delay={index * 0.2}>
                    {skill.icon}
                  </MagneticIcon>
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
