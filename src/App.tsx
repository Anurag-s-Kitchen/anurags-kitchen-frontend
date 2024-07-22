import { createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import Route from './Route';

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF944D',
      contrastText: '#fff'
    },
    // text: {
    //   primary: '#FFFFFF'
    // }
  }
});

function App() {
  return (
    <>

      <ThemeProvider theme={theme}>

        <Route />

      </ThemeProvider>

    </>

  );
}
export default App
