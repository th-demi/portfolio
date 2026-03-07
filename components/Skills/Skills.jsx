'use client';

import styles from './SkillsStyles.module.css';
import SkillList from '../SkillList';
import { useTheme } from '../ThemeContext';
import React from 'react';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? '/assets/checkmark-light.svg' : '/assets/checkmark-dark.svg';

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Django" />
        <SkillList src={checkMarkIcon} skill="React.js" />
        <SkillList src={checkMarkIcon} skill="Next.js" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="Javascript" />
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="GoLang" />
      </div>
      <hr className={styles.separator} />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AWS" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Redis" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="REST API" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Nginx & LB" />
      </div>
    </section>
  );
}

export default Skills;
