import React from 'react';
import styles from '../sections/Skills/SkillsStyles.module.css'; // Adjusted import path

function SkillList({ src, skill }) {
  return (
    <span className={styles.skillItem}>
      <img className={styles.skillImage} src={src} alt="Checkmark icon" />
      <p style={{ margin: 0 }}>{skill}</p>
    </span>
  );
}

export default SkillList;
