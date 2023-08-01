import React from 'react';
import Tree from './components/Tree';
import './style.css'; // Import the custom CSS file (if using separate CSS)

const data = {
  id: 1,
  name: 'Parent Node',
  description: 'This is the parent node',
  children: [
    {
      id: 2,
      name: 'Child 1',
      description: 'This is child node 1',
      children: [
        {
          id: 5,
          name: 'Child 1.1',
          description: 'This is child node 1.1',
        },
        {
          id: 6,
          name: 'Child 1.2',
          description: 'This is child node 1.2',
        },
      ],
    },
    {
      id: 3,
      name: 'Child 2',
      description: 'This is child node 2',
    },
    {
      id: 4,
      name: 'Child 3',
      description: 'This is child node 3',
    },
  ],
};

const App = () => {
  return (
    <div className="container">
      <h1>Tree using React Bootstrap Cards</h1>
      <Tree node={data} />
    </div>
  );
};

export default App;