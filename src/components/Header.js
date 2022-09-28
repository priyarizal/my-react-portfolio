import React from 'react';
import Nav from './Nav';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="header">
        <span id="siteTitle">Priyadarshini Rizal</span>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  );
}

export default Header;
