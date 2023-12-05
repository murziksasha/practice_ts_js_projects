
import React from 'react'
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

export default function ButtonBack() {
  const navigate = useNavigate();

  return (
    <Button type='back' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      navigate(-1);
    }}>&larr; Back
  </Button>
  )
}
