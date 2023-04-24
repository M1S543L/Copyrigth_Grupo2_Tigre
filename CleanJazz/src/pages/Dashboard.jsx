import React from "react";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { mainListItems, secondaryListItems } from '../components/listItems';
import logoLanding from '../images/CleanJazz.png'
import Avatar from '@mui/material/Avatar';
import { Card} from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import carService from '../images/car-service.png'
import carWash from '../images/girl-wash.png'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import recomendacion from '../images/light-bulb.png'
import servicios from '../images/analyse.png'
import garage from '../images/garage.png'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import discount from '../images/discount.png'
import { Link } from "react-router-dom";
import ProfileMenuButton from '../components/ProfileMenuButton';


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
  
  
  
  const drawerWidth = 225;
  
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(0),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(7),
          },
        }),
      },
    }),
  );

export default function Dashboard(){

    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
      setOpen(!open);
  
    
    };
  
    return (
        <>
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              backgroundColor: '#f6d88b',
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >

              <Link to={"/home"}>
                <Avatar sx={{ m: 0, width: 65,height: 65}} src={logoLanding}/>
              </Link>

            </Typography>
            <IconButton color="inherit">
              


                <ProfileMenuButton/>



              
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: '#efebdb',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="md" sx={{ml:4,mt: 7, mb: 4 }}>
            <Grid container spacing={3}>
             
              <Stack 
              
               direction={{ xs: 'column', sm: 'row' }}
               spacing={{ xs: 1, sm: 2, md: 4 }}
               justifyContent="flex-start"
               alignItems="flex-start"
              >
                <Card sx={{
                
                  backgroundImage: `url(${carService})`,
                  backgroundSize: 215,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom left',
                  height: 252,
                  position: 'relative', // Agregamos position: relative al Card
                  width: 672,
                  '@media (max-width:800px)': {
                    width: 320,
                    height:224,
                    backgroundSize: 180
                  }
                  }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                      Resumen de actividad
                    </Typography>
                    <Typography textAlign='justify' sx={{maxWidth:300,position: 'absolute', bottom: 150, right: 120, display: 'flex', justifyContent: 'flex-end',fontSize: 13, '@media (max-width:800px)': {
                      width: 180,
                      height:110,
                      fontSize: 10,
                      visibility:"hidden"
                    }}} variant="body2">
                          {'Conoce a profundidad tus ultimas transacciones realizadas en servicios de limpieza vehicular y demas.'}
                        </Typography>
                  </CardContent>
                 
                  <CardActions sx={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', justifyContent: 'flex-end' }}>
                    <Button sx={{'&:hover': {
                       backgroundColor: '#BFDB38',
                       },
                       borderRadius: 100,
                       background: "#A0CF53",
                       boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
                       }} variant="contained" endIcon={<KeyboardDoubleArrowRightIcon/>}>
                      
                    </Button>
                  </CardActions>
                </Card>

                <Stack 
                direction={{ xs: 'column'}}
                spacing={{ xs: 1, sm: 2, md: 4 }}
                justifyContent="flex-start"
                alignItems="flex-start"
                >

                  <Card sx={{
                  
                    backgroundImage: `url(${carWash})`,
                    backgroundSize: 150,
                    backgroundRepeat: 'no-repeat',
                    
                    height: 110,
                    position: 'relative', // Agregamos position: relative al Card
                    width: 500,
                    '@media (max-width:800px)': {
                      width: 320,
                      height:110,
                      backgroundSize: 120
                    }
                    }}>
                   <Typography textAlign='justify' sx={{maxWidth:300,position: 'absolute', bottom: 45, right: 90 , display: 'flex', justifyContent: 'flex-end',fontSize: 15, '@media (max-width:800px)': {
                      width: 180,
                      height:110,
                      fontSize: 10,
                      bottom: -45, right: 20 
                    }}} color="text.secondary" variant="body2">
                          {'"Su utlimo lavado fue hace 30 dias"'}
                        </Typography>
                  
                  </Card>

                  <Card sx={{
                    
                    backgroundImage: `url(${recomendacion})`,
                    backgroundSize: 150,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right',
                    height: 110,
                    position: 'relative', // Agregamos position: relative al Card
                    width: 500,
                    '@media (max-width:800px)': {
                      width: 320,
                      height:110,
                      backgroundSize: 120
                    }
                    }}>
                      <CardContent>
                      <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                        Recomendaciones
                      </Typography>
                      <Typography sx={{maxWidth:300,fontSize: 13, '@media (max-width:800px)': {
                      width: 180,
                      height:110,
                      fontSize: 10
                    }}} variant="body2">
                          {'"No es buena idea comer sandia en la noche, almenos que quieras sentarte en el trono"'}
                        </Typography>
                    </CardContent>
                  
                  
                  </Card>
                </Stack>
              </Stack>
              
              <Stack 
              sx={{mt:4,'@media (max-width:800px)': {
                mt:1
              }}}
               direction={{ xs: 'column', sm: 'row' }}
               spacing={{ xs: 1, sm: 2, md: 4}}
               justifyContent="flex-start"
               alignItems="flex-start"
              >
                <Card sx={{
                
                  backgroundImage: `url(${servicios})`,
                  backgroundSize: 215,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom left',
                  height: 252,
                  position: 'relative', // Agregamos position: relative al Card
                  width: 320,
                  '@media (max-width:800px)': {
                    width: 320,
                    height:224,
                    backgroundSize: 180
                  }
                  }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                      Servicios
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to={"/servicios"}> 
                      <IconButton sx={{
                        '&:hover': {
                          backgroundColor: '#FFCC1D',
                        },
                        borderRadius: 100,
                        background: " #FEA500",
                        width:60,
                        height:60,
                        boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
                        }} variant="contained" aria-label="delete">
                            <ArrowForwardIosIcon sx={{color:"white"}}/>
                      </IconButton>
                      </Link> 
                  </CardActions>
                </Card>

                <Card sx={{
                
                backgroundImage: `url(${garage})`,
                backgroundSize: 215,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom left',
                height: 252,
                position: 'relative', // Agregamos position: relative al Card
                width: 320,
                '@media (max-width:800px)': {
                  width: 320,
                  height:224,
                  backgroundSize: 180
                }
                }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Mis Vehiculos
                  </Typography>
                </CardContent>
                <CardActions sx={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', justifyContent: 'flex-end' }}>
                <Link to={"/vehiculos"}>
                <IconButton sx={{
                     '&:hover': {
                      backgroundColor: '#FFCC1D',
                    },
                     borderRadius: 100,
                     background: " #FEA500",
                     width:60,
                     height:60,
                     boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
                     }} variant="contained" aria-label="delete">
                        <ArrowForwardIosIcon sx={{color:"white"}}/>
                  </IconButton>
                  </Link>
                </CardActions>
              </Card>

              <Card sx={{
                
                backgroundImage: `url(${discount})`,
                backgroundSize: 215,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                height: 252,
                position: 'relative', // Agregamos position: relative al Card
                width: 500,
                '@media (max-width:800px)': {
                  width: 320,
                  height:224,
                  backgroundSize: 180
                }
                }}>
                <CardContent>
                  <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
                    Ofertas y Promociones
                  </Typography>
                </CardContent>
                <CardActions sx={{ position: 'absolute', bottom: 10, right: 10, display: 'flex', justifyContent: 'flex-end' }}>
                  <Link to={"/promociones"}>
                    <IconButton sx={{
                      '&:hover': {
                        backgroundColor: '#FF8E00',
                      },
                      borderRadius: 100,
                      background: "#FF5C28;",
                      width:60,
                      height:60,
                      boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
                      }} variant="contained" aria-label="delete">
                          <LocalOfferIcon sx={{color:"white"}}/>
                    </IconButton>
                  </Link>
                </CardActions>
              </Card>
              </Stack>      




               
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
        
        </>
    );
}