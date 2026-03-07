'use client';

import React from 'react';
import styles from './ResumeModal.module.css';
import { useTheme } from './ThemeContext';

function ResumeModal({ isOpen, onClose }) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  // Close modal when clicking on the overlay
  const handleOverlayClick = () => {
    onClose();
  };

  // Prevent closing when clicking inside the modal
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={`${styles.overlay} ${theme === 'dark' ? styles.dark : styles.light}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.modal} onClick={handleModalClick}>
        <iframe
          src={"/Demi_Resume.pdf"}
          title="Resume"
          className={styles.pdfViewer}
        ></iframe>
      </div>
    </div>
  );
}

export default ResumeModal;
