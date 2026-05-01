"use client";

import styles from "./SkillsStyles.module.css";
import SkillList from "../SkillList";
import { useTheme } from "../ThemeContext";
import React from "react";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light"
      ? "/assets/checkmark-light.svg"
      : "/assets/checkmark-dark.svg";

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="GoLang" />
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="FastAPI" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
      </div>
      <hr className={styles.separator} />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Redis" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="Nginx" />
        <SkillList src={checkMarkIcon} skill="REST API" />
        <SkillList src={checkMarkIcon} skill="Microservices" />
        <SkillList src={checkMarkIcon} skill="Machine Learning" />
        <SkillList src={checkMarkIcon} skill="RAG" />
        <SkillList src={checkMarkIcon} skill="MCP" />
      </div>
    </section>
  );
}

export default Skills;
