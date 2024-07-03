import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Admin from './routes/Admin';
import BankVault from './routes/BankVault';
import Credentials from './components/credentials/Credentials';
import Media from './components/Media/Media';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/bankvault" element={<BankVault />} />
              <Route path="/credentials" element={<Credentials />} />
              <Route path="/media" element={<Media />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
