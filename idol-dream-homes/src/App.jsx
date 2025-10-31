import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import DelayedFallback from './Components/Common/DelayedFallback.jsx';
import AmbientCursorGlow from './Components/Common/AmbientCursorGlow.jsx';
import PageTransition from './Components/Common/PageTransition.jsx';
import RouteChangeLoader from './Components/Common/RouteChangeLoader.jsx';

// Keep Home eager for faster first paint
import Home from './Pages/Home.jsx';

// Lazy-load heavier pages for better navigation UX
const About = lazy(() => import('./Pages/About.jsx'));
const Projects = lazy(() => import('./Pages/Projects.jsx'));
const Contact = lazy(() => import('./Pages/Contact.jsx'));
const IdolRidim = lazy(() => import('./Pages/IdolRidim.jsx'));

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

function RoutesWithTransitions() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/projects/idol-ridrim" element={<PageTransition><IdolRidim /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AmbientCursorGlow />
      <div className="app">
        <main className="main-content">
          {/* Use route-change overlay for all navigations; keep Suspense fallback very light */}
          <RouteChangeLoader />
          <Suspense fallback={null}> 
            <RoutesWithTransitions />
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;
