import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography
} from '@mui/material';
import {
  Email as EmailIcon,
  CalendarToday as CalendarIcon,
  AutoAwesome as AutoAwesomeIcon,
  Security as SecurityIcon
} from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const features = [
  {
    icon: <EmailIcon fontSize="large" />,
    title: 'Smart Email Processing',
    description: 'Automatically analyzes your emails and extracts actionable items.'
  },
  {
    icon: <CalendarIcon fontSize="large" />,
    title: 'Calendar Integration',
    description: 'Seamlessly adds events to your preferred calendar.'
  },
  {
    icon: <AutoAwesomeIcon fontSize="large" />,
    title: 'AI-Powered',
    description: 'Uses advanced AI to understand context and prioritize tasks.'
  },
  {
    icon: <SecurityIcon fontSize="large" />,
    title: 'Secure & Private',
    description: 'Your data is encrypted and never shared with third parties.'
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hermes
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Inbox Today. Done Tomorrow.
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Are missed emails costing you trust, opportunities, and peace of mind? 
              Hermes instantly turns your emails into calendar appointments, ensuring 
              you never miss another crucial moment.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" size="large">
                    Try Free for 7 Days
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item key={index} xs={12} sm={6} md={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100%',
                  }}
                >
                  {feature.icon}
                  <Typography variant="h6" component="h2" sx={{ mt: 2 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
