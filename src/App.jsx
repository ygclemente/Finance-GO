import { useState } from 'react';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage onNavigate={setCurrentPage} />
      )}
      {currentPage === 'login' && (
        <Login
          onLogin={() => setCurrentPage('dashboard')}
          onBack={() => setCurrentPage('landing')}
        />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard onLogout={() => setCurrentPage('landing')} />
      )}
    </>
  );
}