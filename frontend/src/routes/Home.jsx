// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import LoginSignup from '../components/LoginSignup';

function Home() {
  return (
    <div className="bg-gray-400"> {/* Add bg-gray-100 for light gray background */}
      <Hero />
      <LoginSignup />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
