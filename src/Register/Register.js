import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate, Link, json } from 'react-router-dom'
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


function Copyright(props) {

  return (

    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const nav = useNavigate()
  const [obj, setObj] = React.useState({})

  const [arr,setarr]= React.useState({})

  const getData = (e,type) =>{
      if (type == 'CompanyName') {
        let obj1={...obj,[type]:e}
        setObj(obj1)
        console.log(obj)
      }
      else if (type == 'Industry'){
        let obj1={...obj,[type]:e}
        setObj(obj1)
        console.log(obj)
      }
      else if (type == 'Contact'){
        let obj1={...obj,[type]:e}
        setObj(obj1)
        console.log(obj)
      }
      else if (type == 'Email'){
        let obj1={...obj,[type]:e}
        setObj(obj1)
        console.log(obj)
      }
      else if (type == 'Password'){
        let obj1={...obj,[type]:e}
        setObj(obj1)
        console.log(obj)
      }
      else if (type == 'Repeatpassword'){
        let obj1={...obj,[type]:e}
        setObj(obj1)
        console.log(obj)
      }

  }
console.log('Obj',obj)
  return (

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            width: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                              <TextField
                  autoComplete="given-name"
                  name="Compny Name"
                  required
                  fullWidth
                  id="Compny Name"
                  label="Compny Name"
                  autoFocus
                  onChange={(e)=>{getData(e.target.value,"CompanyName")}}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Industry"
                  label="Industry"
                  name="Industry"
                  autoComplete="Industry"
                  onChange={(e)=>{getData(e.target.value,"Industry")}}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Contact"
                  label="Contact"
                  name="Contact"
                  autoComplete="Contact"
                  onChange={(e)=>{getData(e.target.value,"Contact")}}
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>{getData(e.target.value,"Email")}}

                />
              </Grid>
           

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>{getData(e.target.value,"Password")}}

                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Repeatpassword"
                  label="RepeatPassword"
                  type="Repeatpassword"
                  id="Repeatpassword"
                  autoComplete="Repeatpassword"
                  onChange={(e)=>{getData(e.target.value,"Repeatpassword")}}

                />
              </Grid>

              <Grid item xs={12}>
                
          
              </Grid>
            </Grid>
            <Button
              id="rgbtn"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'black' }}
              onClick={(e) => {
                 nav('/Login') 
              e.preventDefault()
              
              // let jsonData=JSON.stringify(obj)
              axios.post('http://localhost:5000/Company/Register',obj)
              .then((res)=>{
                console.log('res',res.data)
                // setarr({res:res.data})
                
              })

              .catch((err)=>{
                console.log("error")
                // setarr({err})
              })
            
            }}
            >
              Sign Up
            </Button>
            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link variant="body2" to="/Login">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>

  );
}