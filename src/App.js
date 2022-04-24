import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import './App.css';
import Appbar from './Appbar';
import SearchPage from './SearchPage';

function App() {

  // state for the entire application
  const [searchHistory, setSearchHistory] = useState([]);
  const [visitHistory, setVisitHistory] = useState([]);

  function addSearch(search) {
    setSearchHistory(history => history.push(search))
  }

  function addVisit(visit) {
    setVisitHistory(history => history.push(visit))
  }

  return (
    <div className="App">
      <Appbar />
      <SearchPage
            searchHistory={searchHistory}
            addSearch={addSearch}
            visitHistory={visitHistory}
            addVisit={addVisit}
      />
    </div>
  );
}

export default App;
