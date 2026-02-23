import Link from "next/link";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Games</Link>
      </div>
    </header>
  );
};

export default Header;
