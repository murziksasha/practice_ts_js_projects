import React, { useState } from 'react';
import './App.css';
import { IInitialFriends } from './types/types';
import { FriendsList } from './components/FriendsList';
import { FromAddFriend } from './components/FromAddFriend';
import { Button } from './components/Button';
import { FromSplitBill } from './components/FromSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState< IInitialFriends | null>(null);

  function handlerShowAddFriend() {
    setShowAddFriend(showAddFriend => !showAddFriend);
    if(!showAddFriend) setSelectedFriend(null);
  }

  function handlerSetNewFriend(newFriend: IInitialFriends) {
    if(!newFriend) return;
    setFriendsList([...friendsList, newFriend]);
  }

  function handlerSelectedFriend(friend: IInitialFriends) {
    setSelectedFriend((currentSelected) => {
      if (currentSelected && currentSelected.id === friend.id) {
        return null;
      } else {
        return friend;
      } 
    })
    setShowAddFriend(false);
  }

  function handleSplitBill(value: number) {
    console.log(value);
    setFriendsList((friends) => {
      return friends.map(friend => {
        if (friend.id === selectedFriend?.id) {
          return { ...friend, balance: friend.balance + value };
        } else {
          return friend;
        }
      });
    });

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          initialFriends={friendsList}        
          handlerSelectedFriend={handlerSelectedFriend} 
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FromAddFriend
         handlerSetNewFriend={handlerSetNewFriend}
         />}
        <Button
        onClick={handlerShowAddFriend}
        >{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      {selectedFriend && <FromSplitBill key={selectedFriend.id}
      selectedFriend={selectedFriend}
      onHandleSplitBill={handleSplitBill}
      />}
    </div>
  );
}

export default App;
