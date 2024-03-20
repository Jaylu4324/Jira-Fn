import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';



export default function ResponsiveGrid() {
    let arr = [<a href='https://in.linkedin.com/'><LinkedInIcon fontSize='large' /></a>,<WhatsAppIcon  fontSize='large'/>,<EmailIcon  fontSize='large'/>]
  return (
    <Box sx={{ flexGrow: 1,pt:5 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index} align="center">
            <Typography variant='h1'>{arr[index]}</Typography>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}