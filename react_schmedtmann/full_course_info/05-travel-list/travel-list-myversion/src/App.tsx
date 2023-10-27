import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { PackingList } from './components/PackingList';
import { Form } from './components/Form';
import { Stats } from './components/Stats';
import { IListItems } from './types/types';

const initialItems: IListItems[] = [
  { id: 1, description: "Passports", quantity: '2', packed: false },
  { id: 2, description: "Socks", quantity: '12', packed: true },
  { id: 3, description: "Charger", quantity: '3', packed: false },
];

function App() {
  const [items, setItems] = useState<IListItems[]>(initialItems);

  function handleAddItems(item: any) {
    setItems((items) => [...items, item ])
  }

  return (
    <div className="app">
      <Logo/>
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats/>
    </div>
  );
}

export default App;
