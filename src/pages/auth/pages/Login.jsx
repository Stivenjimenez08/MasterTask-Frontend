import { Button, Grid, IconButton, InputAdornment, Link, TextField, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { fetchLogin } from "../../../lib/slice/authSlice";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../Layout";
import { useState } from "react";
import { Formik } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";
import "../../../style.css";

export const Login = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector(state => state.auth.user)
  const loading = useSelector(state => state.auth.loading)

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log("login" ,user)

  if(loading){
    return <>Cargando...</>
  }
  // if(!user){
  //   navigate("/auth/login")
  // }

  if(user){
    navigate("/notes/TaskPage")
  }

  return (
    <Layout title="Login" id="layout">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Este campo es obligatorio")
            .email("Direccion de correo no valida"),
          password: Yup.string()
            .required("Este campo es obligatorio")
            .min(8, "Complete 8 caracteres en el campo contraseña"),
        })}
        onSubmit={ async (values) => {

          const response = await dispatch(fetchLogin(values))
          if(response.payload.login){
            return navigate("/notes/TaskPage")
          }
          console.log(response);      
      }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="standard"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ mr: 1 }}>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              variant="standard"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
              helperText={errors.password}
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Grid container spacing={2} sx={{ mb: 3, mt: 2 }}>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" fullWidth id="button">
                  Login
                </Button>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link
                component={RouterLink}
                underline="none"
                to="/auth/register"
                id="link"
              >
                Create an account
              </Link>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link
                component={RouterLink}
                underline="none"
                to="/auth/recuperate"
                id="link"
                sx={{ mt: 1 }}
              >
                Can't sign in?
              </Link>
            </Grid>
          </form>
        )}
      </Formik>
    </Layout>
  );
};
