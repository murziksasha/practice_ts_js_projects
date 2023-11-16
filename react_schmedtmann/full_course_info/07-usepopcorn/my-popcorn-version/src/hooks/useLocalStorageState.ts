import { useEffect, useState } from "react";


type StateType<T> = T | (() => T);

export function useLocalStorageState<T>(initialState: StateType<T>, key: string) {

  const [value, setValue] = useState<T>(() => {
    const watchedInLocalStore = localStorage.getItem(key);
    return watchedInLocalStore ? JSON.parse(watchedInLocalStore) : initialState instanceof Function ? initialState() : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
