"use client";
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './FloatingResumeButton.module.css';

export default function FloatingResumeButton() {
  return (
    <motion.a 
      href="https://drive.google.com/file/d/1ea3ANnfIzLgVPRvd5ahTSQiC9DgsR2dW/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className={styles.button}
      whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(217, 70, 239, 0.6)' }}
      whileTap={{ scale: 0.95 }}
    >
      View Resume <Download size={20} />
    </motion.a>
  )
}
