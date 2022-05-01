import React, { useState } from 'react';
import { TextField, Button, Stack, ButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(props) {
    const { onSearch, searches } = props;
    const [searchTerm, setSearchTerm] = useState("");

    return (
    <Stack 
        direction='horizontal'
        padding={2}>
        <TextField
            id="searchTerm"
            type="search"
            label="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
        />
        <Button 
            variant='contained'
            disabled={searchTerm === "" || searchTerm === null}
            startIcon={<SearchIcon />}
            onClick={() => onSearch(searchTerm) }
        >
            Search
        </Button>
    </Stack>
    );
}
