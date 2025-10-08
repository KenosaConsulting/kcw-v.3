
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center py-20">
      <h1 className="text-8xl font-extrabold text-accent-blue">404</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link to="/">Go back to Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
