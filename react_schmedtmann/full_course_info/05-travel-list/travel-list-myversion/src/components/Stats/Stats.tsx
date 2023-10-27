import '../../index.css';

interface StatsProps { }

export const Stats = ({ }: StatsProps) => (
  <footer className='stats'>
    <em>
      {`👜 You have ${'x'} items in your list, and you already packed X ${'(X%)'}`}
    </em>
  </footer>
);
