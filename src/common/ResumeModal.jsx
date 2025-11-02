import React from 'react';
import styles from './ResumeModal.module.css';
// import CV from '../assets/Demi_Resume.pdf';
import { useTheme } from './ThemeContext';

function ResumeModal({ isOpen, onClose }) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className={`${styles.overlay} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <iframe src={"/Demi_Resume.pdf"} title="Resume" className={styles.pdfViewer}></iframe>
      </div>
    </div>
  );
}

export default ResumeModal;
