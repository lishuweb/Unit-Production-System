import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper
  } from "@material-ui/core";
import background from './images/bgg.png';
import './css/signin.css';
// import { Link } from "react-router-dom";

const Login = () => {
  const [username, password] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className='container'>
        <img src={background} alt = "Not Found" />
        <div class="bg-text">
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
                            type="name" placeholder="Name" fullWidth  name="name" variant="outlined" required autoFocus
                            value={name} onChange={(event) =>
                                              this.setState({
                                              [event.target.name]: event.target.value,
                                              })
                                              }
                          />
                        </Grid>
                        <Grid item>
                          <TextField type="email" placeholder="Email" fullWidth  name="username" variant="outlined" required 
                            value={username}  onChange={(event) =>
                                                this.setState({
                                                [event.target.name]: event.target.value,
                                                })
                                                }
                          />
                        </Grid>
                        <Grid item>
                          <TextField
                            type="password" placeholder="Password" fullWidth  name="password" variant="outlined" required
                            value={password} onChange={(event) =>
                                              this.setState({
                                              [event.target.name]: event.target.value,
                                              })
                                              }
                          />
                        </Grid>
                        <Grid item>
                          <input type="file" accept="image/*" placeholder='Profile' className='signImg'/>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item style={{marginTop: "30px"}}>
                <Button variant="contained" color="primary" type="submit" className="button-block">
                  Submit
                </Button>
              </Grid>
              {/* <Grid item style={{marginTop: "30px"}}>
                Already have an account?
                <a href='Login.jsx' style={{marginLeft: "10px"}} className='sign'>Login</a>
              </Grid> */}
              {/* <BrowserRouter>
                <Routes>
                <Route path="/Login" component={Login} />
                </Routes>
              </BrowserRouter> */}
              
              
            </Grid>
          </Grid>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
