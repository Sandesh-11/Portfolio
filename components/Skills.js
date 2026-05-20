import styles from '@/styles/skills.module.css';

export default function Skills() {
  const skillsData = [
    {
      category: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase']
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'RESTful APIs', 'GraphQL']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Expertise</h2>
        <div className={styles.skillsGrid}>
          {skillsData.map((skillGroup, index) => (
            <div key={index} className={styles.skillGroup}>
              <h3>{skillGroup.category}</h3>
              <div className={styles.skillList}>
                {skillGroup.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillItem}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}