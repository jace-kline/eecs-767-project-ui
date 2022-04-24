import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SearchResultCard(props) {

    const { onClick, path, fname, rank, score } = props;

    return (
        <Card sx={{ minWidth: '75%' }}>
        <CardActionArea onClick={onClick}>
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
                {fname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {path}
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
    );
}