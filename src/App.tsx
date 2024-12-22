import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Editor from './components/review/Editor';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Editor />} />
      </Routes>
    </Router>
  );
};

export default App;
