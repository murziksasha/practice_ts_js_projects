import { useState } from 'react';
import styles from './Navbar.module.scss';
import { ITempMovieData } from '../../Types/types-for-data';
import { Search } from '../Search';
import { Logo } from '../Logo';
import { NumResults } from '../NumResults';

interface NavbarProps {
  children: React.ReactNode;
 }

export const Navbar = ({children }: NavbarProps) => {

  return (
    <nav className="nav-bar">
      <Logo/>
      {children}
    </nav>
  );
}

