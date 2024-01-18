import { Button, Grid, IconButton, InputAdornment, Link, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { Layout } from "../Layout";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../../style.css";
import Swal from "sweetalert2";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Layout title="Create an account" >
      <Formik
        initialValues={{ userName: "", email: "", password: "" }}
        validationSchema={Yup.object({
          userName: Yup.string()
            .required("Este campo es obligatorio")
            .min(4, "El Username debe contener al menos 4 caracteres"),
          email: Yup.string()
            .required("Este campo es obligatorio")
            .email("Direccion de correo no valida"),
          password: Yup.string()
            .required("Este campo es obligatorio")
            .min(8, "Complete 8 caracteres en el campo contraseña"),
        })}
        onSubmit={async (values) => {
          const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/user/createUser`, values);
          console.log(response);
          
            Swal.fire({
             tittle: "Info",
             text: response.data.msg,
             icon: "success"
           })
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="textFielForm">

              <TextField
                id="userName"
                name="userName"
                label="Username"
                variant="standard"
                onChange={handleChange}
                value={values.userName}
                error={errors.userName}
                helperText={errors.userName}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" sx={{ mr: 1 }}>
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
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

            
              <Button
                type="submit"
                id="button"
                >
                Create an account
              </Button>
            
              </div>

            <Grid container direction="row" justifyContent="end">
              <Link
                sx={{ mt: 2, ml: 1 }}
                component={RouterLink}
                underline="none"
                to="/auth/login"
                id="link"
              >
                Already have an account? Enter
              </Link>
            </Grid>
          </form>
        )}
      </Formik>
    </Layout>
  );
};
