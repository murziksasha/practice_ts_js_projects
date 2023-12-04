import { useContext } from 'react';
import { List } from '../List';
import { MainProps } from '../Main';
import styles from './Posts.module.scss';
import { PostContext } from '../../utils/context';

type PostsProps = {};

export const Posts = ({  }: PostsProps) => {
  return (
    <section>
      <List/>
    </section>  
  );
}
