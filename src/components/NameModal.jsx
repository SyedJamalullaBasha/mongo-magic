import React, { useState } from 'react';
import { ChefHat, User, Sparkles, Heart, Star } from 'lucide-react';

const NameModal = ({ isOpen, onClose, onSave }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    
    if (!trimmedName) {
      setError('Please enter your name to continue');
      return;
    }
    
    if (trimmedName.length < 2) {
      setError('Name must be at least 2 characters long');
      return;
    }
    
    if (trimmedName.length > 20) {
      setError('Name must be less than 20 characters');
      return;
    }
    
    onSave(trimmedName);
    setName('');
    setError('');
  };

  const handleClose = () => {
    setName('');
    setError('');
    onClose();
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    setError('');
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 animate-bounce delay-100">
          <Star className="h-6 w-6 text-yellow-400 opacity-60 animate-pulse" />
        </div>
        <div className="absolute top-20 right-20 animate-bounce delay-300">
          <Heart className="h-5 w-5 text-pink-400 opacity-60 animate-pulse" />
        </div>
        <div className="absolute bottom-32 left-16 animate-bounce delay-500">
          <Sparkles className="h-7 w-7 text-purple-400 opacity-60 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-16 animate-bounce delay-700">
          <Star className="h-4 w-4 text-blue-400 opacity-60 animate-pulse" />
        </div>
        <div className="absolute top-1/2 left-8 animate-bounce delay-1000">
          <Heart className="h-6 w-6 text-red-400 opacity-60 animate-pulse" />
        </div>
        <div className="absolute top-1/3 right-8 animate-bounce delay-1200">
          <Sparkles className="h-5 w-5 text-green-400 opacity-60 animate-pulse" />
        </div>
        
        {/* Rainbow floating circles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400 opacity-30 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-blue-400 opacity-30 rounded-full animate-ping delay-1000"></div>
        <div className="absolute top-1/2 left-1/6 w-2 h-2 bg-green-400 opacity-30 rounded-full animate-ping delay-1500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-5 h-5 bg-purple-400 opacity-30 rounded-full animate-ping delay-2000"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all animate-slideUp hover:scale-105 relative overflow-hidden">
        {/* Rainbow border animation */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 via-purple-400 to-pink-400 opacity-0 hover:opacity-20 transition-opacity duration-500 animate-pulse"></div>
        
        <div className="text-center mb-6 relative z-10">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 p-3 rounded-full transform hover:rotate-12 transition-transform duration-300 hover:scale-110 relative">
              <ChefHat className="h-8 w-8 text-orange-500 animate-bounce" />
              {/* Sparkle effects around chef hat */}
              <div className="absolute -top-1 -right-1 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="h-4 w-4 text-yellow-400 animate-spin" />
              </div>
              <div className="absolute -bottom-1 -left-1 opacity-0 hover:opacity-100 transition-opacity duration-300 delay-150">
                <Star className="h-3 w-3 text-pink-400 animate-pulse" />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-2 animate-pulse hover:scale-105 transition-transform duration-300 cursor-default">
            Welcome to Mongo Magic Kitchen!
          </h2>
          <p className="text-gray-600 hover:text-purple-600 transition-colors duration-300 cursor-default">
            What should we call our new chef? ✨
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
          <div>
            <label className="block text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 hover:scale-105 transition-transform duration-200 cursor-default">
              Your Chef Name 👨‍🍳
            </label>
            <div className="relative group">
              <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-all duration-300 ${
                isTyping ? 'text-rainbow animate-bounce' : 'text-gray-400 group-hover:text-purple-500'
              }`} />
              <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter your magical name ✨"
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-4 focus:ring-purple-300 focus:border-transparent outline-none transition-all duration-300 transform hover:scale-102 ${
                  error ? 'border-red-500 bg-red-50' : 
                  isTyping ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50' :
                  'border-gray-300 hover:border-purple-400 focus:bg-gradient-to-r focus:from-blue-50 focus:to-purple-50'
                }`}
                maxLength="20"
                autoFocus
              />
              {/* Animated typing indicator */}
              {isTyping && (
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-1 h-1 bg-pink-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              )}
            </div>
            {error && (
              <p className="text-red-500 text-sm mt-2 animate-shake flex items-center gap-1">
                <Heart className="h-4 w-4 animate-pulse" />
                {error}
              </p>
            )}
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-all duration-300 transform hover:scale-102">
            <h3 className="font-semibold bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-purple-500 animate-spin" />
              Quick Tips:
            </h3>
            <ul className="text-sm space-y-1">
              <li className="text-orange-600 hover:text-purple-600 transition-colors duration-200 cursor-default transform hover:translate-x-2 hover:scale-105 flex items-center gap-2">
                <Star className="h-3 w-3 animate-pulse" />
                Your progress will be saved automatically
              </li>
              <li className="text-pink-600 hover:text-purple-600 transition-colors duration-200 cursor-default transform hover:translate-x-2 hover:scale-105 delay-75 flex items-center gap-2">
                <Heart className="h-3 w-3 animate-pulse" />
                You can change your name anytime during the game
              </li>
              <li className="text-purple-600 hover:text-orange-600 transition-colors duration-200 cursor-default transform hover:translate-x-2 hover:scale-105 delay-150 flex items-center gap-2">
                <Sparkles className="h-3 w-3 animate-pulse" />
                Have fun learning MongoDB queries!
              </li>
            </ul>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-purple-400 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 animate-pulse"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Cooking! 
                <span className="animate-bounce">🍳</span>
                <Sparkles className="h-4 w-4 animate-spin" />
              </span>
            </button>
          </div>
        </form>
        
        {/* Floating hearts when typing */}
        {name.length > 0 && (
          <div className="absolute top-4 right-4 pointer-events-none">
            <Heart className="h-6 w-6 text-pink-400 animate-bounce opacity-60" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NameModal;