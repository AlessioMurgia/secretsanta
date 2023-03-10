import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Components/Home";
import Second from "./Components/Second";

function App() {
  return (
      <div>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/mail" element={<Second />} />
          </Routes>
      </div>
  );
}

export default App;
