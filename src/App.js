import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from "./components/home";
import SearchResults from "./components/SearchResults";
function App() {


  return (
    <div>
      <Home />
      {/* <Route path='/resultados' element={<SearchResults />} /> */}


    </div>
  );
}

export default App;
