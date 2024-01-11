import { Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Link, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { Layout } from "../Layout";
import { useState } from "react";
import "../../../style.css";

export const Login = () => {

  const [showPassword, setShowPassword] = useState ( false );

  const handleClickShowPassword = () => setShowPassword ( (show) => !show );

  const handleMouseDownPassword = (event) => { event.preventDefault() };

  return (
    
    <Layout title="LOGIN" id="layout">
      <form action="">
        <Grid container>

          <FormControl fullWidth variant="standard">
            <InputLabel >
              Email
            </InputLabel>
            <Input 
              endAdornment={ <InputAdornment position="end" sx={{mr:1}}> <EmailIcon/> </InputAdornment> }/>
          </FormControl>

          <FormControl fullWidth variant="standard" sx={{mt:2}}>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
                }
              />
          </FormControl>

          <Grid container spacing={2} sx={{ mb: 3,mt:2 }} >
            <Grid item xs={12} >
              <Button variant="contained" fullWidth id="button">
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link  component={RouterLink} underline="none" to="/auth/register" id="link">
            Create an account
          </Link>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} underline="none" to="/auth/recuperate" id="link" sx={{ mt: 1 }} >
            Can't sign in?
          </Link>
        </Grid>
      </form>
    </Layout>
  );
};
