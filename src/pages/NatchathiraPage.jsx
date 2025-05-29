import React, { useState, useEffect } from 'react';
import { Star, Calendar } from 'lucide-react';
import StarSelector from '../components/Natchathira/StarSelector';
import NatchathiraPalan from '../components/Natchathira/NatchathiraPalan';
import { getNatchathiraPalan } from '../services/astroService';

const NatchathiraPage = () => {
  const [selectedStar, setSelectedStar] = useState('');
  const [palan, setPalan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  // Format current date
  useEffect(() => {
    const date = new Date();
    setCurrentDate(date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }));
  }, []);

  // Check URL for star parameter on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const starParam = urlParams.get('star');
    if (starParam) {
      setSelectedStar(starParam);
    }
  }, []);

  // Fetch palan when star changes
  useEffect(() => {
    if (selectedStar) {
      fetchNatchathiraPalan(selectedStar);
      
      // Update URL with selected star
      const url = new URL(window.location);
      url.searchParams.set('star', selectedStar);
      window.history.pushState({}, '', url);
    }
  }, [selectedStar]);

  const fetchNatchathiraPalan = async (star) => {
    setLoading(true);
    try {
      const data = await getNatchathiraPalan(star);
      setPalan(data);
    } catch (error) {
      console.error('Error fetching Natchathira palan:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-8 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">
          Natchathira Palan
        </h1>
        <p className="text-indigo-600 dark:text-indigo-400">
          Explore your star-based predictions for {currentDate}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
          Select Your Birth Star
        </h2>
        <StarSelector 
          selectedStar={selectedStar}
          onSelect={setSelectedStar} 
        />
      </section>

      <section>
        {!selectedStar ? (
          <div className="bg-white/30 dark:bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg">
            <Star className="mx-auto mb-4 text-amber-500\" size={48} />
            <h3 className="font-serif text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">
              Choose Your Birth Star Above
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400">
              Select your Natchathira (birth star) to see your personalized cosmic predictions.
            </p>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-12">
            <div className="loader"></div>
          </div>
        ) : palan ? (
          <NatchathiraPalan palan={palan} />
        ) : null}
      </section>

      <style jsx>{`
        .loader {
          border: 4px solid rgba(107, 114, 128, 0.3);
          border-radius: 50%;
          border-top: 4px solid #8b5cf6;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default NatchathiraPage;