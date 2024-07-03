import React from 'react';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import LoginSignup from '../components/LoginSignup';

function Home() {
  return (
    <div className="bg-gray-800"> 
      <Hero />
      <LoginSignup />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default Home;
