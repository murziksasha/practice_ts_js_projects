
import {usePosts } from '../../utils/context';
import styles from './Results.module.scss';

interface ResultsProps {
  
 }

export const Results = ({  }: ResultsProps) => {
  const {posts} = usePosts()
  return (<p>🚀 {posts.length} atomic posts found</p>
  );
}
