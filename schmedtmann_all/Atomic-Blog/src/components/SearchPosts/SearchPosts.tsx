
import styles from './SearchPosts.module.scss';
import { usePosts } from '../../utils/context';



type SearchPostsProps = {};

export const SearchPosts = ({ }: SearchPostsProps) => {
const {searchQuery, setSearchQuery} = usePosts();

  return (<input
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Search posts..."
  />
  );
  
}