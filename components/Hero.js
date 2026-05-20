import styles from '@/styles/hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm Sandesh</h1>
          <p className={styles.subtitle}>Full Stack Developer | Web Designer | Problem Solver</p>
          <p className={styles.description}>
            I build beautiful and functional websites that help businesses grow and achieve their goals.
          </p>
          <div className={styles.buttons}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}