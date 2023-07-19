import { Search } from "../Search";
import { Logo } from "../Logo";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.titleBox}>
        <Logo />
      </div>
      <div className={styles.searchBox}>
        <Search />
      </div>
    </header>
  );
}
