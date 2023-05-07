import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Aboutme from './pages/Aboutme';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import '../styles/cards.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Aboutme');

  const renderPage = () => {
    if (currentPage === 'Aboutme') {
      return <Aboutme />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="body-container">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div id="main-body">
          {renderPage()}
        <Footer />
      </div>
    </div>
  );
}
