import styles from './SearchPanel.module.scss';

interface SearchPanelProps { }

export const SearchPanel = ({ }: SearchPanelProps) => (
  <input className={`${styles.searchPanel} form-control search-input`}
  type='text'
  placeholder='FIND COWORKER ... '
  />
);
