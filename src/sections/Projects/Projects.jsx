import styles from './ProjectsStyles.module.css';
import roomify from '../../assets/roomify.png';
import todolist from '../../assets/to-do-list.png';
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
          src={todolist}
          link="https://todolist-by-demi.vercel.app/"
          h3="To-do List"
          p="Developed a web-based Todo List app using Django, cloud PostgreSQL for database, and deployed on Vercel for seamless access."
        />
      </div>
    </section>
  );
}

export default Projects;
