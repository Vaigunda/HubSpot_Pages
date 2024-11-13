// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HubSpotPage from './components/HubSpotPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Dynamic route for HubSpot pages */}
//         <Route path="/page/:slug" element={<HubSpotPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HubSpotPage from './components/Hai';
import HubSpot from './components/HubSpot';
// import HubSpotPage from './components/HubSpotPage';

function App() {
  return (
    // <div className="App">
    //   <HubSpotPage />
    // </div>

    <Router>
      <Routes>
        {/* Dynamic route for HubSpot pages */}
        {/* <Route path="/page/:slug" element={<HubSpotPage />} /> */}
        <Route path="/page/:slug" element={<HubSpot />} />
      </Routes>
    </Router>
  );
}

export default App;

