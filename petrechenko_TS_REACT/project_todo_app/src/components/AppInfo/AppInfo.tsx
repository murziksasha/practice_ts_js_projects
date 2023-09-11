import styles from './AppInfo.module.scss';

interface AppInfoProps { }

export const AppInfo = ({ }: AppInfoProps) => (
  <div className={styles.appInfo}>
    <h1>Учет сотрудников в компании №</h1>
    <h2>Общее число сотрудников:</h2>
    <h2>Премию получат:</h2>
  </div>
);
