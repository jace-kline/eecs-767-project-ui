import React, { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './App.css';
import Searchbar from './Searchbar';
import SearchResultCard from './SearchResultCard';

  // for testing purposes
  const results = [
    { path: "/path/file1.txt", fname: "file1.txt", score: 0.6 },
    { path: "/path/file2.txt", fname: "file2.txt", score: 0.4 },
    { path: "/path/file3.txt", fname: "file3.txt", score: 0.2 }
  ]

function SearchPage(props) {

    const { searchHistory, addSearch, visitHistory, addVisit } = props;

    // current search term
    const [searchTerm, setSearchTerm] = useState("");

    return (
      <Box sx={{ width: '100%' }}>
        <Stack alignItems='center' spacing={1} >
            <Searchbar 
                searchHistory={searchHistory}
                onSearch={() => {}}
            />
            {results.map((result, i) =>
                <SearchResultCard
                    onClick={() => {}}
                    path={result.path}
                    fname={result.fname}
                    rank={i + 1}
                    score={result.score}
                />
            )}
        </Stack>
      </Box>
    )
}

export default SearchPage;