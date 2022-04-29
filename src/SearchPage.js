import React, { useMemo, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './App.css';
import Searchbar from './Searchbar';
import SearchResultCard from './SearchResultCard';
import useAsync from './hooks/useAsync';
import api from './requests/mock-api';
// import { useNavigate } from 'react-router-dom';

function SearchPage(props) {

    const { searches, addSearch, visits, addVisit } = props;

    // function used to navigate to other pages
    // navigate = useNavigate();

    // last submitted search term
    const [search, setSearch] = useState(null);

    // paths marked "relevant"
    const [relevant, setRelevant] = useState(null);

    // results list - fetched asynchronously
    const results = useAsync(
      () => api.search(search, 20, relevant),
      [ search, relevant ]
    );
    // const results = { data: null };

    // when a search is submitted
    const onSearch = s => {
      // add search to search history
      addSearch(s);
      // set last search
      setSearch(s);
      // fetch the ranked results from API '/search' endpoint
    };

    // when a result is clicked on
    const onVisit = path => {
      // add visit to visit history
      addVisit(path);
      // view the local file
    };

    return (
      <Box sx={{ width: '100%' }}>
        <Stack alignItems='center' spacing={1} >
            <Searchbar 
                searches={searches}
                onSearch={onSearch}
            />
            { results.data
            ? results.data.map((result, i) =>
                <SearchResultCard
                    onClick={() => onVisit(result.path)}
                    path={result.path}
                    fname={result.fname}
                    rank={i + 1}
                    score={result.score}
                />)
            : "Loading..."
            }
        </Stack>
      </Box>
    )
}

export default SearchPage;