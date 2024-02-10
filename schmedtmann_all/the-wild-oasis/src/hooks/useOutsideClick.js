import { useEffect, useRef } from "react";


function useOutsideClick(closeModalFunc, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleClick = e => {
      if(ref.current && !ref.current.contains(e.target)) {
        console.log('click out of modal window')
        closeModalFunc();
      }
    };
  
      document.addEventListener('click', handleClick, listenCapturing);
  
      return () => document.removeEventListener('click', handleClick, listenCapturing);
  }, [closeModalFunc, listenCapturing])

  return ref;

}

export default useOutsideClick
