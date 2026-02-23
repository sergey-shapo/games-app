import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Made with ❤️ by Sergey Shaposhnik.{" "}
        <a
          href="https://www.linkedin.com/in/sergey-shaposhnik/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
