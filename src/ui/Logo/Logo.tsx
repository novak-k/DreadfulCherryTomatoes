import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <span className={styles.logoText}>Dreadful Cherry Tomatoes</span>
      <img src="./iso.svg" alt="logo" className={styles.logoIcon} />
    </div>
  );
}
