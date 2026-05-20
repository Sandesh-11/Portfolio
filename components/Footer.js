import styles from '@/styles/footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>&copy; {currentYear} Sandesh. All rights reserved.</p>
        <p>Designed & Built with ❤️</p>
      </div>
    </footer>
  );
}