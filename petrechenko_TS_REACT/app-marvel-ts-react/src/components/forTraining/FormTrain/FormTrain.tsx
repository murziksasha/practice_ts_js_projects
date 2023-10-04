import {ChangeEvent, useEffect, useRef, useState} from 'react';





function useInputWithValidate(initialValue: any) {
  const [value, setValue] = useState(initialValue);

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(event.target.value);
    return {value, onchange};
  };

  const validateInput = () => {
    return value.search(/\d/) >= 0;
  }

  return {value, onChange, validateInput}
}


export function FormTrain() {

  const input = useInputWithValidate('');
  const textArea = useInputWithValidate('');
  const [rndNumber, setRndNumber] = useState<number>(0);

  const color = input.validateInput() ? 'red' : 'black';

  const myRef = useRef<HTMLInputElement | null>(null);

  const focusFirstTI = () => {
    if(myRef.current) myRef.current.focus();
  }

    useEffect(() => {
      console.log(`effect number`)
    fetch('https://www.random.org/integers/?num=1&min=-50&max=50&col=1&base=10&format=plain&rnd=new')
      .then((res) => res.json())
      .then((data) => {
        setRndNumber(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  

  return (
    <>
    <h3>Train Hooks </h3>
    <br /><br /><br />
    <h2>{`${rndNumber}`}</h2>
    <br /><br /><br />
    <form >
      <div>
        <input type="text" value={`${input.value} / ${textArea.value}`} className='form-control' readOnly 
        />
        <label htmlFor="exampleFromControlInput1">Email Address</label>
        <input 
        // ref={myRef} 
        id="exampleFromControlInput1" type="email" placeholder="name@example.com" 
        onChange={input.onChange}
        value={input.value}
        style={{color: `${color}`}}
        />
      </div>
      <div>
        <label htmlFor="exampleFormControlTextrea1">Example textarea</label>
        <textarea 
        // onClick={focusFirstTI} 
        onChange={textArea.onChange}
        id="exampleFormControlTextrea1" 
        value={textArea.value}></textarea>
      </div>
    </form>
    </>
  )
}