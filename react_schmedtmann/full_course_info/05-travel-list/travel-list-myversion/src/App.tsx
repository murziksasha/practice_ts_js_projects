import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Form } from './components/Form';
import { Stats } from './components/Stats';
import { IListItems } from './types/types';

const initialItems: IListItems[] = [
  { id: 1, description: "Passports", quantity: '2', packed: false },
  { id: 2, description: "Socks", quantity: '12', packed: false },
  { id: 3, description: "Charger", quantity: '3', packed: false },
];

function App() {
  const [items, setItems] = useState<IListItems[]>([]);

  function handleAddItems(item: any) {
    setItems((items) => [...items, item ])
  }

  function handleDeleteItem(id: number) {
    setItems(items=>items.filter(item=>item.id !== id));
  }

  function handleToggleItem(id: number) {
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearList() {
    const confirmed = window.confirm('Are you sure you want to delete all items?');
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo/>
      <Form handleAddItems={handleAddItems}/>
      <PackingList 
        items={items} 
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
        handleClearList={handleClearList}
      />
      <Stats items={items}/>
    </div>
  );
}

export default App;
