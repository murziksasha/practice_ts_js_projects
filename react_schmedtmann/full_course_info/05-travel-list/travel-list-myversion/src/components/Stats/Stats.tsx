import '../../index.css';
import { IListItems } from '../../types/types';

interface StatsProps { 
  items: IListItems[];
}

export const Stats = ({ items }: StatsProps) => {
  if(!items.length) return <p className='stats'><em>
    Start adding some items to your packing list 🚀
    </em></p>;
  const itemsLength = items.length;
  const itemsPackedLength = items.filter(item => item.packed).length;
  const percentage = Math.round((itemsPackedLength / itemsLength) * 100);



  return (
    <footer className='stats'>
      <em>
        {percentage === 100 ? 'You got everything! Ready to go ✈️ ': `👜 You have ${itemsLength} items in your list, and you already packed ${itemsPackedLength} (${percentage}%)`} 
      </em>
    </footer>
  );
}
