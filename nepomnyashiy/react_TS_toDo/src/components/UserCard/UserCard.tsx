import { LocalGithubUser } from 'types';
import styles from './UserCard.module.scss';
import { UserStat } from 'components/UserStat';

interface UserCardProps extends LocalGithubUser { }

export const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
    />
  </div>
);
