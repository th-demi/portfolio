import React from 'react';
import Image from 'next/image';

function SkillList({ src, skill }) {
  return (
    <span>
      <Image src={src} alt="Checkmark icon" width={20} height={20} />
      <p>{skill}</p>
    </span>
  );
}

export default SkillList;
