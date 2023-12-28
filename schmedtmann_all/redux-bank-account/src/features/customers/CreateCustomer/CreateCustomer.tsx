import { useState } from 'react';
import styles from './CreateCustomer.module.scss';
import { useDispatch } from 'react-redux';
import {createCustomer, updateName } from '../customerSlice';

interface CreateCustomerProps {}

export const CreateCustomer = ({}: CreateCustomerProps) => {
  const [fullNameLocal, setFullNameLocal] = useState('');
  const [nationalIdLocal, setNationalIdLocal] = useState('');

  const dispatch = useDispatch();

  function handleClick() {
    if (!fullNameLocal || !nationalIdLocal) return;
    dispatch(createCustomer({fullName: fullNameLocal, nationalID: nationalIdLocal}));
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className='inputs'>
        <div>
          <label>Customer full name</label>
          <input
            value={fullNameLocal}
            onChange={(e) => setFullNameLocal(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalIdLocal}
            onChange={(e) => setNationalIdLocal(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
};
