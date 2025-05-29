import React from 'react';
import { Calendar, Heart, Briefcase, Star, Sparkles, Moon } from 'lucide-react';

const HoroscopeCard = ({ horoscope }) => {
  const { sign, date, prediction, love, career, health, luckyNumber, luckyColor, compatibility } = horoscope;
  
  // Capitalize first letter of sign
  const formattedSign = sign.charAt(0).toUpperCase() + sign.slice(1);
  
  return (
    <div className="bg-white/40 dark:bg-indigo-900/40 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">{formattedSign}</h2>
          <div className="text-4xl">{getZodiacSymbol(sign)}</div>
        </div>
        <div className="flex items-center mt-2 text-indigo-100">
          <Calendar size={16} className="mr-2" />
          <span>{date}</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">
            Today's Prediction
          </h3>
          <p className="text-indigo-700 dark:text-indigo-300 leading-relaxed">
            {prediction}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <PredictionCategory 
            icon={<Heart className="text-rose-500" />}
            title="Love"
            prediction={love}
          />
          <PredictionCategory 
            icon={<Briefcase className="text-amber-500" />}
            title="Career"
            prediction={career}
          />
          <PredictionCategory 
            icon={<Sparkles className="text-emerald-500" />}
            title="Health"
            prediction={health}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <LuckyStat 
            icon={<Star className="text-amber-500" />}
            title="Lucky Number"
            value={luckyNumber}
          />
          <LuckyStat 
            icon={<Sparkles className="text-indigo-500" />}
            title="Lucky Color"
            value={luckyColor}
            isColor={true}
          />
          <LuckyStat 
            icon={<Moon className="text-purple-500" />}
            title="Compatible With"
            value={compatibility}
          />
        </div>
      </div>
    </div>
  );
};

const PredictionCategory = ({ icon, title, prediction }) => {
  return (
    <div className="bg-white/60 dark:bg-indigo-800/60 backdrop-blur-sm rounded-lg p-4 shadow">
      <div className="flex items-center mb-2">
        {icon}
        <h4 className="font-serif font-bold text-indigo-800 dark:text-indigo-200 ml-2">
          {title}
        </h4>
      </div>
      <p className="text-sm text-indigo-700 dark:text-indigo-300">
        {prediction}
      </p>
    </div>
  );
};

const LuckyStat = ({ icon, title, value, isColor = false }) => {
  let colorStyle = {};
  if (isColor) {
    const colorMap = {
      'Red': 'bg-red-500',
      'Blue': 'bg-blue-500',
      'Green': 'bg-green-500',
      'Yellow': 'bg-yellow-500',
      'Purple': 'bg-purple-500',
      'Orange': 'bg-orange-500',
      'Pink': 'bg-pink-500',
      'Gold': 'bg-amber-500',
      'Silver': 'bg-gray-300',
    };
    
    const colorClass = colorMap[value] || 'bg-gray-300';
    colorStyle = { colorIndicator: colorClass };
  }
  
  return (
    <div className="flex items-center bg-white/60 dark:bg-indigo-800/60 backdrop-blur-sm rounded-lg p-4 shadow">
      {icon}
      <div className="ml-3">
        <p className="text-xs text-indigo-600 dark:text-indigo-400">{title}</p>
        <div className="flex items-center">
          {isColor && (
            <div className={`w-3 h-3 rounded-full mr-2 ${colorStyle.colorIndicator}`}></div>
          )}
          <p className="font-medium text-indigo-800 dark:text-indigo-200">{value}</p>
        </div>
      </div>
    </div>
  );
};

// Helper function to get zodiac symbol
const getZodiacSymbol = (sign) => {
  const symbols = {
    'aries': '♈︎',
    'taurus': '♉︎',
    'gemini': '♊︎',
    'cancer': '♋︎',
    'leo': '♌︎',
    'virgo': '♍︎',
    'libra': '♎︎',
    'scorpio': '♏︎',
    'sagittarius': '♐︎',
    'capricorn': '♑︎',
    'aquarius': '♒︎',
    'pisces': '♓︎'
  };
  
  return symbols[sign.toLowerCase()] || '';
};

export default HoroscopeCard;