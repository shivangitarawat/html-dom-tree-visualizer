import React from 'react';
import DomNode from './DomNode';

export default function DomTree({ tree, onSelect, selectedNode, searchQuery }) {
  if (!tree) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400 text-sm">
        Enter valid HTML in the input panel to visualize the tree.
      </div>
    );
  }

  return (
    <div className="h-full overflow-auto p-12 flex justify-center items-start">
      <div className="tree">
        <ul>
          <DomNode
            node={tree}
            onSelect={onSelect}
            selectedNode={selectedNode}
            searchQuery={searchQuery}
          />
        </ul>
      </div>
    </div>
  );
}