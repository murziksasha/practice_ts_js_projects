import { ReactNode } from 'react';
import {useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

interface ErrorProps {
  children?: ReactNode;
}

interface CustomError {
  message?: string;
  data?: any;
}

function Error({ children }: ErrorProps) {
  const error = useRouteError() as CustomError;
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message}</p>
      <LinkButton to='-1'>&larr; Go back</LinkButton>
      
      {children}
    </div>
  );
}

export default Error;