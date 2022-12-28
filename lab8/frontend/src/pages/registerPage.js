import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {AuthService} from '../services/authService';
import { Navigate } from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          isAuthorized: localStorage.getItem("currentUser")
        }

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmailChange(e){
      this.setState({ email: e.target.value })
    }

    handlePasswordChange(e){
      this.setState({ password: e.target.value })
    }

    handleSubmit(e){
      e.preventDefault();
      AuthService.register(this.state.email, this.state.password)
        .catch(ex => {
          console.log(ex)
        })
    }

    render() {
        const { email, password, isAuthorized } = this.state;
        if(isAuthorized){
          return ( <Navigate to="/" />)
        }
        return (
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">Register</Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField margin="normal" required fullWidth id="email" value={email} label="Email Address" name="email" autoComplete="email" autoFocus onChange={this.handleEmailChange}/>
                  <TextField margin="normal" required fullWidth name="password" value={password} label="Password" type="password" id="password" autoComplete="current-password" onChange={this.handlePasswordChange}/>
                  <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick = {this.handleSubmit}>Register</Button>
                </Box>
              </Box>
            </Container>
        );
    }
}

export {RegisterPage};