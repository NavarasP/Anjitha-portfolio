import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import profileImage from '../assets/profile.png';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-navy text-center">
      {/* Profile Image */}
      <div className="w-32 h-32 mb-4">
        <img 
          src={profileImage} 
          alt="Anijtha Sivakumar" 
          className="rounded-full w-full h-full object-cover border-4 border-teal" 
        />
      </div>

      {/* Name and Title */}
      <h2 className="text-4xl font-bold text-accent mb-2">Anijtha Sivakumar</h2>
      <p className="text-xl text-primary mb-6">Aspiring AI Enthusiast</p>

      {/* About Description */}
      <p className="text-gray-200 leading-relaxed max-w-2xl mb-8">
        I am a passionate developer with a love for creating impactful digital solutions.
        With a strong foundation in web development and design, I bring ideas to life through
        code. My portfolio showcases a selection of my work in various technologies.
      </p>

      {/* Social Media Links */}
      <div className="flex space-x-6 mb-6">
        <a
          href="https://www.linkedin.com/in/anjitha-sivakumar-a1b2a4252/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-accent hover:text-secondary text-2xl transition-colors duration-300" />
        </a>
        <a
          href="https://github.com/anjit-ha"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-accent hover:text-secondary text-2xl transition-colors duration-300" />
        </a>
        <a
          href="https://www.instagram.com/anjitha5763/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-accent hover:text-secondary text-2xl transition-colors duration-300" />
        </a>
        <a href="mailto:anjithasivakumar2020@gmail.com">
          <FaEnvelope className="text-accent hover:text-secondary text-2xl transition-colors duration-300" />
        </a>
      </div>

      {/* View My CV Button */}
      {/* <a 
        href="https://example.com/my-cv.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-6 py-3 bg-teal text-navy font-semibold rounded-lg shadow-md hover:bg-secondary hover:text-white transition-colors duration-300"
      >
        View My CV
      </a> */}
    </div>
  );
};

export default About;
