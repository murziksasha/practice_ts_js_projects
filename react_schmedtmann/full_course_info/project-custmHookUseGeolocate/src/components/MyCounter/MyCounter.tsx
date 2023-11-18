import { useEffect, useState } from 'react';
import styles from './MyCounter.module.scss';

interface MyCounterProps { }

export const MyCounter = ({ }: MyCounterProps) => {
  const [counter, setCounter] = useState<number>(0);
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    console.log('render', counter);
    document.title=  `this is ${counter}  clicks`;
    setStep(prev => (prev - 1) + 1);

  }, [counter, setStep]);

  function handleClickCounter() {
    setCounter((counter) => counter + step);
  }

  function handleResetStep() {
    setStep(1);
  }

  function handleSetStep(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target;
    if (!isNaN(Number(target.value))) {
      setStep(Number(target.value));
    }
  }

  return (
    <div className={styles.MyCounter}>
      <div>Clicked: {counter}</div>
      <button onClick={handleClickCounter}>Click</button>
      <br />
      <input type="number" name='step' value={step} onChange={handleSetStep} />
      <button onClick={handleResetStep}>RESET step</button>
    </div>
  );
}
