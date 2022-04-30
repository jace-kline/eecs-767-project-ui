import React, { useState } from 'react';
import { TextField, Button, Stack, ButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(props) {
    const { onSearch, searches } = props;
    const [search, setSearch] = useState("");

    return (
    <Stack direction='horizontal'>
        <TextField
            id="searchTerm"
            type="search"
            label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <Button 
            variant='contained'
            disabled={search === "" || search === null}
            startIcon={<SearchIcon />}
            onClick={() => onSearch(search) }
        >
            Search
        </Button>
    </Stack>
    );
}
