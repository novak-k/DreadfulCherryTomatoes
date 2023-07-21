import { Logo } from "../Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.buttonWrapp}>
        <a href="https://www.apple.com/app-store/">
          <button className={styles.buttonA}></button>
        </a>
        <a href="https://play.google.com/store/games">
          <button className={styles.buttonG}></button>
        </a>
      </div>
      <p className={styles.copyright}>© Copyright 2022 Dreadful Cherry Tomatoes. All rights reserved.</p>
    </footer>
  );
}
