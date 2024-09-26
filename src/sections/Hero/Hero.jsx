import styles from './HeroStyles.module.css';
import heroImg from '../../assets/Design uten navn.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import mailLight from '../../assets/email-white.svg';
import mailDark from '../../assets/email-black.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Demi_Resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import React from 'react';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const mailIcon = theme === 'light' ? mailLight : mailDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Determine button class based on theme
  const buttonClass = `${styles.resumeButton} ${theme === 'light' ? styles.lightButton : styles.darkButton}`;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Demi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>Demi</h1>
        <h2>Software / Python Developer</h2>
        <div className={styles.iconContainer}>
          <a href="https://www.linkedin.com/in/th-demi/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" className={styles.icon} />
          </a>
          <a href="https://github.com/th-demi" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" className={styles.icon} />
          </a>
          <a href="mailto:mariademetrius6@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Email icon" className={styles.icon} />
          </a>
        </div>
        <p className={styles.description}>A dedicated software developer crafting digital solutions with a creative touch</p>
        <a href={CV} download>
          <button className={buttonClass}>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
