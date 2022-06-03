import React from "react";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { CardMedia } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Pagination } from "@mui/material";


import useStyles from './styles';


const About = () => {
  const classes = useStyles();


  return (
    <>
      <Box className={classes.hero} style={{backgroundImage: "url(https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80)",}}>
        <Typography variant='h5' className={classes.aboutTitle}>
          About GoTravel Advisor
        </Typography>
        <Typography variant="body2" color="text.secondary" className={classes.aboutP} component="p" style = {{ padding : 20, zIndex: '1' }}>
        GoTravel Advisor, is a google maps travel companion which helps millions of  travelers each month make every trip their best trip. 
        Travelers across the globe will be able to use the site and app to browse million reviews and opinions of 
        8.7 million accommodations, restaurants, experiences, and attractions. Whether planning or on a trip, 
        users will turn to the App to compare low prices on hotels, book popular tours and attractions, as well as reserve tables at great restaurants. 
        </Typography>
        {/* <Typography variant='body2' component="p" className={classes.aboutP}>
        Written in: Javascript, React js, API Call
      </Typography>         */}
      </Box>
      <Container maxWidth='lg' className={classes.teamsContainer}>
      <Typography variant="h6" className={classes.teamTitle}>
        Our Team Behind Project
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            component="img"
            height="240"
            image='./image/pexels-markus-spiske-2004161.jpg'        
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Software Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I'm a Front End Developer from London, UK. I have experience in responsive CSS, JavaScript and React and have
              just finished a bootcamp with Purple Beard
            </Typography>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <Box className={classes.author}>
              <Avatar 
              src='./image/pexels-tarzine-jackson-773371.jpg' 
              />
              <Box ml={2}>
                <Typography variant='subtitle2' component='p'>
                  Shakirat
                </Typography>
                <Typography variant='subtitle2' color='textSecondary' component='p'>
                  June 02,2022
                </Typography>
              </Box>
            </Box>
            <Button variant="contained">Contact Me</Button>
          </CardActions>
    </Card>

        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            component="img"
            height="240"
            image='./image/pexels-luis-gomes-546819.jpg'        
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Software Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I'm a Front End Developer from London, UK. I have experience in responsive CSS, JavaScript and React and have
              just finished a bootcamp with Purple Beard
            </Typography>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <Box className={classes.author}>
              <Avatar 
              src='./image/pexels-pixabay-220453.jpg' 
              />
              <Box ml={2}>
                <Typography variant='subtitle2' component='p'>
                  Mahilan
                </Typography>
                <Typography variant='subtitle2' color='textSecondary' component='p'>
                  June 02,2022
                </Typography>
              </Box>
            </Box>
            <Button variant="contained">Contact Me</Button>
          </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            component="img"
            height="240"
            image='./image/pexels-mikhail-fesenko-9553909.jpg'        
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Software Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              I'm a Front End Developer from London, UK. I have experience in responsive CSS, JavaScript and React and have
              just finished a bootcamp with Purple Beard
            </Typography>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <Box className={classes.author}>
              <Avatar 
              src='./image/pexels-creation-hill-1681010.jpg' 
              />
              <Box ml={2}>
                <Typography variant='subtitle2' component='p'>
                  Stephen
                </Typography>
                <Typography variant='subtitle2' color='textSecondary' component='p'>
                  June 02,2022
                </Typography>
              </Box>
            </Box>
            <Button variant="contained">Contact Me</Button>
          </CardActions>
    </Card>
        </Grid>
      </Grid>
      {/* <Box my={4} className={classes.paginationContainer}>
        <Pagination count={5} />
      </Box> */}
      </Container>    
  
  </>
)
};

export default About;