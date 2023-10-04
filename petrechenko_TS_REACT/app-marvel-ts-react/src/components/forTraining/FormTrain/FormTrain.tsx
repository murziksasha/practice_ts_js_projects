import {ChangeEvent, useEffect, useRef, useState} from 'react';

function useInputWithValidate(initialValue: any) {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    return {value, onchange};
  };
}


export function FormTrain() {

  let color: string = '';
  const [text, setText] = useState('');
  const [redColor, setRedColor] = useState<string>('');
  const [textArea, setTextArea] = useState<string>('');

  const validateInput = (text: string): boolean => (text.search(/\d/) >= 0);

  const myRef = useRef<HTMLInputElement | null>(null);

  const focusFirstTI = () => {
    if(myRef.current) myRef.current.focus();
  }

  color = validateInput(text) ? 'red' : 'black';
  useEffect(() => {
    setRedColor(color);
    setTextArea(color);
  }, [color])

  

  return (
    <>
    <h3>Train Hooks </h3>
    <br /><br /><br /><br /><br /><br />
    <form >
      <div>
        <input type="text" value={`${text} / ${textArea}`} className='form-control' readOnly 
        />
        <label htmlFor="exampleFromControlInput1">Email Address</label>
        <input 
        // ref={myRef} 
        id="exampleFromControlInput1" type="email" placeholder="name@example.com" 
        onChange={(e) => setText(e.target.value)}
        style={{color: `${redColor}`}}
        />
      </div>
      <div>
        <label htmlFor="exampleFormControlTextrea1">Example textarea</label>
        <textarea 
        // onClick={focusFirstTI} 
        onChange={(e) => setTextArea(e.target.value)}
        id="exampleFormControlTextrea1" ></textarea>
      </div>
    </form>
    </>
  )
}