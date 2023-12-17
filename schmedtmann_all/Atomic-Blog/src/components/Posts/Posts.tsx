import { useContext } from 'react';
import { List } from '../List';
import styles from './Posts.module.scss';

type PostsProps = {
  children: React.ReactNode;
};

export const Posts = ({ children }: PostsProps) => {
  return (
    <section>
      {children}
    </section>
  );
}
