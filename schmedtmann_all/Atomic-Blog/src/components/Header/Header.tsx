
import {usePosts } from '../../utils/context';
import { Results } from '../Results';
import { SearchPosts } from '../SearchPosts';
import styles from './Header.module.scss';

export interface HeaderProps {

 }

export const Header = ({ }: HeaderProps) => {
  const {onClearPosts} = usePosts();
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts/>
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
