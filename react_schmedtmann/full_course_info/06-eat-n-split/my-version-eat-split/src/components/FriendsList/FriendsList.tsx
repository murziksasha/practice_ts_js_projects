import { link } from 'fs';
import { IInitialFriends } from '../../types/types';
import styles from './FriendsList.module.scss';

interface FriendsListProps {
  initialFriends: IInitialFriends[];
}

export const FriendsList = ({ initialFriends }: FriendsListProps) => {
  const friends = initialFriends.slice();
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

interface IFriendProps {
  friend: IInitialFriends;
}

const Friend = ({ friend }: IFriendProps) => {
  const { name, image, balance } = friend;

  return (
    <li>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && (
        <p className='red'>
          Your owe {name} {Math.abs(balance)}
        </p>
      )}
      {balance > 0 && (
        <p className='green'>
          {name} owes you {Math.abs(balance)}
        </p>
      )}
      {balance === 0 && <p>Your and {name} are even</p>}
      <button className='button'>Select</button>
    </li>
  );
};
