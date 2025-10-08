
import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { useToast } from '../hooks/useToast';

const KbiLabsPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Thank you!',
        description: 'You have been added to our mailing list.',
      });
      setEmail('');
    } else {
        toast({
            title: 'Error',
            description: 'Please enter a valid email address.',
            variant: 'destructive',
        });
    }
  };

  return (
    <div className="text-center flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue-light to-white">
        KBI Labs
      </h1>
      <p className="text-2xl md:text-3xl font-bold text-muted-foreground mb-4">Coming Soon</p>
      <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-8">
        We are working on something exciting. KBI Labs will feature our latest research, proprietary tools, and forward-thinking analysis.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md flex space-x-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow bg-navy-light border border-navy-light rounded-md p-2 text-foreground focus:ring-accent-blue focus:border-accent-blue"
          placeholder="Enter your email"
        />
        <Button type="submit">Notify Me</Button>
      </form>
    </div>
  );
};

export default KbiLabsPage;
