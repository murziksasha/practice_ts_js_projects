import { link } from 'fs';
import { IInitialFriends } from '../../types/types';
import styles from './FriendsList.module.scss';
import { Button } from '../Button';

interface FriendsListProps {
  initialFriends: IInitialFriends[];
  selectedFriend?: IInitialFriends | null;
  handlerSelectedFriend(friend: IInitialFriends): void;
}

export const FriendsList = ({ initialFriends, handlerSelectedFriend, selectedFriend}: FriendsListProps) => {
  const friends = initialFriends.slice();
  return (
    <ul className={styles.friendsList}>
      {friends.map((friend) => (
        <Friend 
          friend={friend} 
          key={friend.id}
          selectedFriend={selectedFriend}
          handlerSelectedFriend={handlerSelectedFriend}
        />
      ))}
    </ul>
  );
};

interface IFriendProps {
  friend: IInitialFriends;
  selectedFriend?: IInitialFriends | null;
  handlerSelectedFriend(friend: IInitialFriends): void;
}

const Friend = ({ friend, handlerSelectedFriend, selectedFriend }: IFriendProps) => {
  const isSelected = friend === selectedFriend;
  const { name, image, balance } = friend;

  return (
    <li className={isSelected ? 'selected': ''}>
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
      <Button onClick={() => handlerSelectedFriend(friend)}>{isSelected ? 'Close': 'Select'}</Button>
    </li>
  );
};
