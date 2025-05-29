import React from 'react';
import { Star, Heart, Briefcase, Sparkles, Activity, Clock, DollarSign } from 'lucide-react';

const NatchathiraPalan = ({ palan }) => {
  const { star, date, generalPrediction, categories } = palan;
  
  // Format star name
  const formattedStar = star
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  return (
    <div className="bg-white/40 dark:bg-indigo-900/40 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-2xl md:text-3xl font-bold">{formattedStar}</h2>
          <Star className="text-amber-300 fill-amber-300" size={32} />
        </div>
        <p className="text-indigo-100 mt-1">{date}</p>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="font-serif text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">
            Today's Prediction
          </h3>
          <p className="text-indigo-700 dark:text-indigo-300 leading-relaxed">
            {generalPrediction}
          </p>
        </div>
        
        <div className="space-y-4">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  const icons = {
    'Love': <Heart className="text-rose-500" />,
    'Career': <Briefcase className="text-amber-500" />,
    'Health': <Activity className="text-emerald-500" />,
    'Finance': <DollarSign className="text-green-500" />,
    'Travel': <Clock className="text-blue-500" />
  };
  
  const icon = icons[category.name] || <Sparkles className="text-indigo-500" />;
  
  return (
    <div className="bg-white/60 dark:bg-indigo-800/60 backdrop-blur-sm rounded-lg p-4 shadow">
      <div className="flex items-center mb-2">
        {icon}
        <h4 className="font-serif font-bold text-indigo-800 dark:text-indigo-200 ml-2">
          {category.name}
        </h4>
      </div>
      <p className="text-indigo-700 dark:text-indigo-300">
        {category.prediction}
      </p>
      
      <div className="mt-3 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg p-2">
        <div className="flex items-center">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${category.rating}%` }}
            ></div>
          </div>
          <span className="ml-2 text-sm font-medium text-indigo-700 dark:text-indigo-300">
            {category.rating}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default NatchathiraPalan;