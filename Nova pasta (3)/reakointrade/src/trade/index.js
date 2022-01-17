import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

import logo from '../assets/logo.svg'
import reakoin from '../assets/home.svg'
import bg from '../assets/bg.png';
import buttonImage from '../assets/button.svg'

import ReakIcon from '../assets/icons/reakIcon.png';
import EthIcon from '../assets/icons/ethIcon.png';

import discord from '../assets/icons/discord.svg';
import facebook from '../assets/icons/facebook.svg';
import reddit from '../assets/icons/reddit.svg';
import telegram from '../assets/icons/telegram.svg';
import twiter from '../assets/icons/twiter.svg';


import Footer from './footer';
import {Faq, TokenExchange} from './modal';
import { borderRadius, fontSize, height } from '@mui/system';

const useStyles = makeStyles((theme) => ({
 


  heroContent: {
    padding: theme.spacing(8, 0, 0),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    
  },
  paperStyle:{
    borderRadius: '2em',
    padding: '2em',
    marginLeft: '1em',
    boxShadow:  '0 0 1em black'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  margin: {
    margin: theme.spacing(2),
  },
  inputStyle:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputStyleText:{
    marginTop: '1em',
    marginBottom: '1em',
  },
  formControl:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: '1em',
    backgroundColor: "rgba(4,0,34,.1)",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    height: 80
  },
  icons:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '1em',
    margin: '1em'
  },
  icon:{
    width: '100%',
    height: '100%',
  },
  iconStyle:{
    width: 22,
    height: 'inherit',
    marginLeft: 5
  },
  iconsStyle:{
    width: 35,
    height: 35,
    backgroundColor: 'white',
    marginLeft: '-1.5em',
    marginRight: '2.5em',
    borderRadius: '0.5em',
    alignItem: 'center',
    transition: "background 1s, color 1s",
        "&:hover": {
        transform: 'scale(1.2)',
        boxShadow:  '0 0 1em black'
        }
  },
  buttonStyle:{
    display: 'flex',
    flexDirection: 'column',

  },
  secondPaper:{
    backgroundColor: 'none'
  },
  main:{
    backgroundImage: `url(${bg})`,
    backgroundSize: '100%'
  },
  button:{
    marginTop: '1em',
    borderRadius: '1em',
    width: '80%',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    fontWeight: 700
  },
  buttonWallet:{
    marginTop: '1em',
    marginBottom: '4em',
    borderRadius: '1em',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    fontWeight: 700
  },
  connectWallet:{
    borderRadius: '1em',
    backgroundImage: `url(${buttonImage})`,
    backgroundSize: 'cover',
    height: 50,
    color: 'white',
    fontSize: 15,
    fontWeight: 700
  },
  styleGrid:{
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  toolbar:{
    justifyContent: 'space-between',
    backgroundColor: '#00214d'

  },
  textTitulo:{
    fontSize: 30,
    fontFamily: "font-family: 'Roboto', sans-serif;",
    fontWeight: 'bold',
    color: 'white'
  },
  textSubtitulo:{
    fontSize: 18,
    marginTop: 30, 
    fontFamily:"font-family: 'Roboto', sans-serif;" ,
    fontWeight: 'bold',
    color: 'white'
  },
  percentfee:{
    marginBottom: 5
  },
  inputText: {
    fontSize: 14,
    margin: 5
  },
  swap:{
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center'
  },
  logo:{
    width: 100,
    height: 100
  },
  reakoin:{
    width: 250,
    height: 100,
    marginLeft: 20
  },
  titulo:{
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20 ,

  },
  text:{
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14 ,
    marginLeft: 10
  }
}));


