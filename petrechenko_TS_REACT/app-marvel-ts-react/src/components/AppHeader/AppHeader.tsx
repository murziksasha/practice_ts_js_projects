import styles from './AppHeader.module.scss';

interface AppHeaderProps { }

export const AppHeader = ({ }: AppHeaderProps) => (
  <header className={styles.app__header}>
      <h1 className={styles.app__title}>
          <a href="#">
              <span>Marvel</span> information portal
          </a>
      </h1>
      <nav className={styles.app__menu}>
          <ul>
              <li><a href="#">Characters</a></li>
              /
              <li><a href="#">Comics</a></li>
          </ul>
      </nav>
  </header>
)
