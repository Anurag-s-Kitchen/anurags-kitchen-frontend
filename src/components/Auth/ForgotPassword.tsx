import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { pageWithHeader } from '../../styleSets/pageWithHeader.styleset';
import GradientBackground from '../General/GradientBackground';
// import { useNavigate, useLocation } from 'react-router-dom';

export default function ForgotPassword() {
  //   const navigate = useNavigate();
  //   const location = useLocation();
  // console.log(mode);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
    <GradientBackground>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // pt: { xs: 14, sm: 20 },
            // pb: { xs: 8, sm: 12 }
            ...pageWithHeader
          }}
        >
  
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
  
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
  
            <TextField
              margin="normal"
              required
              fullWidth
              name="otp"
              label="OTP"
              type="password"
              id="otp"
              autoComplete="current-password"
            />
  
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
  
            {/* {mode === "login" ? <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> : null} */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
      </Container>
    </GradientBackground>
  );
}