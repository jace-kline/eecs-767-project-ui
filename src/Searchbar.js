import React from 'react';
import { TextField, Button, ButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(props) {
    const { onSearch, search_history } = props;

    return (
    <ButtonGroup>
        <TextField
            id="searchTerm"
            type="search"
            label="Search"
            onChange={() => {}}
        />
        <Button 
            variant='contained'
            startIcon={<SearchIcon />}
            onClick={() => {}}
        >
            Search
        </Button>
    </ButtonGroup>
    );
}
