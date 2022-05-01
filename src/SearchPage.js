import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Stack, TextField, MenuItem, Select, InputLabel, FormControl, Paper, Typography, Grid, Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './App.css';
// import Searchbar from './Searchbar';
import SearchResultCard from './SearchResultCard';
import useAsync from './hooks/useAsync';
// import api from './requests/mock-api';
import api from './requests/api';
// import { useNavigate } from 'react-router-dom';

function SearchPage(props) {

    const { searches, addSearch, visits, addVisit } = props;

    // function used to navigate to other pages
    // navigate = useNavigate();

    // current search term in the text box
    const [searchTerm, setSearchTerm] = useState("");
    // number of results to return for a search
    const [numResults, setNumResults] = useState(20);

    // last submitted search term
    const [search, setSearch] = useState(null);
    const [feedbackSignal, setFeedbackSignal] = useState(false);

    const submitFeedback = () => setFeedbackSignal(s => !s);

    // results list - fetched asynchronously
    const results = useAsync(
      () => api.query(search, numResults, relevant),
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

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    // when a result is clicked on
    const onVisit = path => {
      // add visit to visit history
      addVisit(path);
      // view the local file
      openInNewTab(api.DOCS_ENDPOINT + path);
    };

    return (
      <Grid container>
        <Grid
          item
          xs={8}
          ml={3}
          mt={3}
        >
          <Stack
            direction='column'
            justifyContent='flex-start'
          >
            <Stack
              direction='row'
              justifyContent='flex-start'
              alignItems='center'
              spacing={1}
              mb={3}
            >
              <FormControl sx={{ m: 1, width: 100 }}>
                <InputLabel>Results</InputLabel>
                <Select
                  value={numResults}
                  label="Results"
                  onChange={e => setNumResults(e.target.value)}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
              <TextField
                  id="searchTerm"
                  type="search"
                  label="Search"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  sx={{ minWidth: 500 }}
              />
              <Button 
                  variant='contained'
                  size='large'
                  disabled={searchTerm === "" || searchTerm === null}
                  startIcon={<SearchIcon />}
                  onClick={() => onSearch(searchTerm) }
              >
                  Search
              </Button>
              <Button
                variant='contained'
                size='large'
                disabled={relevant.length === 0}
                color='secondary'
                onClick={submitFeedback}
              >
                Provide Feedback
              </Button>
            </Stack>
          { results.data && results.data.length > 0 &&
            <Paper variant='outlined'>
              <Typography 
                gutterBottom 
                variant="h6"
                component="div"
                alignSelf='flex-start'
              >
                Showing top {results.data.length} results for "{search}"...
              </Typography>
              { results.data.map((result, i) =>
                <Stack
                  key={i}
                  direction='row'
                  justifyContent='flex-start'
                  padding={0.5}
                  pr={2}
                >
                  <Checkbox
                    checked={isRelevant(result.path)}
                    onChange={() => toggleRelevant(result.path)}
                  />
                  <SearchResultCard
                      onClick={() => onVisit(result.path)}
                      path={result.path}
                  />
                </Stack>)
              }
            </Paper>
            }
            { results.data && results.data.length === 0 && "No results for this search" }
            { results.error && JSON.stringify(results.error) }
            { results.loading && "Loading..."  }
            { !results.loading && !results.error && !results.data && "Enter a search to get results" }
          </Stack>
        </Grid>
        <Grid
          item
          xs={3}
          container
          justifyContent='space-evenly'
          margin={3}
        >
          <Grid item xs={5}>
            <LabeledList
              label='Searches'
              items={searches}
              onItemClick={s => {
                setSearchTerm(s);
                onSearch(s);
              }}
            />
          </Grid>
          <Grid item xs={5}>
            <LabeledList
              label='Visits'
              items={visits}
              onItemClick={onVisit}
            />
          </Grid>
        </Grid>
      </Grid>
    )
}

function LabeledList(props) {
  const { label, items, onItemClick } = props;

  return (
    <>
    <Typography variant='h6' gutterBottom>
      {label}
    </Typography>
    <Divider />
    <List>
      { items && items.length > 0 && items.slice(0).reverse().map((x, i) => 
        <ListItem disablePadding>
          <ListItemButton onClick={() => onItemClick(x)}>
            <ListItemText primary={x} />
          </ListItemButton>
        </ListItem>
        )
      }
    </List>
    </>
  )
}

export default SearchPage;