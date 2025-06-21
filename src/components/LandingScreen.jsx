import React from 'react';
import { ChefHat, Play, Sparkles, Utensils, Coffee } from 'lucide-react';

const LandingScreen = ({ onStartGame }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce delay-100">
          <Utensils className="h-8 w-8 text-white opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce delay-300">
          <Coffee className="h-6 w-6 text-white opacity-20" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-500">
          <Sparkles className="h-10 w-10 text-white opacity-20" />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce delay-700">
          <ChefHat className="h-7 w-7 text-white opacity-20" />
        </div>
        
        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white opacity-10 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-white opacity-10 rounded-full animate-ping delay-1500"></div>
        <div className="absolute top-1/2 left-1/6 w-3 h-3 bg-white opacity-10 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition-all duration-300 hover:shadow-3xl relative z-10">
        <div className="mb-6">
          <div className="relative inline-block">
            <ChefHat className="mx-auto h-16 w-16 text-orange-500 mb-4 animate-pulse hover:animate-spin transition-all duration-300 cursor-pointer" />
            <div className="absolute -top-2 -right-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Sparkles className="h-6 w-6 text-yellow-400 animate-bounce" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2 hover:text-orange-600 transition-colors duration-300 cursor-default">
            MongoDB Query
          </h1>
          <h2 className="text-2xl font-bold text-orange-600 mb-4 animate-pulse">
            Restaurant Game
          </h2>
          <p className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
            Learn MongoDB queries by managing Mario's Restaurant menu!
          </p>
        </div>
        
        <div className="mb-6 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-102">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
            How to Play:
          </h3>
          <ul className="text-sm text-gray-600 text-left space-y-1">
            <li className="hover:text-orange-600 transition-colors duration-200 cursor-default transform hover:translate-x-1">
              • Write MongoDB queries to solve restaurant challenges
            </li>
            <li className="hover:text-orange-600 transition-colors duration-200 cursor-default transform hover:translate-x-1 delay-75">
              • Complete levels to unlock new challenges
            </li>
            <li className="hover:text-orange-600 transition-colors duration-200 cursor-default transform hover:translate-x-1 delay-150">
              • Build streaks for bonus points
            </li>
            <li className="hover:text-orange-600 transition-colors duration-200 cursor-default transform hover:translate-x-1 delay-225">
              • Use hints if you get stuck
            </li>
          </ul>
        </div>
        
        <button
          onClick={onStartGame}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer transform hover:scale-105 hover:shadow-lg active:scale-95 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Play className="h-5 w-5 group-hover:animate-pulse relative z-10" />
          <span className="relative z-10">Start Cooking with Queries!</span>
          <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
            <Sparkles className="h-4 w-4 text-yellow-200 animate-bounce" />
          </div>
        </button>
        
        {/* Subtle glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 opacity-0 hover:opacity-10 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default LandingScreen;