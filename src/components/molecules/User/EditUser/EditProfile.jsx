import axios from "axios";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Button, TextField } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";
import "../../../../style.css";

export const EditProfile = () => {

  const user = useSelector(state => state.auth.user)
  const [data, setData] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}api/user/userById/${user?.id}`
      );
      setData(response.data.users);
    };
    fetchData();
  }, []);
  
  const handleComplete = () => {
    setTimeout (()=>{
      navigate("/notes/UserPage");
    }, 1500)
  };
  const handleBack = () => {
    setTimeout (()=>{
      navigate("/notes/UserPage");
    },100)
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          id: user?.id,
          names: data?.names || "",
          lastName: data?.lastName || "",
          email: data?.email || "",
          userName: data?.userName || "",
          photo: data?.photo || "",
        }}
        validationSchema={Yup.object({
          names: Yup.string()
            .required("Este campo es obligatorio")
            .min(4, "names debe contener al menos 4 caracteres"),
          lastName: Yup.string(),
          userName: Yup.string()
            .required("Este campo es obligatorio")
            .min(4, "El Username debe contener al menos 4 caracteres"),
          email: Yup.string()
            .required("Este campo es obligatorio")
            .email("Direccion de correo no valida"),
          photo: Yup.string(),
        })}
        onSubmit={async (values) => {
          const response = await axios.put(
            `${import.meta.env.VITE_URL_SERVER}api/user/updateUser`,
            values
          );
          Swal.fire({
            tittle: "Info",
            text: response.data.msg,
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
              <h2>UPDATE YOUR INFORMATION</h2>
            </div>
            
            <form onSubmit={handleSubmit} id="form">
              <div className="contentTexfield">
                <TextField
                  id="photo"
                  name="photo"
                  label="Photo URL"
                  variant="standard"
                  value={values.photo}
                  onChange={handleChange}
                  error={errors.photo}
                  helperText={errors.photo}
                />
              </div>
              <div className="contentTexfield">
                <TextField
                  id="names"
                  name="names"
                  label="Names"
                  variant="standard"
                  value={values.names}
                  onChange={handleChange}
                  error={errors.names}
                  helperText={errors.names}
                />
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last names"
                  variant="standard"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                  helperText={errors.lastName}
                />
              </div>
              <div className="contentTexfield">
                <TextField
                  id="userName"
                  name="userName"
                  label="Username"
                  variant="standard"
                  value={values.userName}
                  onChange={handleChange}
                  error={errors.userName}
                  helperText={errors.userName}
                />

                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  variant="standard"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                  helperText={errors.email}
                />
              </div>

              <div className="updateBtn">
                <Button type="submit" id="btnProfileEdit" onClick={handleComplete}>
                  update information
                </Button>
              </div>

            </form>
          </div>
        )}
      </Formik>
    </>
  );
};
