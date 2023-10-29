import '../../index.css';
import { IListItems } from '../../types/types';

interface PackingListProps {
  items: IListItems[]; 
  handleDeleteItem: (id: number)=>void;
  handleToggleItem: (id: number)=>void;
}

export const PackingList = ({items, handleDeleteItem, handleToggleItem}: PackingListProps) => {

  return (
    <div className='list'>
      <ul>
        {items.map((list, i) => {
          return <Item 
          {...list} 
          key={i} 
          handleDelete={handleDeleteItem}
          handleToggleItem={handleToggleItem}
          />
        })}
      </ul>
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