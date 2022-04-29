import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const pages = [
  { display: 'Search', link: '/'},
  { display: 'Searches', link: '/searches'}, 
  { display: 'Visits', link: '/visits'}
];

function Appbar() {

  let navigate = useNavigate();

  return (
    <>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Filesystem Search
          </Typography>
        
          <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.display}
                onClick={() => navigate(page.link)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.display}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
  
};
export default Appbar;