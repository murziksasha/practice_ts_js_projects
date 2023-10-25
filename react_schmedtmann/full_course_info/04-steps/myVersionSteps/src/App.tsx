import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';


const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const buttonStyle = {
  backgroundColor: '#7950f2',
  color: '#fff'
  }

  const handleClick = (num: number): void => {
    setStep((step) => {
      const newStep = step + num;
  
      if (newStep >= messages.length) {
        return 1; // Wrap around to the first slide
      } else if (newStep < 1) {
        return messages.length - 1; // Wrap around to the last slide
      }
  
      return newStep;
    });
   }

  useEffect(() => {
    console.log(step);
  }, [step])




  return (
    <div className="steps">
      <div className="numbers">
        <div className="step-1 active">1</div>
        <div className="step-2">2</div>
        <div className="step-3">3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>

      <div className="buttons">
        <button 
        style={buttonStyle} 
        className="previous"
        onClick={() => handleClick(-1)}
        >Previous</button>
        <button 
        style={buttonStyle} 
        className="next"
        onClick={() => handleClick(1)}
        >Next</button>
      </div>
    </div>
  );
}

export default App;
