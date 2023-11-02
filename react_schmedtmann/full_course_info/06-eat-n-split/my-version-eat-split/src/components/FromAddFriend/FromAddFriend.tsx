import { useState } from 'react';
import { Button } from '../Button';
import styles from './FromAddFriend.module.scss';
import { IInitialFriends } from '../../types/types';

interface FromAddFriendProps { 
  handlerSetNewFriend: (friend: IInitialFriends) => void;
}

export const FromAddFriend = ({handlerSetNewFriend}: FromAddFriendProps) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if(!name || !image) return;

    const id = Date.now();
    const newFriend: IInitialFriends = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id: id,
    }
    handlerSetNewFriend(newFriend);
    setName('');
    setImage('https://i.pravatar.cc/48');
  }

  return (
    <form className={styles.fromAddFriend} onSubmit={handleSubmit}>
      <label>
        <span>🫂Friend name</span>
        <input type="text" 
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        <span>🖼️ Image Url</span>
        <input type="text" 
          value={image}
          onChange={e=>setImage(e.target.value)}
        />
      </label>
      <br />
      <Button>Add</Button>
    </form>
  );
}
