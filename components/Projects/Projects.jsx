import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../ProjectCard";
import React from "react";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="/assets/ragnarok.png"
          link="https://demi-ragnarok.vercel.app/login"
          h3="RAGnarok"
          p="Built RAG platform using Next.js, FastAPI, Docker, PostgreSQL pgvector, Redis caching, pdfplumber pipeline, LLM responses with JWT security."
        />
        <ProjectCard
          src="/assets/GSIM_logo.png"
          link="https://www.goodshepherdim.com"
          h3="Good Shephered Institute of Music"
          p="Developed a dynamic music school platform using Next.js, Tailwind, Razorpay, with secure admin tools, student registration, and result tracking."
        />
      </div>
    </section>
  );
}

export default Projects;
