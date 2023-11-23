
// @flow 
import * as React from 'react';
type Props = {
  children: React.ReactNode;
};
export const Main = ({children}: Props) => {
  return (
    <main className='main'>
      {children}
    </main>
    );
};