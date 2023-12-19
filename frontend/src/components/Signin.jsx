import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper
  } from "@material-ui/core";
import background from './images/bgg.png';
import './css/signin.css';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [profile, setProfile] = useState("");
  const navigate = useNavigate();

  console.log(name, "name");
  console.log(email, "email");
  console.log(password, "password");
  // console.log(profile, "profile");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/user/postUser',
    {
      name,
      email,
      password
    }).then(res => console.log(res))
    .catch(err=>console.log(err));
    navigate('/login');
  };

  return (
    <div>
      <div className='container'>
        <img src={background} alt = "Not Found" />
        <div className="bg-text">
          <h2 style={{color: "#2E86C1"}}>Sign up</h2>

          <Grid container spacing={0} justifyContent="center" direction="row">
            <Grid item style={{width: "60%"}}>
              <Grid container direction="column" justifyContent="center" spacing={2} className="login-form">
                <Paper variant="elevation" elevation={2} className="login-background">
                  <Grid item >
                    <form onSubmit={handleSubmit}>
                      <Grid container direction="column" spacing={2}>
                      <Grid item>
                          <TextField
                            type="name" placeholder="Name" fullWidth  className="name" variant="outlined" required autoFocus
                            value={name} onChange={(event) =>setName(event.target.value)}
                          />
                        </Grid>
                        <Grid item>
                          <TextField type="email" placeholder="Email" fullWidth  className="username" variant="outlined" required 
                            value={email}  onChange={(event) =>setEmail(event.target.value)}
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            type="password" placeholder="Password" fullWidth  className="password" variant="outlined" required
                            value={password} onChange={(event) =>setPassword(event.target.value)}
                          />
                        </Grid>
                        {/* <Grid item>
                          < TextField
                            type="profile" placeholder='Profile' fullWidth className='signImg' variant="outlined" required
                          value={profile} onChange={(event) =>setProfile(event.target.value)}
                          />
                        </Grid> */}
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
              
              <p>Already have an account?</p>
              <Link to="/login">
                Login
              </Link>
            </Grid>
          </Grid>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
