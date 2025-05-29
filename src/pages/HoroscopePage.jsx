import React, { useState, useEffect } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import ZodiacSelector from '../components/Horoscope/ZodiacSelector';
import HoroscopeCard from '../components/Horoscope/HoroscopeCard';
import { getDailyHoroscope } from '../services/astroService';

const HoroscopePage = () => {
  const [selectedSign, setSelectedSign] = useState('');
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(false);

  // Check URL for sign parameter on initial load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const signParam = urlParams.get('sign');
    if (signParam) {
      setSelectedSign(signParam);
    }
  }, []);

  // Fetch horoscope when sign changes
  useEffect(() => {
    if (selectedSign) {
      fetchHoroscope(selectedSign);
      
      // Update URL with selected sign
      const url = new URL(window.location);
      url.searchParams.set('sign', selectedSign);
      window.history.pushState({}, '', url);
    }
  }, [selectedSign]);

  const fetchHoroscope = async (sign) => {
    setLoading(true);
    try {
      const data = await getDailyHoroscope(sign);
      setHoroscope(data);
    } catch (error) {
      console.error('Error fetching horoscope:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <section className="mb-8 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">
          Daily Horoscope
        </h1>
        <p className="text-indigo-600 dark:text-indigo-400">
          Discover what the stars have aligned for you today
        </p>
      </section>

      <section className="mb-8">
        <h2 className="font-serif text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-4 text-center">
          Select Your Zodiac Sign
        </h2>
        <ZodiacSelector 
          compact={true} 
          selectedSign={selectedSign}
          onSelect={setSelectedSign} 
        />
      </section>

      <section>
        {!selectedSign ? (
          <div className="bg-white/30 dark:bg-indigo-900/30 backdrop-blur-sm rounded-xl p-8 text-center shadow-lg">
            <Calendar className="mx-auto mb-4 text-indigo-600 dark:text-indigo-400\" size={48} />
            <h3 className="font-serif text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">
              Choose Your Sign Above
            </h3>
            <p className="text-indigo-600 dark:text-indigo-400">
              Select your zodiac sign to see your daily horoscope and cosmic guidance.
            </p>
          </div>
        ) : loading ? (
          <div className="flex justify-center py-12">
            <div className="loader"></div>
          </div>
        ) : horoscope ? (
          <HoroscopeCard horoscope={horoscope} />
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

export default HoroscopePage;