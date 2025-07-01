
import React from 'react';
import { ChevronRight, Sparkles, Zap, Heart } from 'lucide-react';

const Index = () => {
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Section 1 - Creative */}
      <div className="group flex-1 relative overflow-hidden transition-all duration-700 ease-out hover:flex-[2] bg-gradient-to-br from-purple-600 via-pink-600 to-red-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 group-hover:animate-[slide-in-right_2s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
            <Sparkles className="w-16 h-16 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-90 group-hover:opacity-100">
              Creative
            </h2>
            <p className="text-lg md:text-xl opacity-75 group-hover:opacity-90 transition-opacity duration-300">
              Unleash your imagination
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

      {/* Section 2 - Innovation */}
      <div className="group flex-1 relative overflow-hidden transition-all duration-700 ease-out hover:flex-[2] bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.3"%3E%3Cpath d="M20 20l-8-8h16l-8 8zm8-8v16l-8-8 8-8z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[slide-in-right_1.5s_ease-in-out_infinite]"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center p-8">
          <div className="text-center text-white transform transition-all duration-500 group-hover:scale-110">
            <Zap className="w-16 h-16 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4 opacity-90 group-hover:opacity-100">
              Innovation
            </h2>
            <p className="text-lg md:text-xl opacity-75 group-hover:opacity-90 transition-opacity duration-300">
              Shape the future
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

      {/* Section 3 - Passion */}
      <div className="group flex-1 relative overflow-hidden transition-all duration-700 ease-out hover:flex-[2] bg-gradient-to-br from-orange-500 via-red-500 to-pink-500">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.3"%3E%3Cpath d="M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20c0-11.046 8.954-20 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
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
              Passion
            </h2>
            <p className="text-lg md:text-xl opacity-75 group-hover:opacity-90 transition-opacity duration-300">
              Follow your heart
            </p>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <span>Feel</span>
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
