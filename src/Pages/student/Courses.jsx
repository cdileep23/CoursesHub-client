import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';
import Course from './Course';

const Courses = () => {
  const isLoading = false;
  
  return (
    <div className='bg-gray-50 dark:bg-gray-900 py-20 px-4'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='font-bold text-3xl md:text-4xl text-center mb-8 text-gray-900 dark:text-white'>
          Our Courses
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading 
            ? Array.from({length: 6}).map((_, i) => (
                <CourseSkeleton key={i} />
              )) 
            : Array.from({length: 6}).map((_, i) => (
                <Course key={i} />
              ))
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;

const CourseSkeleton = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
      <Skeleton className="w-full h-36 dark:bg-gray-700" />
      <div className="px-5 py-4 space-y-3">
        <Skeleton className="h-6 w-3/4 dark:bg-gray-700" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-6 w-6 rounded-full dark:bg-gray-700" />
            <Skeleton className="h-4 w-20 dark:bg-gray-700" />
          </div>
          <Skeleton className="h-4 w-16 dark:bg-gray-700" />
        </div>
        <Skeleton className="h-4 w-1/4 dark:bg-gray-700" />
      </div>
    </div>
  );
};