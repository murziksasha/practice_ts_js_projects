import { ChangeEvent, useState } from 'react';
import styles from './SearchPanel.module.scss';

interface SearchPanelProps {
  onUpdateSearch: (term: string) => void;
 }

export const SearchPanel = ({ onUpdateSearch}: SearchPanelProps) => {

  const [term, setTerm] = useState('');

  const onUpdateSearchLocale = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target.value;
    setTerm(target);
    onUpdateSearch(target);
  }

  return (
    <input
    onChange={onUpdateSearchLocale}
    className={`${styles.searchPanel} form-control search-input`}
    type='text'
    placeholder='FIND COWORKER ... '
    value={term}
    />
  );
}
