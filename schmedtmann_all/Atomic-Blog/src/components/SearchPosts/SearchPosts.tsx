
import { useContext } from 'react';
import styles from './SearchPosts.module.scss';
import { PostContext } from '../../utils/context';



type SearchPostsProps = {};

export const SearchPosts = ({ }: SearchPostsProps) => {
const {searchQuery, setSearchQuery} = useContext(PostContext);

  return (<input
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search posts..."
  />
  );
  
}