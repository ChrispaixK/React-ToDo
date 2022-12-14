import React from 'react';
// for new react version instead of using ReactDom use createRoot
import { createRoot } from 'react-dom/client';
// import treact router
import { BrowserRouter as Router } from 'react-router-dom';
// import component main file
import TodoContainer from './functionBased/components/TodoContainer';
// import css
import './functionBased/App.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <TodoContainer />
    </Router>
  </React.StrictMode>,
);
