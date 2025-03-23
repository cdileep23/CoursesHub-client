import React from 'react';
import Course from './Course';

const MyLearning = () => {
  const courses = [1, 23];
  const isLoading = false;

  return (
    <div className="max-w-5xl mx-auto my-10 px-4 md:px-0 min-h-screen pb-10">
      <h1 className="font-bold text-3xl mb-6 border-b pb-2 dark:border-gray-800">My Learning</h1>
      
      <div className="my-8">
        {isLoading ? (
          <MyLearningSkeleton />
        ) : courses.length === 0 ? (
          <EmptyState />
        ) : (
          <CourseGrid courses={courses} />
        )}
      </div>
    </div>
  );
};

export default MyLearning;

const EmptyState = () => (
  <div className="text-center py-12 bg-gray-100 dark:bg-gray-900 rounded-lg">
    <svg 
      className="mx-auto h-12 w-12 text-gray-500 dark:text-gray-600" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
      />
    </svg>
    <h3 className="mt-2 text-lg font-medium text-black dark:text-white">No courses found</h3>
    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">You are not enrolled in any courses yet.</p>
    <div className="mt-6">
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-black"
      >
        Browse Courses
      </button>
    </div>
  </div>
);

const CourseGrid = ({ courses }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {courses.map((course, index) => (
      <Course key={index}/>
    ))}
  </div>
);

const MyLearningSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="rounded-lg overflow-hidden shadow-md">
        <div className="bg-gray-300 dark:bg-gray-800 h-32 animate-pulse"></div>
        <div className="bg-white dark:bg-gray-900 p-4">
          <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded animate-pulse mb-2"></div>
          <div className="h-3 bg-gray-100 dark:bg-gray-800 rounded animate-pulse w-2/3"></div>
        </div>
      </div>
    ))}
  </div>
);