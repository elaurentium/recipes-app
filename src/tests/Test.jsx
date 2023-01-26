import React from 'react';
import ApiContext from '../Context/ApiContext';
import SearchBar from '../components/SearchBar';

export default function Test() {
  return (
    <ApiContext>
      <SearchBar />
    </ApiContext>
  );
}
