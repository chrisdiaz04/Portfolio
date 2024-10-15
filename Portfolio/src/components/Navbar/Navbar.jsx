import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ThemeContext } from '../../App'; // Import the ThemeContext

const navItems = ['Skills', 'Projects', 'Education', 'Contact Me'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Access theme and toggleTheme from ThemeContext
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 150,
        height: 'auto',
        padding: 2,
        textAlign: 'center',
        background: '#radial-gradient(circle at 64% 27%,#261b40, #142332, #07090b);',
        borderRadius: 2,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => handleScroll(item)} // Handle scroll on button click
            >
              <ListItemText primary={item} sx={{ color: '#fff' }} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Light/Dark Mode Toggle in the Drawer */}
        <ListItem>
          <Button
            onClick={toggleTheme}
            sx={{
              color: theme === 'light' ? '#000' : '#fff', // Change text color based on theme
              backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', // Change background color
              width: '100%',
              textAlign: 'center',
              marginTop: '10px',
              '&:hover': {
                backgroundColor: theme === 'light' ? '#e0e0e0' : '#444', // Change hover color
              },
            }}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar
        component="nav"
        position="fixed" // Keeps the navbar fixed at the top
        sx={{
          background: 'rgba(68, 27, 64, .9)', // Semi-transparent base color from your gradient
          backgroundImage: 'radial-gradient(circle at 62% 27%, rgba(29, 20, 60, 0.8), rgba(20, 39, 63, 4), rgba(0, 0, 10, .8))', // Semi-transparent gradient effect
          backdropFilter: 'blur(30px)', // Blurry effect
          boxShadow: 'none',
          width: '100%', // Makes sure it covers the full width of the screen
          top: 0, // Ensures it stays at the top of the viewport
          zIndex: 1201, // Static zIndex value
        }}
      >
        <Toolbar>
          <Typography
            variant="body1" // Fixed the invalid variant
            component="div"
            sx={{ color: '#fff', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* Chris Diaz */}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: 'white' }}
                onClick={() => handleScroll(item)} // Handle scroll on button click
              >
                {item}
              </Button>
            ))}
          </Box>

          {/* Light/Dark Mode Toggle Button in Desktop View */}
          {/* <Button
            onClick={toggleTheme}
            sx={{
              color: theme === 'light' ? '#000' : '#fff', // Change text color based on theme
              backgroundColor: theme === 'light' ? '#f0f0f0' : '#333', // Change background color
              marginLeft: '10px',
              '&:hover': {
                backgroundColor: theme === 'light' ? '#e0e0e0' : '#444', // Change hover color
              },
            }}
          >
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </Button> */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              color: 'white',
              display: { xs: 'block', sm: 'none' },
              marginLeft: 'auto',
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '160px',
            padding: '1px',
            height: 'auto',
            top: '10%',
            right: '5%',
            borderRadius: '8px',
            backgroundImage: 'linear-gradient(to top, #07090b 0%, #142332 100%)', // Gradient background
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
