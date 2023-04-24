import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/Login.css'
import logo from '../images/CleanJazz.png'
import car from '../images/car1.jpg'
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Endpoint from '../services/Endpoint';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {new Date().getFullYear()}
      {' Clean Jazz'}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const navigate = useNavigate();
  
  const handleLogin = async () => {
    try {
      const response = await axios.post(`${Endpoint.apiEndpoint}/users/login`, { username, password });
      setAccessToken(response.data.accessToken);
      Cookies.set('accessToken', response.data.accessToken);
      
      navigate("/")
      // redireccionar a la página de dashboard después del inicio de sesión
    } catch (error) {
      alert('Credenciales inválidas');
      
    }
	handleRefreshClick()
     
	 
  }

  const handleRefreshClick = () => {
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${car})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            
          }}
       
        />
        <Grid className='Login-background' sx={{bgcolor:'#F6E1C3'}} item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              
            }}
          >

        
            <Link to={"/"} style={{ textDecoration: 'none' }}>
            <Avatar sx={{ m: 1, width: 210,height: 210}} src={logo}/>
            </Link> 
              
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>
            <Box  sx={{ mt: 1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo Electrónico"
                name="email"
                autoComplete="email"
                autoFocus
                color="warning"
                value={username}
                onChange={e => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                color="warning"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuérdame"
              />
              
              <Button
                onClick={handleLogin}
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1,backgroundColor: '#F7C04A',
                '&:hover': {
                  backgroundColor: '#E7B10A',
                  
                },}}
              >
                Iniciar Sesión {accessToken && accessToken}
              </Button>
              
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                  ¿Has olvidado la contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"¿No tienes una cuenta? Regístrate"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>

      

    </ThemeProvider>
  );
}