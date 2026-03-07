'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './HeroStyles.module.css';
import { useTheme } from '../ThemeContext';
import ResumeModal from '../ResumeModal';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const themeIcon = theme === 'light' ? '/assets/sun.svg' : '/assets/moon.svg';
  const mailIcon = theme === 'light' ? '/assets/email-white.svg' : '/assets/email-black.svg';
  const githubIcon = theme === 'light' ? '/assets/github-light.svg' : '/assets/github-dark.svg';
  const linkedinIcon = theme === 'light' ? '/assets/linkedin-light.svg' : '/assets/linkedin-dark.svg';

  const buttonClass = `${styles.resumeButton} ${theme === 'light' ? styles.lightButton : styles.darkButton}`;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <Image
          src="/assets/Design uten navn.png"
          className={styles.hero}
          alt="Profile picture of Demi"
          width={400}
          height={400}
          priority
        />
        <Image
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          width={25}
          height={25}
        />
      </div>

      <div className={styles.info}>
        <h1>Demi</h1>
        <h2>Software / Python Developer</h2>
        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/th-demi/" target="_blank" rel="noopener noreferrer">
            <Image src={linkedinIcon} alt="Linkedin icon" className={styles.icon} width={35} height={35} />
          </a>
          <a href="https://github.com/th-demi" target="_blank" rel="noopener noreferrer">
            <Image src={githubIcon} alt="Github icon" className={styles.icon} width={35} height={35} />
          </a>
          <a href="mailto:mariademetrius6@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image src={mailIcon} alt="Email icon" className={styles.icon} width={35} height={35} />
          </a>
        </div>
        <p className={styles.description}>A dedicated software developer crafting digital solutions with a creative touch</p>

        <button className={buttonClass} onClick={() => setIsResumeOpen(true)}>
          Resume
        </button>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </section>
  );
}

export default Hero;
