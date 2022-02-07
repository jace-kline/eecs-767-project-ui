import React, { useState } from 'react';
import { Stack, Typography } from '@mui/material';
import './App.css';
import Appbar from './Appbar';
import Searchbar from './Searchbar';
import SearchResultCard from './SearchResultCard';

  // for testing purposes
  const results = [
    { title: "Google", snapshot: "This is google.com", url: "www.google.com" },
    { title: "Bing", snapshot: "This is bing.com", url: "www.bing.com" },
    { title: "Yahoo", snapshot: "This is yahoo.com", url: "www.yahoo.com" }
  ]

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);
  const [visitHistory, setVisitHistory] = useState([]);

  return (
    <div className="App">
      <Appbar />
      <div>
        <Searchbar 
          searchHistory={searchHistory}
          onSearch={() => {}}
        />
      </div>
      <Stack
        alignItems='center'
        >
        {/* {results.map(result => {
          <SearchResultCard
            searchTerm={searchTerm}
            // onVisit={visitRecord => {}}
            title={result.title}
            snapshot={result.snapshot}
            url={result.url}
          />
        })} */}
        <SearchResultCard
          searchTerm={searchTerm}
          title={'Google'}
          snapshot={'This is google.com'}
          url={'www.google.com'}
        />
      </Stack>
    </div>
  );
}

export default App;
