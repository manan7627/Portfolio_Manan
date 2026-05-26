"use client";
import styles from './ContactSection.module.css';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.section}>
       <div className={styles.container}>
         <div className={styles.header}>
            <h2 className={styles.heading}>Initialize Connection</h2>
            <p className={styles.subheading}>System ready for direct input.</p>
         </div>

         <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
               <div className={styles.trafficLights}>
                 <span className={styles.red} />
                 <span className={styles.yellow} />
                 <span className={styles.green} />
               </div>
               <div className={styles.terminalTitle}>ai-proxy@manan-sharma:~</div>
            </div>
            
            <div className={styles.terminalBody}>
               <p className={styles.prompt}>
                 <span className={styles.user}>guest@system</span>:<span className={styles.dir}>~</span>$ ./contact.sh
               </p>
               <p className={styles.output}>Accessing secure channels...</p>
               <p className={styles.output}>Establishing direct link to Manan Sharma.</p>
               
               <div className={styles.linksGrid}>
                  <a href="mailto:mrsharma7627@gmail.com" className={styles.contactLink}>
                     <Mail size={24} className={styles.linkIcon} />
                     <div className={styles.linkDetails}>
                       <span className={styles.linkLabel}>Email Protocol</span>
                       <span className={styles.linkValue}>mrsharma7627@gmail.com</span>
                     </div>
                  </a>
                  
                  <a href="https://linkedin.com/in/manansharma7627" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                     <FaLinkedin size={24} className={styles.linkIcon} />
                     <div className={styles.linkDetails}>
                       <span className={styles.linkLabel}>Professional Network</span>
                       <span className={styles.linkValue}>in/manansharma7627</span>
                     </div>
                  </a>
                  
                  <a href="https://github.com/manan2006" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                     <FaGithub size={24} className={styles.linkIcon} />
                     <div className={styles.linkDetails}>
                       <span className={styles.linkLabel}>Code Repository</span>
                       <span className={styles.linkValue}>github.com/manan2006</span>
                     </div>
                  </a>
               </div>

               <p className={styles.prompt} style={{ marginTop: '32px' }}>
                 <span className={styles.user}>guest@system</span>:<span className={styles.dir}>~</span>$ <span className={styles.cursor} />
               </p>
            </div>
         </div>
       </div>
    </section>
  )
}
