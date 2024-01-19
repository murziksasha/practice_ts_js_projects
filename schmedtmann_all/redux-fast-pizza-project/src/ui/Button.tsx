import React from 'react';
import { Link } from 'react-router-dom';

interface IPropsButton {
  children: React.ReactNode;
  disabled?: boolean;
  to?: string;
  type: 'small' | 'primary' | 'secondary' | 'round';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
}

export default function Button({
  disabled,
  to,
  type,
  onClick,
  children,
}: IPropsButton) {
  let clazz =
    'focus:focus-ring rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:inline-block focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-slate-400 disabled:cursor-not-allowed disabled:bg-slate-600';
  switch (type) {
    case 'small': {
      clazz += ' px-4 py-2 md:px-5 md:py-2.5 text-xs';
      break;
    }
    case 'primary': {
      clazz += ' px-4 py-3 md:px-6 md:py-4';
      break;
    }
    case 'secondary': {
      clazz += ' bg-slate-300 text-gray-600 px-4 py-3 md:px-6 md:py-4';
      break;
    }
    case 'round': {
      clazz += ' px-2.5 py-1 md:px-3.5 md:py-2 text-sm';
      break;
    }
    default:
      clazz;
  }
  if (to) {
    return (
      <Link className={`${clazz} bg-slate-600 text-white`} to={to}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={clazz}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={clazz}>
      {children}
    </button>
  );
}
