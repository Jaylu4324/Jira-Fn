import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Img from  "../logo.png"
import { useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
  const Nav=useNavigate()
  return (
    <Box sx={{ flexGrow: 1     }} >
      <AppBar position="static" style={{backgroundColor:"black",marginTop:"0"}}>
        <Toolbar>
        
         {/* <img src={Img} style={{height:"100%",width:"25%"}} /> */}
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,textAlign:"center"}}>
            {/* Project Management Tool */}
          </Typography>
          <Button color="inherit" onClick={()=>{Nav("")}}>About Us</Button>
          <Button color="inherit" onClick={()=>{Nav("/")}}>Contact</Button>
          <Button color="inherit" onClick={()=>{Nav("/Register")}}>sign up</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}