export default function Trade() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <div>
          <img src={logo} className={classes.logo}>
          </img>
          <img src={reakoin} className={classes.reakoin}>
          </img>
          </div>
          <Button className={classes.connectWallet}>
            Connect Wallet
          </Button>
        </Toolbar>
      </AppBar>
      <main className={classes.main}>
        {/* Hero unit */}

        <div className={classes.heroContent}>
          <Container >
            <Typography className={classes.textTitulo} gutterBottom>
              Reakoin Bridge
            </Typography>
            <Typography className={classes.textSubtitulo} paragraph>
            Transfer Reakoinbetween Ethereum and Binance Smart Chain.
            </Typography>
            
          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container >
              <Grid item  xs={12} sm={8} md={6} className={classes.styleGrid}>
                <Paper elevation={3} className={classes.paperStyle}   >
                    <div>
                      
                      <div className={classes.inputStyle}>
                        <InputLabel className={classes.inputText}>Token Balance:0</InputLabel>
                        <InputLabel className={classes.inputText}>BNB Balance: 0.0000</InputLabel>
                      </div>
                      <div className={classes.formControl}>
                        <FormControl className={classes.margin}>
                          <InputLabel >From</InputLabel>
                          <InputBase className={classes.margin} defaultValue='0'  inputProps={{ 'aria-label': 'naked' }}/>                        
                        </FormControl>
                        <div className={classes.icons}>
                          
                          <img src={ReakIcon} className={classes.icon}/>
                        </div>
                      </div>
                      <div className={classes.inputStyleText}>
                        <InputLabel className={classes.inputText}>Percent fee: 0.1%</InputLabel>
                        <InputLabel className={classes.inputText}>Minimum fee: 27,500,000,000 Reakoin</InputLabel>
                      </div>
                      <div className={classes.formControl}>
                        <FormControl className={classes.margin}>
                          <InputLabel >To</InputLabel>
                          <InputBase className={classes.margin} defaultValue='0' inputProps={{ 'aria-label': 'naked' }}/>                        
                        </FormControl>
                        <div className={classes.icons}>
                          <img src={EthIcon} className={classes.icon}/>
                        </div>
                      </div>
                      <Button  className={classes.buttonWallet}  color="primary"   variant="contained"> Connect Wallet</Button>
                      <InputLabel className={classes.swap}  >Powered by AnySwap</InputLabel>

                    </div>
                </Paper>
              </Grid>




              <Grid item  xs={12} sm={6} md={4}>
                <div className={classes.secondPaper}>
                  <div className={classes.buttonStyle}>
                    <TokenExchange></TokenExchange>
                    <Faq></Faq>
                    <Button className={classes.button}  color="primary" variant="contained"> BabyDoge Coin Home</Button>
                  </div>
                  <div className={classes.icons}>
                    <div className={classes.iconsStyle}>
                      <img src={reddit } className={classes.iconStyle}/>
                    </div>
                    <div className={classes.iconsStyle}>
                      <img src={discord} className={classes.iconStyle}/>
                    </div>
                    <div className={classes.iconsStyle}>
                      <img src={telegram} className={classes.iconStyle}/>
                    </div>
                    <div className={classes.iconsStyle}>
                      <img src={twiter} className={classes.iconStyle}/>
                    </div>
                    <div className={classes.iconsStyle}>
                      <img src={facebook} className={classes.iconStyle}/>
                    </div>
                  </div>
                </div>
              </Grid>
          </Grid>
          
        </Container>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container >
              <Grid item  xs={12} sm={12} md={12} >
                <div>
                  <h2 className={classes.titulo}>Reminder</h2>
                  <p className={classes.text}>. Crosschain Fee is 0.1 %, Minimum Crosschain Fee is 27,500,000,000 BabyDoge, Maximum Crosschain Fee is 343,000,000,000 BabyDoge</p>
                  <p className={classes.text}>. Minimum Crosschain Amount is 30,000,000,000 BabyDoge</p>
                  <p className={classes.text}>. Maximum Crosschain Amount is 1,720,000,000,000,000 BabyDoge</p>
                  <p className={classes.text}>. Estimated Time of Crosschain Arrival is 10-30 min</p>
                  <p className={classes.text}>. Crosschain amount larger than 343,000,000,000,000 BabyDoge could take up to 12 hours</p>

                  <h2 className={classes.titulo}> Beta version (Use at your own risk) </h2>          
                  <h2 className={classes.titulo}> BabyDoge will not be liable for any use or misuse of the platform. </h2>          
                  <h2 className={classes.titulo}> Click <a href='https://anyswap.exchange/#/router'> Here</a>  If you are having any trouble using our bridge or would like to use the AnySwap interface. </h2>          
                </div>
              </Grid>

          </Grid>
        </Container>

      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Footer/>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}