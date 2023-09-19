import styles from './Skeleton.module.scss';

interface SkeletonProps { }

export const Skeleton = ({ }: SkeletonProps) => {
  return (
      <>
          <p className={styles.char__select}>Please select a character to see information</p>
          <div className={styles.skeleton}>
              <div className={`${styles.pulse} ${styles.skeleton__header}`}>
                  <div className={`${styles.pulse} ${styles.skeleton__circle}`}></div>
                  <div className={`${styles.pulse} ${styles.skeleton__mini}`}></div>
              </div>
              <div className={`${styles.pulse} ${styles.skeleton__block}`}></div>
              <div className={`${styles.pulse} ${styles.skeleton__block}`}></div>
              <div className={`${styles.pulse} ${styles.skeleton__block}`}></div>
          </div>
      </>
  )
}
