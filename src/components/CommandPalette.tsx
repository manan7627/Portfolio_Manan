"use client";
import { useEffect, useState, useRef } from 'react';
import { Search, X, FileText, Monitor, Mail, User } from 'lucide-react';
import styles from './CommandPalette.module.css';

const COMMANDS = [
  { id: 'resume', label: 'View Resume', icon: FileText, action: () => alert('Resume opened') },
  { id: 'ecolens', label: 'Jump to EcoLens OS', icon: Monitor, action: () => alert('Scrolled to EcoLens') },
  { id: 'contact', label: 'Email Me', icon: Mail, action: () => window.location.href = 'mailto:mrsharma7627@gmail.com' },
  { id: 'about', label: 'About Me', icon: User, action: () => alert('Scrolled to About') },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredCommands = COMMANDS.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.palette} onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Command Palette">
        <div className={styles.searchHeader}>
          <Search className={styles.searchIcon} size={20} />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Type a command or search..."
            className={styles.searchInput}
            value={query}
            onChange={e => setQuery(e.target.value)}
            aria-label="Search commands"
          />
          <button className={styles.closeButton} onClick={() => setIsOpen(false)} aria-label="Close palette">
            <X size={20} />
          </button>
        </div>
        <ul className={styles.commandList}>
          {filteredCommands.length > 0 ? (
            filteredCommands.map(cmd => {
              const Icon = cmd.icon;
              return (
                <li key={cmd.id}>
                  <button className={styles.commandItem} onClick={() => { cmd.action(); setIsOpen(false); }}>
                    <Icon size={18} className={styles.commandIcon} />
                    <span>{cmd.label}</span>
                  </button>
                </li>
              );
            })
          ) : (
            <li className={styles.noResults}>No results found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}
