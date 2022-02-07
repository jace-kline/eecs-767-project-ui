import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SearchResultCard(props) {

    const { searchTerm, title, url, snapshot } = props;

    function onClick() {
        // onVisit({ searchTerm, title, url }); // record that we are visiting a site based on a certain search
        window.location.href = url; // replace the current URL with the one to navigate to
    }

    return (
        <Card sx={{ minWidth: '75%' }}>
        <CardActionArea onClick={onClick}>
            <CardContent>
            <Typography variant="body2" color="text.secondary">
                {url}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
                {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {snapshot}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}