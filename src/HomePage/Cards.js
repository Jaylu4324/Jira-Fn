import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';
import  Photo  from './WhatsApp Image 2024-03-20 at 2.27.49 PM (1).jpeg'
import Photo1 from  './WhatsApp Image 2024-03-20 at 2.27.49 PM (2).jpeg'
import Photo2 from "./WhatsApp Image 2024-03-20 at 2.27.49 PM.jpeg"

export default function ActionAreaCard() {
    const photo=[Photo,Photo1,Photo2]
    const title = ["User-Friendly Interface","Scalability","Customer Support"]
    const content = ["Our tool is intuitive and easy to navigate, even for beginners.","Whether you’re managing a small team or a large enterprise, our tool grows with you.","Need assistance? Our dedicated support team is here to help."]
  return (
  
    <Container sx={{mt:5}}>
      <Typography variant='h2' align='center' sx={{mb:10}} >
      Why choose Us?

      </Typography>
<Grid  container scolumns={{ xs: 4, sm: 8, md: 12 }}  >
    {Array.from(Array(3)).map((__,index)=>(

<Grid item xs={12} sm={6} md={4} key={index} sx={{mb:2}} >
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={photo[index]}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title[index]}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {content[index]}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
    ))}
    </Grid>
    </Container>
  );
}