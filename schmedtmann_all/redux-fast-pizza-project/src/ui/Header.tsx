import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import User from '../features/user/User';

export default function Header() {
  return (
    <header className="text-[.8rem] flex items-center justify-between border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase sm:px-6 sm:py-5 sm:text-base">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>

      <SearchOrder />

      <User />
    </header>
  );
}
