import React, { useState } from 'react';

export default function DomNode({ node, onSelect, selectedNode, searchQuery }) {
  const [collapsed, setCollapsed] = useState(false);

  const hasChildren = node.children && node.children.length > 0;
  const isSelected = selectedNode?.id === node.id;
  const isMatch = searchQuery && (
    node.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.textContent?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.attributes?.id?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    node.attributes?.class?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const badgeColor = 
    node.type === 'element' ? 'bg-blue-600 text-white' :
    node.type === 'text' ? 'bg-amber-600 text-white' : 'bg-purple-600 text-white';

  return (
    <li>
      <div 
        onClick={(e) => { e.stopPropagation(); onSelect(node); }}
        className={`inline-block cursor-pointer p-2.5 rounded-lg border text-left min-w-[120px] transition-all ${
          isSelected 
            ? 'border-emerald-500 ring-2 ring-emerald-400 bg-emerald-50 dark:bg-emerald-950/30' 
            : isMatch
            ? 'border-yellow-500 ring-2 ring-yellow-400 bg-yellow-50 dark:bg-yellow-950/30'
            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:border-gray-400'
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${badgeColor}`}>
            {node.type === 'element' ? `<${node.name}>` : node.name}
          </span>
          {hasChildren && (
            <button
              onClick={(e) => { e.stopPropagation(); setCollapsed(!collapsed); }}
              className="text-[10px] w-4 h-4 flex items-center justify-center rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300"
            >
              {collapsed ? '+' : '−'}
            </button>
          )}
        </div>

        {node.attributes?.id && (
          <div className="text-[11px] text-blue-500 font-mono mt-1 truncate max-w-[140px]">
            #{node.attributes.id}
          </div>
        )}
        {node.attributes?.class && (
          <div className="text-[11px] text-gray-500 dark:text-gray-400 font-mono truncate max-w-[140px]">
            .{node.attributes.class.split(' ').join('.')}
          </div>
        )}
        {node.textContent && (
          <div className="text-[11px] text-gray-600 dark:text-gray-300 italic truncate max-w-[140px] mt-1">
            "{node.textContent}"
          </div>
        )}
      </div>

      {hasChildren && !collapsed && (
        <ul>
          {node.children.map((child) => (
            <DomNode
              key={child.id}
              node={child}
              onSelect={onSelect}
              selectedNode={selectedNode}
              searchQuery={searchQuery}
            />
          ))}
        </ul>
      )}
    </li>
  );
}