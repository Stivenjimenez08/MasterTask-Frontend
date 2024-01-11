import { Button, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, Link, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { Layout } from "../Layout";
import { useState } from "react";
import "../../../style.css";

export const Register = () => {

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => { event.preventDefault(); };

  return (
    <Layout title="Create an account">
      <form action="">
        <Grid container>
          <FormControl fullWidth variant="standard" >
            <InputLabel htmlFor="standard-adornment-password">
              Username
            </InputLabel>
            <Input
              endAdornment={
                <InputAdornment position="end" sx={{mr:1}}> <PersonIcon /> </InputAdornment>
              }
            />
          </FormControl>

          <FormControl fullWidth variant="standard" sx={{mt:2}}>
            <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
            <Input
              endAdornment={
                <InputAdornment position="end" sx={{mr:1}}>
                  <EmailIcon />
                </InputAdornment>
              }
            />
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
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button  fullWidth id="button">
              Create an account
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} underline="none" to="/auth/login" sx={{ mt: 2, ml: 1 }} id="link">
            Already have an account? Enter
          </Link>
        </Grid>
      </form>
    </Layout>
  );
};
