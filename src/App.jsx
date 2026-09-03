import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import HtmlEditor from './components/HtmlEditor';
import DomTree from './components/DomTree';
import NodeDetails from './components/NodeDetails';
import { parseHTMLToTree, calculateStats } from './utils/domParser';

const DEFAULT_CODE = `<div class="wrapper">
  <h1>Tree Visualizer</h1>
  <ul class="nav">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</div>`;

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [htmlCode, setHtmlCode] = useState(DEFAULT_CODE);
  const [selectedNode, setSelectedNode] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const parsedTree = useMemo(() => {
    try {
      return parseHTMLToTree(htmlCode);
    } catch {
      return null;
    }
  }, [htmlCode]);

  const stats = useMemo(() => calculateStats(parsedTree), [parsedTree]);

  return (
    <div className={`${darkMode ? 'dark' : ''} h-screen flex flex-col`}>
      <div className="flex flex-col h-full bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <div className="h-10 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-6 flex items-center justify-between text-xs">
          <input
            type="text"
            placeholder="Search tags, classes, id, text..."
            className="w-72 px-3 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded outline-none focus:border-blue-500 text-gray-800 dark:text-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="text-gray-400">Pure React & Tailwind Tree Render</span>
        </div>

        <div className="flex-1 grid grid-cols-12 overflow-hidden">
          <div className="col-span-3 h-full">
            <HtmlEditor value={htmlCode} onChange={setHtmlCode} />
          </div>
          <div className="col-span-6 h-full bg-gray-50 dark:bg-black/20 overflow-hidden">
            <DomTree
              tree={parsedTree}
              onSelect={setSelectedNode}
              selectedNode={selectedNode}
              searchQuery={searchQuery}
            />
          </div>
          <div className="col-span-3 h-full">
            <NodeDetails node={selectedNode} stats={stats} />
          </div>
        </div>
      </div>
    </div>
  );
}