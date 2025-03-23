import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className='relative bg-gradient-to-r py-16 from-blue-500 to-indigo-600 dark:from-gray-900 dark:to-indigo-950 py-16 md:py-24 px-4 text-center'>
      {/* Decorative elements with dark mode adjustments */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-full opacity-10 dark:opacity-5">
          <svg viewBox="0 0 1208 1024" className="w-full h-full">
            <circle cx="400" cy="300" r="400" fill="white" />
            <circle cx="800" cy="600" r="300" fill="white" />
          </svg>
        </div>
      </div>
      
      {/* Content container */}
      <div className='relative max-w-4xl mx-auto py-20
      '>
        {/* Main heading with dark mode text glow */}
        <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight dark:text-blue-50 dark:drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]'>
          Find Your Perfect Course
        </h1>
        
        {/* Subheading with enhanced dark mode colors */}
        <p className='text-blue-100 dark:text-blue-200 text-lg sm:text-xl mb-8 max-w-2xl mx-auto'>
          Discover a new way of learning with expert-led courses for every skill level
        </p>
        
        {/* Search form with improved dark mode styling */}
        <form onSubmit={(e) => e.preventDefault()} className="max-w-2xl mx-auto mb-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Input 
                type='text' 
                placeholder="What do you want to learn today?" 
                className='w-full h-12 pl-4 pr-10 rounded-lg border-none shadow-md text-base 
                           focus-visible:ring-2 focus-visible:ring-blue-300 
                           dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400
                           dark:focus-visible:ring-blue-500 dark:shadow-lg dark:shadow-gray-900/30'
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
            </div>
            <Button 
              type="submit" 
              className="h-12 px-6 font-medium bg-indigo-700 hover:bg-indigo-800 text-white
                        dark:bg-blue-600 dark:hover:bg-blue-700 dark:shadow-lg dark:shadow-blue-900/30"
            >
              Search
            </Button>
          </div>
        </form>
        
        {/* Stats with enhanced dark mode */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white mt-8">
          <div className="p-3 rounded-lg bg-white/10 dark:bg-blue-950/30 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-bold dark:text-blue-100">1,000+</p>
            <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200">Courses</p>
          </div>
          <div className="p-3 rounded-lg bg-white/10 dark:bg-blue-950/30 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-bold dark:text-blue-100">50+</p>
            <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200">Categories</p>
          </div>
          <div className="p-3 rounded-lg bg-white/10 dark:bg-blue-950/30 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-bold dark:text-blue-100">300K+</p>
            <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200">Students</p>
          </div>
          <div className="p-3 rounded-lg bg-white/10 dark:bg-blue-950/30 backdrop-blur-sm">
            <p className="text-2xl sm:text-3xl font-bold dark:text-blue-100">100%</p>
            <p className="text-sm sm:text-base text-blue-100 dark:text-blue-200">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;