import React from 'react';

const NATCHATHIRA_STARS = [
  { id: 'ashwini', name: 'Ashwini', symbol: '✧' },
  { id: 'bharani', name: 'Bharani', symbol: '✧' },
  { id: 'krittika', name: 'Krittika', symbol: '✧' },
  { id: 'rohini', name: 'Rohini', symbol: '✧' },
  { id: 'mrigashirsha', name: 'Mrigashirsha', symbol: '✧' },
  { id: 'ardra', name: 'Ardra', symbol: '✧' },
  { id: 'punarvasu', name: 'Punarvasu', symbol: '✧' },
  { id: 'pushya', name: 'Pushya', symbol: '✧' },
  { id: 'ashlesha', name: 'Ashlesha', symbol: '✧' },
  { id: 'magha', name: 'Magha', symbol: '✧' },
  { id: 'purva_phalguni', name: 'Purva Phalguni', symbol: '✧' },
  { id: 'uttara_phalguni', name: 'Uttara Phalguni', symbol: '✧' },
  { id: 'hasta', name: 'Hasta', symbol: '✧' },
  { id: 'chitra', name: 'Chitra', symbol: '✧' },
  { id: 'swati', name: 'Swati', symbol: '✧' },
  { id: 'vishakha', name: 'Vishakha', symbol: '✧' },
  { id: 'anuradha', name: 'Anuradha', symbol: '✧' },
  { id: 'jyeshtha', name: 'Jyeshtha', symbol: '✧' },
  { id: 'mula', name: 'Mula', symbol: '✧' },
  { id: 'purva_ashadha', name: 'Purva Ashadha', symbol: '✧' },
  { id: 'uttara_ashadha', name: 'Uttara Ashadha', symbol: '✧' },
  { id: 'shravana', name: 'Shravana', symbol: '✧' },
  { id: 'dhanishta', name: 'Dhanishta', symbol: '✧' },
  { id: 'shatabhisha', name: 'Shatabhisha', symbol: '✧' },
  { id: 'purva_bhadrapada', name: 'Purva Bhadrapada', symbol: '✧' },
  { id: 'uttara_bhadrapada', name: 'Uttara Bhadrapada', symbol: '✧' },
  { id: 'revati', name: 'Revati', symbol: '✧' }
];

const StarSelector = ({ selectedStar = '', onSelect }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {NATCHATHIRA_STARS.map((star) => (
        <button
          key={star.id}
          className={`flex items-center p-3 rounded-xl transition-all ${
            selectedStar === star.id
              ? 'bg-indigo-600 text-white scale-105 shadow-lg'
              : 'bg-white/40 dark:bg-indigo-900/40 backdrop-blur-sm text-indigo-800 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/60 shadow'
          }`}
          onClick={() => onSelect(star.id)}
        >
          <div className={`text-xl mr-2 ${selectedStar === star.id ? 'text-amber-300' : 'text-amber-500 dark:text-amber-400'}`}>
            {star.symbol}
          </div>
          <div className="font-medium">{star.name}</div>
        </button>
      ))}
    </div>
  );
};

export default StarSelector;