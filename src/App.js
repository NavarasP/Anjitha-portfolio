import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-navy text-gray-200 min-h-screen font-sans">
      {/* Header Section */}
      <Header />
      
      {/* Main Content */}
      <main className="p-6">
        {/* About Section */}
        <section id="about" className="py-12">
          <About />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-12">
          <Projects />
        </section>
        
        {/* Contact Section */}
        {/* <section id="contact" className="py-12">
          <Contact />
        </section> */}
      </main>
      
      {/* Footer */}
      <footer className="text-center p-4 bg-teal text-white">
        © 2024 Anijtha Sivakumar | Aspiring AI Enthusiast
      </footer>
    </div>
  );
}

export default App;
