import React from 'react';

export default function NodeDetails({ node, stats }) {
  return (
    <aside className="h-full bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 p-4 overflow-y-auto">
      <div className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Tree Statistics</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">Elements: <span className="font-bold">{stats.elements}</span></div>
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">Text Nodes: <span className="font-bold">{stats.textNodes}</span></div>
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">Comments: <span className="font-bold">{stats.comments}</span></div>
          <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-gray-700 dark:text-gray-300">Max Depth: <span className="font-bold">{stats.maxDepth}</span></div>
        </div>
      </div>

      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Selected Node</h3>
        {node ? (
          <div className="space-y-3 text-xs">
            <div>
              <span className="text-gray-400">Type:</span>
              <p className="font-semibold text-gray-800 dark:text-gray-200 capitalize">{node.type}</p>
            </div>
            <div>
              <span className="text-gray-400">Tag / Name:</span>
              <p className="font-mono text-blue-500 font-semibold">{node.name}</p>
            </div>
            <div>
              <span className="text-gray-400">Depth:</span>
              <p className="font-mono text-gray-700 dark:text-gray-300">{node.depth}</p>
            </div>
            <div>
              <span className="text-gray-400">Attributes:</span>
              <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded mt-1 font-mono text-[11px] overflow-x-auto text-gray-700 dark:text-gray-300">
                {Object.keys(node.attributes || {}).length > 0 ? (
                  Object.entries(node.attributes).map(([k, v]) => (
                    <div key={k}><span className="text-purple-400">{k}</span>="{v}"</div>
                  ))
                ) : (
                  <span className="text-gray-400 italic">None</span>
                )}
              </div>
            </div>
            {node.textContent && (
              <div>
                <span className="text-gray-400">Content:</span>
                <p className="bg-gray-50 dark:bg-gray-800 p-2 rounded mt-1 font-mono break-all text-gray-700 dark:text-gray-300">{node.textContent}</p>
              </div>
            )}
          </div>
        ) : (
          <p className="text-xs text-gray-400 italic">Click on any node in the tree to inspect details.</p>
        )}
      </div>
    </aside>
  );
}