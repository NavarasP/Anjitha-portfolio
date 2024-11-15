import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-navy text-white">
      {/* Logo or Title */}
      <h1 className="text-3xl font-bold text-accent">Anijtha Sivakumar</h1>
      
      {/* Navigation Menu */}
      <nav className="flex space-x-4">
        <a href="#about" className="text-primary hover:text-secondary transition-colors duration-300">
          About
        </a>
        <a href="#projects" className="text-primary hover:text-secondary transition-colors duration-300">
          Projects
        </a>
        {/* <a href="#contact" className="text-primary hover:text-secondary transition-colors duration-300">
          Contact
        </a> */}
      </nav>
    </header>
  );
};

export default Header;
