import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import  Container  from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(),
     
      marginLeft: 'auto',
      marginRight: 'auto'
    },
  },
  papers:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  },
}));


export default function Footer() {
  const classes = useStyles();



  return (
    <Container className={classes.root} maxWidth="md">
      <div className={classes.papers}>
        <Paper elevation={0} > 
          Icon
        </Paper>
        <Paper elevation={0}> 
          ABOUT
          CONTACT
          DEBIT CARD<br/>
          HOW TO BUY BABYDOGE
        </Paper>
        <Paper elevation={0} > 
          HELP
          TERMS & CONDITIONS
          PRIVACY POLICY
        </Paper>
      </div>
    </Container>
  );
}