# HTML to DOM Tree Visualizer

An interactive developer tool built with React, Vite, and Tailwind CSS that converts raw HTML markup into a visual, hierarchical DOM tree diagram in real time.

---

## Preview

![HTML to DOM Tree Visualizer Output](./public/screenshot.png)

---

## Features

- **Live HTML Parsing:** Uses the browser's native `DOMParser` API to convert HTML directly into a recursive data model without external tree engines.
- **Tree Visualization:** Hierarchical node layout styled using pure CSS branching connectors.
- **Interactive Tree Controls:** Expand and collapse nested tree branches with single-click actions.
- **Node Inspector:** Click any element, text, or comment node to inspect attributes, classes, depth, and tag types.
- **Search & Highlighting:** Locate elements, classes, IDs, or text nodes instantly via query matching.
- **Live Statistics:** Displays counts of elements, text nodes, comments, and maximum tree depth.
- **Theme Switcher:** Seamless toggle between dark and light themes.

---

## Tech Stack

- **Framework:** [React 18 / 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or later) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/shivangitarawat/html-dom-tree-visualizer.git](https://github.com/shivangitarawat/html-dom-tree-visualizer.git)
   cd html-dom-tree-visualizer