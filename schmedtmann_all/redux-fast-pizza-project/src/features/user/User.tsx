import React from 'react';
import { useSelector } from 'react-redux';
import { IInitialState } from './userSlice';

export default function User() {
  const userName = useSelector((state: any) => state.user.userName)
  if(!userName) return null;
  return <div className="hidden text-sm font-semibold md:block">{userName}</div>;
}
