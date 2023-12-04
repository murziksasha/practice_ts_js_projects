
import { useContext } from 'react';
import { PostContext } from '../../utils/context';
import styles from './Results.module.scss';

interface ResultsProps {
  
 }

export const Results = ({  }: ResultsProps) => {
  const {posts} = useContext(PostContext);
  return (<p>🚀 {posts.length} atomic posts found</p>
  );
}
