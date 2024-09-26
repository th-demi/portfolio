import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.projectImage} src={src} alt={`${h3} logo`} />
      </div>
      <h3 className={styles.projectTitle}>{h3}</h3>
      <p className={styles.projectDescription}>{p}</p>
    </a>
  );
}

export default ProjectCard;
