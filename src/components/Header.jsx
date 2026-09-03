import React from 'react';

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="h-14 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
        <h1 className="font-bold text-gray-900 dark:text-white tracking-wide">HTML to DOM Tree Converter</h1>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-3 py-1 text-xs font-semibold rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </header>
  );
}