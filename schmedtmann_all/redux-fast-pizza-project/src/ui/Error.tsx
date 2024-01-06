import { ReactNode } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

interface ErrorProps {
  children?: ReactNode;
}

interface CustomError {
  message?: string;
  data?: any;
}

function Error({ children }: ErrorProps) {
  const navigate = useNavigate();
  const error = useRouteError() as CustomError;
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
      {children}
    </div>
  );
}

export default Error;