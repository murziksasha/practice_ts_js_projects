import { useContext } from 'react';
import styles from './List.module.scss';
import { PostContext } from '../../utils/context';

type ListProps = {}

export const List = ({ }: ListProps) => {
  const {posts} = useContext(PostContext);

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
