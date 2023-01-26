import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

export default function Recipes() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <h1 data-testid="page-title">
        {pathname === '/meals' ? 'Meals' : 'Drinks'}
      </h1>
      <Header />
    </div>
  );
}
