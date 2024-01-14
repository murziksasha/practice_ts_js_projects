

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

interface IPropsLinkButton {
  to: string;
  children: React.ReactNode;
}

export default function LinkButton({to, children}: IPropsLinkButton) {
  const navigate = useNavigate();
  const clazz = `text-sm text-blue-500 hover:text-blue-600 hover:underline`;
  if(to === '-1'){
    return <button className={clazz} onClick={() => navigate(-1)}>{children}</button>
  }
  return (
    <Link to={to} className={clazz}>{children}</Link>
  )
}
