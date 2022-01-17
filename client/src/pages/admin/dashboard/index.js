
import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import MenuAdmin from '../../../components/MenuAdmin.js';
import Footer from '../../../components/FooterAdmin';






const mdTheme = createTheme();

function DashboardContent() {
  

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <MenuAdmin title={'DASHBOARD'}/>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Box  maxWidth="lg" sx={{ mt: 2, mb: 4  , ml: 0}}>
            <Grid container sx={{m: 1}} spacing={3}>
              teste
            </Grid>
           <Grid>
              <Footer sx={{ pt: 4 }} />
           </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
