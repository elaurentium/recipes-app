import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Profile() {
  return (
    <div>
      <h1 data-testid="page-title">
        Profile
      </h1>
      <Header />
      <Footer />
    </div>
  );
}
