// Add a declaration for gtag to the window object to satisfy TypeScript
declare global {
    interface Window {
      gtag?: (command: string, action: string, params: object) => void;
    }
  }
  
  export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    // Google Analytics 4 implementation
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
      console.log(`Analytics Event: ${category} - ${action} - ${label}`);
    } else {
        console.log(`Analytics Event (no-gtag): ${category} - ${action} - ${label}`);
    }
  };