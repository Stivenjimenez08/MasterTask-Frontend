import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { useSelector } from "react-redux";

import Swal from "sweetalert2";
import { Formik } from "formik";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button,
TextField, InputLabel, MenuItem, FormControl, Select} from "@mui/material";
import '../../../StyleComponents.css'

export const CreateTask = ({ isOpen, handleClose, updateState }) => {

  const user = useSelector(state => state.auth?.user)

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Formik
        initialValues={{ title: "", description: "", expirationDate: "", idPriority: "", idState: "", idUser: user?.id }}
        validationSchema={Yup.object ({
            description: Yup.string().required('Este campo es obligatorio'),
            idPriority: Yup.number().required('Este campo es obligatorio'),
            idState: Yup.number().required('Este campo es obligatorio')
          })}
  
        onSubmit={async (values, {resetForm}) => {
          try {
            const response = await axios.post(
              `${import.meta.env.VITE_URL_SERVER}api/notes/createNote`,
              values
            );
            updateState();
            resetForm();
            handleClose();
            
            Swal.fire({
              title: "Info",
              text: response.data.msg,
              icon: "success"
            })
          } catch (error) {
            console.error("Error al crear la nota:", error);
          }
          
        }}
      >
        {({ values, errors, handleChange, handleSubmit }) => (

          <form onSubmit={handleSubmit}>
            <DialogTitle>
              <TextField
                sx={{ mt: 1 }}
                fullWidth
                id="title"
                name="title"
                label="Title"
                onChange={handleChange}
                value={values.title}
                error={errors.title}
                helperText={errors.title}
              />
            </DialogTitle>
            <DialogContent>
              <TextField sx={{mt:1}}
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                maxRows={5}
                variant="outlined"
                onChange={handleChange}
                value={values.description}
                error={errors.description}
                helperText={errors.description}
              />
              <TextField sx={{mt:2}}
                id="expirationDate" 
                name="expirationDate" 
                type="date" 
                fullWidth
                value={values?.expirationDate} 
                onChange={handleChange} 
                inputProps={{
                  min: new Date().toISOString().split('T')[0] 
                }}
              />
          
              <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="idPriority"
                  label="Priority"
                  onChange={handleChange}
                  value={values.idPriority}
                  error={errors.idPriority}
                  helperText={errors.idPriority}
                >
                  <MenuItem value={1}>Baja</MenuItem>
                  <MenuItem value={2}>Media</MenuItem>
                  <MenuItem value={3}>Alta</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mt:2}}>
                <InputLabel id="demo-simple-select-label">State</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="idState"
                  label="State"
                  value={values.idState}
                  onChange={handleChange}
                  error={errors.idState}
                  helperText={errors.idState}
                >
                  <MenuItem value={1}>Pendiente</MenuItem>
                  <MenuItem value={2}>En proceso</MenuItem>
                  <MenuItem value={3}>Completado</MenuItem>
                </Select>
              </FormControl>
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button type="submit">Guardar</Button>
            </DialogActions>
          </form>
        )}
      </Formik>
    </Dialog>
  );
};
