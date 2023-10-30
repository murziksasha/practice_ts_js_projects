import { useState } from 'react';
import '../../index.css';
import { IListItems } from '../../types/types';

interface PackingListProps {
  items: IListItems[]; 
  handleDeleteItem: (id: number)=>void;
  handleToggleItem: (id: number)=>void;
  handleClearList: () => void;
}

export const PackingList = ({items, handleDeleteItem, handleToggleItem, handleClearList}: PackingListProps) => {

  const [sortBy, setSortBy] = useState('input');
  
  let sortedItems = items;

  function onSortChange() {
    switch(sortBy){
      case 'input':
        break;
        case 'description':
          sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
          break;
        case 'packed':
            sortedItems = items.slice().sort((a,b) => Number(a.packed) - Number(b.packed));
            break;
          default: break;
          }
        }
        onSortChange();
        
  return (
    <div className='list'>
      <ul>
        {sortedItems.map((list, i) => {
          return <Item 
          {...list} 
          key={i} 
          handleDelete={handleDeleteItem}
          handleToggleItem={handleToggleItem}
          />
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
  
}

function Item({id, description, quantity, packed, handleDelete, handleToggleItem}: IListItems) {
  const onDeleteClick = () => {
    if(handleDelete) handleDelete(id);
  };

  const onToggleItem = () => {
    if(handleToggleItem) handleToggleItem(id);
  }
    return (
      <li>
        <input type="checkbox" value={`${packed}`} onInput={onToggleItem} />
        <span style={packed ? {textDecoration: 'line-through'} : {}}>
          {quantity}_
          {description} 
          </span>
          <button onClick={onDeleteClick}>❌</button>
      </li>
    )
}