import React, { useEffect, useState } from 'react';
import './App.css';

interface IButtonStyle {
  backgroundColor: string;
  color: string;
}

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  const buttonStyle: IButtonStyle = {
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
    
  }, [step]);




  return (
    <div className="steps">
      <div className="numbers">
        <div className="step-1 active">1</div>
        <div className="step-2">2</div>
        <div className="step-3">3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>

      <div className="buttons">
        <Button buttonStyle={buttonStyle}
          onHandleClick={handleClick}
          text={'someText'}
        />
        <button 
        style={buttonStyle} 
        className="next"
        onClick={() => handleClick(1)}
        >Next</button>
      </div>
    </div>
  );
}

interface IButtonProps {
  buttonStyle: IButtonStyle;
  onHandleClick: () => void;
  text: string;
}

function Button({buttonStyle, onHandleClick, text}: IButtonProps) {

  console.log(buttonStyle);

  return <button onClick={onHandleClick}>
    <p className={buttonStyle.color}>{text}</p>
  </button>
}

export default App;
