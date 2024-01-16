import React, { useEffect, useState } from "react";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
// import { useSelector } from "react-redux";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import "../../../../style.css";
import Swal from "sweetalert2";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";


const id = 1;

export const EditPassword = () => {
  const [message,setMessage]= useState('')
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleComplete = () => {
    setTimeout (()=>{
      navigate("/notes/UserPage");
    }, 2000)
  };
  const handleBack = () => {
    setTimeout (()=>{
      navigate("/notes/UserPage");
    },200)
  };

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{
          id,
          password: "",
        }}
        validationSchema={Yup.object({
          password: Yup.string()
            .required("Este campo es obligatorio")
            .min(8, "Complete 8 caracteres en el campo contraseña"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          const response = await axios.put(
            `${import.meta.env.VITE_URL_SERVER}api/user/updateUser`,
            values
          );
          setMessage(response.data)
          Swal.fire({
            tittle: "Info",
            text: message.msg,
            icon: "success",
          });
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <div className="formProfile">
            <div className="backBtn">
              <Button onClick={handleBack} startIcon={<ArrowBackIcon/>} id="btnProfile">
                back to profile
              </Button>
            <h2>UPDATE YOUR PASSWORD</h2>
            </div>
          <form onSubmit={handleSubmit} className="passwordContent">
            <div className="contentTexfield">
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
            </div>
            <div className="updateBtn">
              <Button type="submit" id="btnProfileEdit" onClick={handleComplete}>
                Update Password
              </Button>
            </div>
          </form>
          </div>
        )}
      </Formik>
    </div>
  );
};
