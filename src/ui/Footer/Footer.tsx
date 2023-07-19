import { Logo } from "../Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
     <Logo/>
      <div className={styles.buttonWrapp}>
      <button className={styles.buttonA}></button>
      <button className={styles.buttonG}></button>
      </div>
      <p className={styles.copyright}>© Copyright 2022 Dreadful Tomatoes. All rights reserved.</p>
    </footer>
  );
}
