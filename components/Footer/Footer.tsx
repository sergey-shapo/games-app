import styles from "./Footer.module.scss";

const Footer = () => {
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
};

export default Footer;
