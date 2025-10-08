import React, { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider, Outlet, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ClientsPage from './pages/ClientsPage';
import AboutPage from './pages/AboutPage';
import PricingPage from './pages/PricingPage';

import ContactPage from './pages/ContactPage';
import IntakePage from './pages/IntakePage';
import NotFoundPage from './pages/NotFoundPage';
import { ToastProvider } from './hooks/useToast';
import ErrorPage from './pages/ErrorPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import AnalyticsDashboard from './pages/AnalyticsDashboard';

// Animated outlet component for page transitions
const AnimatedOutlet: React.FC = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 400);
    }
  }, [location, displayLocation]);

  return (
    <div className="page-transition-wrapper">
      <style jsx>{`
        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pageExit {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        
        .page-enter {
          animation: pageEnter 0.4s ease-in-out forwards;
        }
        
        .page-exit {
          animation: pageExit 0.4s ease-in-out forwards;
        }
        
        .page-transition-wrapper {
          position: relative;
          width: 100%;
          overflow: visible; /* Changed from hidden to visible */
          min-height: 100vh; /* Ensure full height */
        }
      `}</style>
      <div 
        className={isTransitioning ? 'page-exit' : 'page-enter'}
        key={displayLocation.pathname}
      >
        <Outlet />
      </div>
    </div>
  );
};

// Layout wrapper with animated outlet
const LayoutWithTransitions: React.FC = () => {
  return <Layout />;
};

// A root component to provide context to all routes
const Root: React.FC = () => {
  return (
    <ToastProvider>
      <Outlet />
    </ToastProvider>
  );
};

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LayoutWithTransitions />,
        children: [
          { 
            element: <AnimatedOutlet />,
            children: [
              { index: true, element: <HomePage /> },
              { path: 'services', element: <ServicesPage /> },
              { path: 'services/:serviceId', element: <ServiceDetailPage /> },
              { path: 'case-studies', element: <CaseStudiesPage /> },
              { path: 'case-studies/:caseStudyId', element: <CaseStudyDetailPage /> },
              { path: 'clients', element: <ClientsPage /> },
              { path: 'about', element: <AboutPage /> },
              { path: 'pricing', element: <PricingPage /> },
              { path: 'contact', element: <ContactPage /> },
              { path: 'intake', element: <IntakePage /> },
              { path: 'analytics', element: <AnalyticsDashboard /> },
              { path: '*', element: <NotFoundPage /> },
            ]
          }
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;