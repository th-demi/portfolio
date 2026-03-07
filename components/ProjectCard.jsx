import React from 'react';
import Image from 'next/image';
import styles from './ProjectCard.module.css';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          className={styles.projectImage} 
          src={src} 
          alt={`${h3} logo`}
          width={250}
          height={250}
        />
      </div>
      <h3 className={styles.projectTitle}>{h3}</h3>
      <p className={styles.projectDescription}>{p}</p>
    </a>
  );
}

export default ProjectCard;
