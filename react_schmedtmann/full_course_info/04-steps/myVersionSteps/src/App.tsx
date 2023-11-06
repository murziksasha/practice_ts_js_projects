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
  
      if (newStep > messages.length) {
        return 1; // Wrap around to the first slide
      } else if (newStep < 1) {
        return messages.length; // Wrap around to the last slide
      }
  
      return newStep;
    });
   }

  return (
    <div className="steps">
      <Item step={step}/>

      <div className="buttons">
        <Button
          buttonStyle={buttonStyle}
          btnClassName='previous'
          handleClick={handleClick}
        >👈 Previous
        </Button>
        <Button
          buttonStyle={buttonStyle}
          btnClassName='next'
          handleClick={handleClick}
        >Next 👉
        </Button>
      </div>
    </div>
  );
}

interface IStepProps {
  step: number
}

function Item({step}: IStepProps) {
  return (
    <>
      <div className="numbers">
        <div className={`step-1 ${step === 1 ? 'active' : null}`}>1</div>
        <div className={`step-2 ${step === 2 ? 'active' : null}`}>2</div>
        <div className={`step-3 ${step === 3 ? 'active' : null}`}>3</div>
      </div>

      <p className="message">{messages[step - 1]}</p>
    </>
  )
}

interface IButtonProps {
  buttonStyle: {
    backgroundColor: string;
    color: string;
  };
  btnClassName: string;
  handleClick: (num: number) => void;
  children: any;
}

function Button({buttonStyle, btnClassName, handleClick, children}: IButtonProps) {
  const paramForHandleClick = (btnClassName: string) => {
    return btnClassName === 'next' ? 1 : -1;
  }

  return (
    <button 
      style={buttonStyle} 
      className={btnClassName}
      onClick={() => (handleClick(paramForHandleClick(btnClassName)))}
    >
      {children}
    </button>)
}

export default App;
