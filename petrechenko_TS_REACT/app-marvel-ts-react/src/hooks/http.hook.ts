
import {useState, useCallback} from 'react';


export interface IUseHttp {
  loading: boolean;
  error: null | string;
  request: (url: string, method?: string, body?: string | null, headers?: {
    'Content-Type': string;
  }) => Promise<any>;
  clearError: () => void;
}

export function useHttp() {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const request = useCallback(async (
    url: string,
    method: string = 'GET',
    body: string | null = null,
    headers = { 'Content-Type': 'application/json'}
  ) => {
    setLoading(true);
    try{
      const response = await fetch(url, {method, body, headers});
      if(!response.ok) throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      const data = await response.json();
      setLoading(false);
      return data;
    }catch(e){
      setLoading(false);
      if(e instanceof Error) setError(e.message);
      throw e;
    }

  }, []);

  const clearError = useCallback(() => setError(null), []);

  return {loading, request, error, clearError};

}