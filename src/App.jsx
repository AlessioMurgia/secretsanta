import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Components/Home";
import ExtractionPage from "./Components/ExtractionPage";
import EndPage from "./Components/EndPage";

function App() {
  return (
      <div>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/extraction" element={<ExtractionPage />} />
              <Route exact path="/thanks" element={<EndPage />} />
          </Routes>
      </div>
  );
}

export default App;
