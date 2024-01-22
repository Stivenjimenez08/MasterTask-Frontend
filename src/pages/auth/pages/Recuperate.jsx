import { Button, Grid, InputAdornment, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import { Layout } from "../Layout";
import { Formik } from "formik";
import "../../../style.css";
import * as Yup from "yup";

export const Recuperate = () => {
  return (
    <Layout title="Recover your account">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required("Este campo es obligatorio")
            .email("Direccion de correo no valida"),
        })}
        // onSubmit={async (values) => {
        //   const response = await axios.post(`${import.meta.env.VITE_URL_SERVER}api/user/createUser`, values);

        //     Swal.fire({
        //      tittle: "Info",
        //      text: response.data.msg,
        //      icon: "success"
        //    })
        // }}
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
                  <Button fullWidth id="button">
                    send recovery link
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="end">
              <Link
                component={RouterLink}
                underline="none"
                to="/auth/login"
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
