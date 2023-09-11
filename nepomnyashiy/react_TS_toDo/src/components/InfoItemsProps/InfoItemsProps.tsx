import styles from './InfoItemsProps.module.scss';

export interface InfoItemsPropsProps { 
  icon: React.ReactNode;
  text?: string | null;
  isLink?: boolean;
}

export const InfoItemsProps = ({ icon, isLink, text}: InfoItemsPropsProps) => {
  const currentText = text || 'Not Available';
  let currentHref = '';
  if(isLink) {
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }
  return (
    <div className={`${styles.infoItemsProps}${text ? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {
          isLink && text ? (
            <a href={currentHref}
            target='_blank'
            rel='noreferrer'
            className={styles.link}
            >
              {currentText}
            </a>
          ) : currentText
        }
      </div>
    </div>
  );
}
