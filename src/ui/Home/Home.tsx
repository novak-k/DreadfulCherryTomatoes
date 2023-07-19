import styles from './Home.module.css';

export function Home(props) {
  return (
    <div className={styles.home}>{props.children}</div>
  )
}
