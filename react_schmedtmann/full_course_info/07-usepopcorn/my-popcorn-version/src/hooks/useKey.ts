import { useEffect } from "react";

type ActionCallback = (e: KeyboardEvent) => void;

export function useKey(key: string, action: ActionCallback) {

  useEffect(() => {
    function onKeyPressEscClose(e: KeyboardEvent) {
      if (e.key.toLowerCase === key.toLowerCase) {
        action(e);
      }
      console.log(e.key);
    }
  
    document.addEventListener('keydown', onKeyPressEscClose as EventListener);
  
    return function () {
      document.removeEventListener('keydown', onKeyPressEscClose as EventListener);
    };
  }, [action, key]);
}