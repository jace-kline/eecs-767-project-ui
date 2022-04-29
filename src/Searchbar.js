import React, { useState } from 'react';
import { TextField, Button, ButtonGroup } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Searchbar(props) {
    const { onSearch, searches } = props;
    const [search, setSearch] = useState("");

    return (
    <ButtonGroup
        sx={{ padding: 2 }}
        >
        <TextField
            id="searchTerm"
            type="search"
            label="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
        />
        <Button 
            variant='contained'
            disabled={search == ""}
            startIcon={<SearchIcon />}
            onClick={() => onSearch(search) }
        >
            Search
        </Button>
    </ButtonGroup>
    );
}
