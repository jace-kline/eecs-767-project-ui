import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function SearchResultCard(props) {

    const { onClick, path } = props;

    const fnameFromPath = p => {
        let segs = p.split('/');
        return segs[segs.length - 1]
    }

    const fname = !props.fname 
    ? fnameFromPath(path)
    : props.fname;

    return (
        <Card
            raised
            sx={{ width: '100%'}}
        >
            <CardActionArea onClick={onClick}>
                <CardContent
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                >
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