import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Mail from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { pageWithHeader } from '../../styleSets/pageWithHeader.styleset';
import emailjs from 'emailjs-com';
import { InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import dayjs from 'dayjs';
import { useState } from 'react';

const timeList = (new Array(23))
  .fill(undefined)
  .map((_, i) => i + 0)
  .filter((n) => n > 8)
  .map((n) => n.toString().length == 1 ? "0" + n.toString() + ":00" : n.toString() + ":00");

export default function ContactUs() {

  const [open, setOpen] = useState(false);


  const [disabled, setDisabled] = useState(false);
  const [reload, setReload] = useState(false);

  const [dateValue, setDateValue] = useState(dayjs().format("YYYY-MM-DD"));
  const [timeValue, setTimeValue] = useState(timeList[0]);
  const [guest, setguest] = useState(1);
  const [message, setMessage] = useState("");

  const onTimeChange = (e: any) => {

    console.log(e.target.value);

    setTimeValue(e.target.value);
  }

  const onDateChange = (e: any) => {

    if (e.target.value < 1) return;

    setDateValue(e.target.value);
  }


  const onGuestChange = (e: any) => {

    if (e.target.value < 1) return;

    setguest(e.target.value);
  }


  const openSnackBar = (reload: boolean) => {
    setOpen(true);
    setReload(reload);
  };

  const handleClose = (_: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    if (reload) window.location.reload();
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    let raw = {
      firstName: data.get('firstName')?.toString(),
      lastName: data.get('lastName')?.toString(),
      from_name: "",
      email: data.get('email')?.toString(),
      phone: data.get('phone')?.toString(),
      date: dateValue,
      time: timeValue,
      guestCount: guest,
      message: data.get('message') ? data.get('message')?.toString() : '',
    }

    if (!raw.email || !raw.phone || !raw.firstName || !raw.lastName || !raw.date || !raw.time || !raw.guestCount) {

      setMessage("Fill all required fields");
      openSnackBar(false);
      return;
    }

    raw = { ...raw, from_name: raw.firstName + " " + raw.lastName }
    
    emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, raw, import.meta.env.VITE_EMAIL_USER_ID).then(() => {

      setDisabled(true);
      setMessage("Message sent");

    }, (error) => {

      console.log(error.text);
      setDisabled(true);
      setMessage("Some error occurred");

    }).finally(() => {

      openSnackBar(true);
    });

  }

  return (

    <Container sx={{ ...pageWithHeader, }}>
      <Container component="main" maxWidth="xs">
        {/* <CssBaseline /> */}
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <Mail />
          </Avatar>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            display={"flex"}
            flexDirection={"column"}
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            <Typography component={"span"}>
              For&nbsp;your&nbsp;personal&nbsp;catering&nbsp;needs!
            </Typography>

          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled={disabled}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  name="phone"
                  autoComplete="phone"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <InputLabel
                  shrink={false}
                  htmlFor={"date"}
                >
                  <Typography>Date</Typography>
                </InputLabel>

                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  // variant='filled'
                  id="date"
                  // label="Date"
                  value={dateValue}
                  onChange={onDateChange}
                  name="date"
                  autoComplete="Date"
                  type='date'
                />
              </Grid>

              <Grid item xs={12} sm={6}>

                <InputLabel id="time">Time</InputLabel>
                <Select
                  fullWidth
                  required
                  labelId="time"
                  id="time"
                  label="Time"
                  name='time'
                  value={timeValue}
                  onChange={onTimeChange}
                >

                  {timeList.map((time) => (
                    <MenuItem key={time} value={time}>{time}</MenuItem>
                  ))}

                </Select>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  disabled={disabled}
                  required
                  fullWidth
                  id="guest"
                  label="Guest Count"
                  name="guest"
                  autoComplete="guest"
                  type='number'
                  value={guest}
                  onChange={onGuestChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  disabled={disabled}
                  fullWidth
                  multiline
                  name="message"
                  label="Special Instructions"
                  type="textarea"
                  id="message"
                  autoComplete="new-message"
                  inputProps={{
                    style: {
                      minHeight: 100,
                      // padding: '0 14px',
                    },
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Container>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message={message}
      />
    </Container>
  );
}