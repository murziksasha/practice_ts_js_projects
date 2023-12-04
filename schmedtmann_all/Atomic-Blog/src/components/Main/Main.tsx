
import { FormAddPost } from '../FormAddPost';
import { Posts } from '../Posts';
import styles from './Main.module.scss';

export interface MainProps {

 }

export const Main = ({   }: MainProps) => {
  return (
    <main>
      <FormAddPost/>
      <Posts/>
    </main>
  );
}
