import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  } from "@material-ui/core";
import background from './images/bgg.png';
import './css/login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, "email");
  console.log(password, "password");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/api/user/login', {
      email, 
      password
    }).then(res=>{
      console.log(res)
      if(res.data === "Success")
      {
        navigate('/create')
      }
  })
  };

  return (
    <div>
      <div className='container'>
        <img src={background} alt = "Not Found" />
        <div className="bg-text">
          <h2 style={{color: "#2E86C1"}}>Login</h2>

          <Grid container spacing={0} justifyContent="center" direction="row">
            <Grid item style={{width: "60%"}}>
              <Grid container direction="column" justifyContent="center" spacing={2} className="login-form">
                <Paper variant="elevation" elevation={2} className="login-background">
                  <Grid item >
                    <form onSubmit={handleSubmit}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <TextField type="email" placeholder="Email" fullWidth  name="email" variant="outlined" required autoFocus
                            value={email}  onChange={(event) =>setEmail(event.target.value)}
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            type="password" placeholder="Password" fullWidth  name="password" variant="outlined" required
                            value={password} onChange={(event) =>setPassword(event.target.value)}
                          />
                        </Grid>
                        <Grid item style={{marginTop: "30px"}}>
                <Button variant="contained" color="primary" type="submit" className="button-block">
                  Submit
                </Button>
              </Grid>
                        
                      </Grid>
                    </form>
                  </Grid>
                </Paper>
              </Grid>
              
            </Grid>
          </Grid>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
