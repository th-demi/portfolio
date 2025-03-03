import styles from './ProjectsStyles.module.css';
import roomify from '../../assets/roomify.png';
import GSIM from '../../assets/GSIM_logo.png';
import ProjectCard from '../../common/ProjectCard';
import React from 'react';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={roomify}
          link="https://demi-roomify.vercel.app/"
          h3="Roomify"
          p="Developed Roomify using Django and React, integrating Spotify API for collaborative music playback with host control and guest voting."
        />
        <ProjectCard
          src={GSIM}
          link="https://www.goodshepherdim.com"
          h3="Good Shephered Institute of Music"
          p="Developed a dynamic music school platform using Next.js, Tailwind, Razorpay, with secure admin tools, student registration, and result tracking."
        />
      </div>
    </section>
  );
}

export default Projects;
