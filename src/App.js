

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HubSpot from './components/HubSpot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/page/:slug" element={<HubSpot />} />
      </Routes>
    </Router>
  );
}

export default App;

