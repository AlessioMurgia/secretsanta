import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Components/Home";
import ExtractionPage from "./Components/ExtractionPage";

function App() {
  return (
      <div>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/extraction" element={<ExtractionPage />} />
          </Routes>
      </div>
  );
}

export default App;
