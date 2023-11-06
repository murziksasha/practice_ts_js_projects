import React, { useState } from 'react';
import './App.scss';
import { Bill } from './components/Bill';
import { LikeService } from './components/LikeService';
import { Receipt } from './components/Receipt';
import { ResetButton } from './components/ResetButton';

function App() {

  const [bill, setBill] = useState(100);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  function handleResetAll() {
    setBill(0);
    setTip1(0);
    setTip2(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} setValueBill={setBill}>
        <h2>How much was the bill?</h2>
      </Bill>
      <LikeService tip={tip1} setValueTip={setTip1}>
        <h2>How did like the service?</h2>
      </LikeService>
      <LikeService tip={tip2} setValueTip={setTip2}>
        <h2>How did your friend like the service?</h2>
      </LikeService>
      {bill > 0 && (
        <Receipt bill={bill} tip={Math.round(bill * ((tip1 + tip2)/2)/100)}/>
      )}
      <ResetButton setValueBill={handleResetAll}/>
    </div>
  );
}

export default App;
