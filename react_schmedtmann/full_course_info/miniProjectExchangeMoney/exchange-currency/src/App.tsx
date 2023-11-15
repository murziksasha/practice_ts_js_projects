import { useEffect, useState } from 'react';
import './App.css';
import { getJSON } from './components/services/getJSON';

//https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

interface IResponseData {
  amount: number;
  base: string;
  date: string;
  rates: {
    [key: string]: number;
  };
}

function App() {
  const [amountMy, setAmountMy] = useState(1);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');

  const [output, setOutput] = useState(0);
  const [curDate, setCurDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
          const data: IResponseData = await getJSON(
            `https://api.frankfurter.app/latest?amount=${amountMy}&from=${fromCur}&to=${toCur}`
          );
          const {amount, base, rates, date} = data;
          setOutput(rates[toCur]);
          setCurDate(date);
      setIsLoading(false);
    }
    if(fromCur === toCur) return setOutput(1);
    convert();
  }, [amountMy, fromCur, toCur]);

  return (
    <div>
      <input
        type='text'
        value={amountMy}
        onChange={(e) => setAmountMy(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}

      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
        <option value='PLN'>PLN</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}

      >
        <option value='USD'>USD</option>
        <option value='EUR'>EUR</option>
        <option value='CAD'>CAD</option>
        <option value='INR'>INR</option>
        <option value='PLN'>PLN</option>
      </select>
      <p>Output: {output} on date {curDate}</p>
    </div>
  );
}

export default App;
