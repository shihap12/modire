import React, { useState, useEffect, useCallback } from 'react';
import CaptchaVerification from './components/CaptchaVerification';
import LogoAnimation from './components/LogoAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SystemCards from './components/SystemCards';
import Feedback from './components/Feedback';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

// Logo animation timeline timing:
// Ring (0.9s) + Dot (0.7s - 0.2s overlap) + Slash (0.5s - 0.3s overlap) + Hold (0.4s) = ~2.0s
// Reveal main page at 1500ms so Navbar target is mounted and rendered before logo movement starts
const LOGO_REVEAL_DELAY = 1500;

function getAppRoute() {
  if (typeof window === 'undefined') return 'main';
  const p = window.location.pathname.toLowerCase().replace(/\/+$/, '');
  const h = window.location.hash.toLowerCase();
  if (p === '/admin' || h === '#/admin' || h === '#admin') return 'admin';
  if (p === '/login' || h === '#/login' || h === '#login') return 'login';
  return 'main';
}

function App() {
  const [currentRoute, setCurrentRoute] = useState(getAppRoute);
  const [appState, setAppState] = useState('captcha');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [logoDocked, setLogoDocked] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(getAppRoute());
    };
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const handleLogoComplete = useCallback(() => {
    setLogoDocked(true);
    setAppState('main');
  }, []);

  // When logo animation starts, schedule main page reveal so navbar target is ready
  useEffect(() => {
    if (appState === 'logo') {
      const timer = setTimeout(() => {
        setShowMain(true);
      }, LOGO_REVEAL_DELAY);
      return () => clearTimeout(timer);
    }
    if (appState === 'main') {
      setShowMain(true);
      setLogoDocked(true);
    }
  }, [appState]);

  if (currentRoute === 'admin') {
    return (
      <AdminDashboard
        onNavigateHome={() => {
          window.history.pushState(null, '', '/');
          setCurrentRoute('main');
        }}
        onLogout={() => {
          window.history.pushState(null, '', '/login');
          setCurrentRoute('login');
        }}
      />
    );
  }

  if (currentRoute === 'login') {
    return (
      <Login 
        onNavigateHome={() => {
          window.history.pushState(null, '', '/');
          setCurrentRoute('main');
        }} 
        onLoginSuccess={() => {
          window.history.pushState(null, '', '/admin');
          setCurrentRoute('admin');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen font-sans text-slate-900 overflow-x-hidden" style={{ backgroundColor: 'var(--bg-main)' }}>

      {appState === 'captcha' && (
        <CaptchaVerification onVerified={() => setAppState('logo')} />
      )}

      {appState === 'logo' && (
        <LogoAnimation onComplete={handleLogoComplete} isExiting={showMain} />
      )}

      {/* Hero and Navbar fade in; logo docks smoothly into Navbar target */}
      {(showMain || appState === 'main') && (
        <div
          className={`relative transition-opacity duration-700 ${showMain ? 'opacity-100' : 'opacity-0'}`}
        >
          <Navbar showLogo={appState === 'main' || logoDocked} onOpenChat={() => setIsChatOpen(true)} />
          <Hero onOpenChat={() => setIsChatOpen(true)} />
          <SystemCards onOpenChat={() => setIsChatOpen(true)} />
          <AboutUs />
          <Feedback />
          <Footer />
          <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />
        </div>
      )}

    </div>
  );
}

export default App;
