

import { useState } from 'react';
import '../../index.css';
import { IListItems } from '../../types/types';

interface FormProps {
  handleAddItems: (item: IListItems) => void;
 }

export const Form = ({ handleAddItems}: FormProps) => {

  const [description, setDescription] = useState('');
  const [selectNum, setSelectNum] = useState('1');
  const [quantity, setQuantity] = useState('1');

 

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newItem: IListItems= {description, quantity, packed: false, id: Date.now()};
    if(!description) return;
    console.log(newItem);

    handleAddItems(newItem);

    setDescription('');
    setSelectNum('1');
    setQuantity('1');
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="" id=""
        value={selectNum}
        onChange={(e) => {
          setSelectNum(e.target.value);
          setQuantity(e.target.value);
        }}
      >
        {Array.from({length: 20}, (_, i) => i + 1)
        .map(num => (
          <option
            key={num}
          >{num}</option>
        ))
        }
      </select>
      <input 
        type="text" 
        placeholder="Item..." 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
