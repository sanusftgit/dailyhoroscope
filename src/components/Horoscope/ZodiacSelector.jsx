import React from 'react';

const ZODIAC_SIGNS = [
  { id: 'aries', name: 'Aries', dates: 'Mar 21 - Apr 19', symbol: '♈︎' },
  { id: 'taurus', name: 'Taurus', dates: 'Apr 20 - May 20', symbol: '♉︎' },
  { id: 'gemini', name: 'Gemini', dates: 'May 21 - Jun 20', symbol: '♊︎' },
  { id: 'cancer', name: 'Cancer', dates: 'Jun 21 - Jul 22', symbol: '♋︎' },
  { id: 'leo', name: 'Leo', dates: 'Jul 23 - Aug 22', symbol: '♌︎' },
  { id: 'virgo', name: 'Virgo', dates: 'Aug 23 - Sep 22', symbol: '♍︎' },
  { id: 'libra', name: 'Libra', dates: 'Sep 23 - Oct 22', symbol: '♎︎' },
  { id: 'scorpio', name: 'Scorpio', dates: 'Oct 23 - Nov 21', symbol: '♏︎' },
  { id: 'sagittarius', name: 'Sagittarius', dates: 'Nov 22 - Dec 21', symbol: '♐︎' },
  { id: 'capricorn', name: 'Capricorn', dates: 'Dec 22 - Jan 19', symbol: '♑︎' },
  { id: 'aquarius', name: 'Aquarius', dates: 'Jan 20 - Feb 18', symbol: '♒︎' },
  { id: 'pisces', name: 'Pisces', dates: 'Feb 19 - Mar 20', symbol: '♓︎' }
];

const ZodiacSelector = ({ compact = false, selectedSign = '', onSelect }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 ${compact ? 'lg:grid-cols-6' : 'lg:grid-cols-4'} gap-3 md:gap-4`}>
      {ZODIAC_SIGNS.map((sign) => (
        <button
          key={sign.id}
          className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all ${
            selectedSign === sign.id
              ? 'bg-indigo-600 text-white scale-105 shadow-lg'
              : 'bg-white/40 dark:bg-indigo-900/40 backdrop-blur-sm text-indigo-800 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-800/60 shadow'
          }`}
          onClick={() => onSelect(sign.id)}
        >
          <div className={`text-4xl mb-1 ${selectedSign === sign.id ? 'text-amber-300' : 'text-amber-500 dark:text-amber-400'}`}>
            {sign.symbol}
          </div>
          <div className="font-medium">{sign.name}</div>
          {!compact && (
            <div className="text-xs mt-1 opacity-80">{sign.dates}</div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ZodiacSelector;