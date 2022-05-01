import React, { useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Appbar from './Appbar';
import SearchPage from './SearchPage';

function App() {

  // state for the entire application
  const [searches, setSearches] = useState([]);
  const [visits, setVisits] = useState([]);

  function addSearch(search) {
    setSearches(history => [...history, search])
  }

  function addVisit(visit) {
    setVisits(history => [...history, visit])
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path='/'
            element={
              <>
                <Appbar />
                <SearchPage
                  searches={searches}
                  visits={visits}
                  addSearch={addSearch}
                  addVisit={addVisit}
                />
              </>
            }
          />
          <Route 
            path='*' 
            element={<Navigate to='/' />} 
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
