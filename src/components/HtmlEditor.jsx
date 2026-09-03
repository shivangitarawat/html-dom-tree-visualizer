import React from 'react';

const SAMPLE_HTML = `<div class="container" id="main">
  <h1>Welcome</h1>
  <!-- User Section -->
  <p class="desc">Hello World!</p>
  <button id="btn-submit">Submit</button>
</div>`;

export default function HtmlEditor({ value, onChange }) {
  return (
    <div className="flex flex-col h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-gray-50 dark:bg-gray-950">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">HTML Input</span>
        <div className="flex gap-2">
          <button
            onClick={() => onChange(SAMPLE_HTML)}
            className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-gray-700 dark:text-gray-300"
          >
            Sample
          </button>
          <button
            onClick={() => onChange('')}
            className="text-xs px-2 py-1 bg-red-100 dark:bg-red-950/40 text-red-600 rounded hover:bg-red-200"
          >
            Clear
          </button>
        </div>
      </div>
      <textarea
        className="w-full flex-1 p-4 font-mono text-sm bg-transparent outline-none resize-none text-gray-800 dark:text-gray-200"
        placeholder="Paste your raw HTML here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}