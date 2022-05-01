import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';

const pages = [
  { display: 'Search', link: '/'},
  { display: 'Searches', link: '/searches'}, 
  { display: 'Visits', link: '/visits'}
];

function Appbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          display='flex'
          flexDirection='row'
          flexGrow={1}
          justifyContent='center'
          alignContent='center'
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
          >
            File System Search
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
  
};
export default Appbar;