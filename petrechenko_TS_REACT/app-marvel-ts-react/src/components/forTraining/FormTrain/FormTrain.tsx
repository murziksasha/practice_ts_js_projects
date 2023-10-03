import {useRef, useState} from 'react';

export function FormTrain() {

  const [text, setText] = useState('');

  const myRef = useRef<HTMLInputElement | null>(null);

  const focusFirstTI = () => {
    if(myRef.current) myRef.current.focus();
  }

  return (
    <>
    <h3>Train Hooks </h3>
    <br /><br /><br /><br /><br /><br />
    <form >
      <div>
        <label htmlFor="exampleFromControlInput1">Email Address</label>
        <input ref={myRef} id="exampleFromControlInput1" type="email" placeholder="name@example.com" />
      </div>
      <div>
        <label htmlFor="exampleFormControlTextrea1">Example textarea</label>
        <textarea onClick={focusFirstTI} id="exampleFormControlTextrea1" ></textarea>
      </div>
    </form>
    </>
  )
}