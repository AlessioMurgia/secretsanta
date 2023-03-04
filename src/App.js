import React from "react";
import { Routes, Route } from 'react-router-dom';

import Page from "./Components/Page";
import Second from "./Components/Second";


function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Page />} />
              <Route path="mail" element={<Second />} />
          </Routes>
      </div>
  );
}

export default App;
