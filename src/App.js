import React, { useState } from 'react';
import Nav from '../src/components/Nav';
import About from '../src/components/About';
import Resume from '../src/components/Resume';
import Contact from '../src/components/Contact';
import Portfolio from '../src/components/Portfolio';
import Hero from '../src/components/Hero';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    
    <div>
      <Hero></Hero>
      the current page is{currentPage}
      <Nav currentPage={currentPage} handleClick={handlePageChange}></Nav>
      <main>
      {renderPage()}
      </main>
    </div>
  );
}

export default App;