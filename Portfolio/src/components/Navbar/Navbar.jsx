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

const navItems = ['Skills', 'Education', 'Achievements', 'Projects', 'Contact Me'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        width: 150, // Reduced width for the pop-up to make it skinnier
        height: 'auto', // Height adjusted to content size
        padding: 2,
        textAlign: 'center',
        background: '#radial-gradient(circle at 64% 27%,#261b40, #142332, #07090b);', // Custom background color
        borderRadius: 2, // Rounded corners for pop-up effect
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} sx={{ color: '#fff' }} /> {/* White text for items */}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppBar 
        component="nav" 
        position="sticky" // Sticky position for the navbar
        sx={{ 
          backgroundColor: 'transparent', // Transparent background
          boxShadow: 'none', // No box shadow
          marginBottom: '30px', // Bottom margin
        }}
      >
        <Toolbar>
          {/* Text on the left side */}
          <Typography
            variant="p"
            component="div"
            sx={{color:'#30234f' ,flexGrow: 1, display: 'block' }} // Ensures the text stays on the left
          >
            {/* Chris Diaz */}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#000' }}> {/* Changed text color for visibility */}
                {item}
              </Button>
            ))}
          </Box>
          {/* Hamburger Icon moved to the right */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end" // Move to the right side
            onClick={handleDrawerToggle}
            sx={{color:'black', display: { xs: 'block', sm: 'none' }, marginLeft: 'auto' }} // `marginLeft: 'auto'` pushes it to the right
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="right" // Drawer slides in from the right side
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '160px', // Reduced width for skinnier pop-up
            padding: '1px',
            height: 'auto', // Adjust height to be content-based
            top: '10%', // Position the pop-up lower on the screen
            right: '5%', // Align it slightly away from the edge
            borderRadius: '8px', // Round the corners
            backgroundColor: '#333', // Dark background for pop-up effect
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}


export default Navbar;
