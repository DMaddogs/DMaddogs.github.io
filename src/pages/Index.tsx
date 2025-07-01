
import React from 'react';
import { ChevronRight, Sparkles, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const handleGameHosting = () => {
    navigate('/game-hosting');
  };

  const handleJoinGame = () => {
    navigate('/game-hosting');
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-row">
      {/* Section 1 - Career */}
      <div className="group flex-1 relative overflow-hidden transition-all duration-700 ease-out hover:flex-[2] bg-gradient-to-br from-purple-600 via-pink-600 to-red-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-90 group-hover:opacity-100">
              Career
            </h2>
            <p className="text-lg md:text-xl opacity-75 group-hover:opacity-90 transition-opacity duration-300">
              Professional journey
            </p>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <span>Explore</span>
                <ChevronRight className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Hobby */}
      <div className="group flex-1 relative overflow-hidden transition-all duration-700 ease-out hover:flex-[2] bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/10 animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[slide-in-right_1.5s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
            <Zap className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-90 group-hover:opacity-100">
              Hobby
            </h2>
            <p className="text-lg md:text-xl opacity-75 group-hover:opacity-90 transition-opacity duration-300">
              Gaming & Fun
            </p>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="flex flex-col items-center space-y-3">
                <Button 
                  onClick={handleGameHosting}
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                >
                  Host a Game
                </Button>
                <Button 
                  onClick={handleJoinGame}
                  variant="outline"
                  className="bg-transparent hover:bg-white/10 text-white border-white/50 hover:border-white"
                >
                  Join Game
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Personal */}
      <div className="group flex-1 relative overflow-hidden transition-all duration-700 ease-out hover:flex-[2] bg-gradient-to-br from-orange-500 via-red-500 to-pink-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-white/10 animate-pulse"></div>
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/40 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-500"></div>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
            <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-90 group-hover:opacity-100">
              Personal
            </h2>
            <p className="text-lg md:text-xl opacity-75 group-hover:opacity-90 transition-opacity duration-300">
              Life & Stories
            </p>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <span>Discover</span>
                <ChevronRight className="w-4 h-4 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
