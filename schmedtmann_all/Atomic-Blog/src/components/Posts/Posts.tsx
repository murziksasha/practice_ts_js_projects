import { useContext } from 'react';
import { List } from '../List';
import styles from './Posts.module.scss';

type PostsProps = {};

export const Posts = ({  }: PostsProps) => {
  return (
    <section>
      <List/>
    </section>  
  );
}
