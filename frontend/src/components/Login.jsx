import React from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,
  } from "@material-ui/core";
import background from './images/bgg.png';
import './css/login.css';

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
          <h2 style={{color: "#2E86C1"}}>Login</h2>

          <Grid container spacing={0} justify="center" direction="row">
            <Grid item style={{width: "60%"}}>
              <Grid container direction="column" justify="center" spacing={2} className="login-form">
                <Paper variant="elevation" elevation={2} className="login-background">
                  <Grid item >
                    <form onSubmit={handleSubmit}>
                      <Grid container direction="column" spacing={2}>
                        <Grid item>
                          <TextField type="email" placeholder="Email" fullWidth  name="username" variant="outlined" required autoFocus
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
                        {/* <Grid item>
                          <Button variant="contained" color="primary" type="submit"  className="button-block">
                            Submit
                          </Button>
                        </Grid> */}
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
              Don't have account? 
              <Routes>
        <Route path = "/signin" element = { <Signin /> } />
        <Link to="/signin" element = {<Signin />}>Signup</Link>
        </Routes>
              
              </Grid> */}
              
            </Grid>
          </Grid>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
