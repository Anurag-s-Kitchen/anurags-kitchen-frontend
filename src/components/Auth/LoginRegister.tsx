import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate, useLocation } from 'react-router-dom';
import GradientBackground from '../General/GradientBackground';
import { pageWithHeader } from '../../styleSets/pageWithHeader.styleset';

export default function LoginRegister() {
  const navigate = useNavigate();
  const location = useLocation();
  const mode = location.pathname.split("/").pop();
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
            ...pageWithHeader
          }}
        >
  
          <Typography component="h1" variant="h5">
            {mode === 'login' ? "Login" : "Register"}
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
              {mode === "login" ? "Login" : "Register"}
            </Button>
            <Grid container sx={{ flexDirection: {xs: "column", md: mode === "login" ? "row" : "column"}, alignItems: "center" }}>
              <Grid sx={{display: mode === "login" ? 'flex' : 'none'}} item xs>
                <Link sx={{ color: "black", textDecorationColor: "black" }} onClick={() => { navigate("/forgot-password") }} component={"button"} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item xs>
                <Link sx={{ color: "black", textDecorationColor: "black" }} onClick={() => { mode === "login" ? navigate("/register") : navigate("/login") }} component={"button"} variant="body2">
                  {mode === "login" ? "Don't have an account? Register" : "Already have an account? Login" }
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </GradientBackground>
  );
}