import { usePosts } from '../../utils/context';
import Test, { SlowComponent } from '../Test/Test';
import styles from './List.module.scss';

type ListProps = {}

export const List = ({ }: ListProps) => {
  const {posts} = usePosts();

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}

      {/* <Test>
        <SlowComponent/>
      </Test> */}
    </ul>
  );
}
