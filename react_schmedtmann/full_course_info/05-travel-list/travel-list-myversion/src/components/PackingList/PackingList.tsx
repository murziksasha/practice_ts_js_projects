import '../../index.css';
import { IListItems } from '../../types/types';

interface PackingListProps {
  items: IListItems[]; 
}

export const PackingList = ({items}: PackingListProps) => {

  return (
    <div className='list'>
      <ul>
        {items.map((list, i) => {
          return <Item {...list} key={i}/>
        })}
      </ul>
    </div>
  );
  
}

function Item({id, description, quantity, packed}: IListItems) {
    return (
      <li>
        <span style={packed ? {textDecoration: 'line-through'} : {}}>
          {quantity}_
          {description} 
          </span>
          <button>❌</button>
      </li>
    )
}