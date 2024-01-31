import axios from "axios";
import * as Yup from "yup";
import { Layout } from "../Layout";
import { Link as RouterLink, useNavigate } from "react-router-dom";

import "../../../style.css";
import Swal from "sweetalert2";
import { Formik } from "formik";
import EmailIcon from "@mui/icons-material/Email";
import { Button, Grid, InputAdornment, Link, TextField } from "@mui/material";

export const Recuperate = () => {

  const navigate = useNavigate()
  const handleComplete = () => {
    setTimeout (()=>{
      navigate("/");
    }, 1500)
  };

  return (
    <Layout title="Recover your account">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Este campo es obligatorio")
            .email("Direccion de correo no valida"),
        })}
        onSubmit={async (values) => {
          
          const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/auth/sendEmail`, values);
          
            Swal.fire({
             title: "Info",
             text: response.data.msg,
             icon: "success"
           })
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid container>
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

              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={12} sx={{ mt: 2 }}>
                  <Button fullWidth type="submit" id="button" onClick={handleComplete}>
                    send recovery link
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link
                component={RouterLink}
                underline="none"
                to="/"
                id="link"
              >
                Back to login
              </Link>
            </Grid>
          </form>
        )}
      </Formik>
    </Layout>
  );
};
