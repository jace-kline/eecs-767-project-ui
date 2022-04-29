import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Checkbox, Stack, Typography } from '@mui/material';
import './App.css';
import Searchbar from './Searchbar';
import SearchResultCard from './SearchResultCard';
import useAsync from './hooks/useAsync';
// import api from './requests/mock-api';
import api from './requests/api';
// import { useNavigate } from 'react-router-dom';

function SearchPage(props) {

    const { searches, addSearch, visits, addVisit } = props;

    // function used to navigate to other pages
    // navigate = useNavigate();

    // last submitted search term
    const [search, setSearch] = useState(null);
    const [feedbackSignal, setFeedbackSignal] = useState(false);

    const submitFeedback = () => setFeedbackSignal(s => !s);

    // results list - fetched asynchronously
    const results = useAsync(
      () => api.query(search, 20, relevant),
      [ search, feedbackSignal ]
    );

    // paths marked "relevant"
    const [relevant, setRelevant] = useState([]);

    useEffect(() => setRelevant([]), [ search, feedbackSignal ]);

    const isRelevant = path => relevant.includes(path);

    const toggleRelevant = path => {
      const filtered = relevant.filter(p => p !== path);
      setRelevant(
        filtered.length === relevant.length
        ? [...filtered, path]
        : filtered);
    };

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
          <Stack alignItems='center' width='100%' spacing={1} >
            <Stack 
              direction='horizontal'
              alignContent='center'
              padding={2}
              marginLeft='50%'
              width='100%'
              >
              <Searchbar 
                  searches={searches}
                  onSearch={onSearch}
              />
              <Button
                onClick={submitFeedback}
                variant='contained'
                disabled={relevant.length === 0}
                color='secondary'
              >
                Provide Feedback
              </Button>
            </Stack>
            { results.data && results.data.length > 0
            ? results.data.map((result, i) =>
                <Stack
                  key={i}
                  direction='horizontal'
                  width='100%'
                  >
                  <Checkbox
                    checked={isRelevant(result.path)}
                    onChange={() => toggleRelevant(result.path)}
                    />
                  <SearchResultCard
                      onClick={() => onVisit(result.path)}
                      path={result.path}
                      fname={result.fname}
                      rank={i + 1}
                      score={result.score}
                  />
                </Stack>
              )
            : "Loading..."
            }
        </Stack>
    )
}

export default SearchPage;