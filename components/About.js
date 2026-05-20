import styles from '@/styles/about.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              I'm a passionate full-stack developer with a love for creating clean, user-friendly web applications. 
              With expertise in modern web technologies, I transform ideas into digital reality.
            </p>
            <p>
              I believe in continuous learning and staying updated with the latest industry trends. 
              My goal is to deliver high-quality solutions that exceed expectations.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className={styles.stat}>
                <h3>20+</h3>
                <p>Projects Completed</p>
              </div>
              <div className={styles.stat}>
                <h3>15+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}