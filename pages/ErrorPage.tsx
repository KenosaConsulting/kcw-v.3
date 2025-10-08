import React from 'react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  let status = 500;
  let statusText = 'An unexpected error occurred.';
  let message = 'Sorry, something went wrong.';

  if (isRouteErrorResponse(error)) {
    status = error.status;
    statusText = error.statusText;
    if (error.status === 404) {
      message = "Sorry, the page you are looking for does not exist.";
    } else {
      message = error.data?.message || 'An error occurred while loading this page.';
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy-deep text-foreground text-center p-4">
      <h1 className="text-8xl font-extrabold text-accent-blue">{status}</h1>
      <h2 className="text-3xl font-bold mt-4 mb-2">{statusText}</h2>
      <p className="text-muted-foreground mb-6 max-w-md">{message}</p>
      <Button asChild>
        <a href="/">Go back to Home</a>
      </Button>
    </div>
  );
};

export default ErrorPage;
