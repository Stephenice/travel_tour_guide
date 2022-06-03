import { makeStyles } from "@material-ui/core/styles";




export default makeStyles((theme) => ({

  hero: {
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: '1',    
    [theme.breakpoints.down('sm')] : {
      height: 300,      
    },   

  },
  aboutTitle: {
    position: 'absolute',
    top: '10%',
    paddingBottom: theme.spacing(3),
    color: 'white',
    fontWeight: 600,
  },
  aboutP: {
    color: 'white',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center,"
  },
  teamsContainer: {
    paddingTop: theme.spacing(3),
  }, 
  teamTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    paddingBottom: theme.spacing(3),
  },
  author: {
    display: 'flex',
  },
  CardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  // paginationContainer: {
  //   display: 'flex',
  //   justifyContent: 'center',

  // }, 
  

}));



