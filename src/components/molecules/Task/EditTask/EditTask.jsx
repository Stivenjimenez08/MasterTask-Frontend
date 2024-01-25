
import axios from "axios";
import { DeleteTask } from "../../../index";
import React, { useEffect, useState } from "react";

import { Dialog, DialogTitle, DialogContent, DialogActions, Button, 
TextField, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import { Formik } from "formik";
import Swal from "sweetalert2";

export const EditTask = ({ isOpen, handleClose, note, handleSave, fetchData}) => {

  const id = note?.id;
  const [data, setData] = useState([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteById/${id}`
        );
        
        setData(response.data.note);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, [note]);

  const handleDeleteComplete = () => {
    handleClose(); 
    setIsDeleteDialogOpen(false); 
  };

  const handleOpenDeleteDialog = () => {
    setIsDeleteDialogOpen(true);
  };

  const handleCloseDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Formik
        enableReinitialize
        initialValues={{
          id: data[0]?.id,
          title: data[0]?.title || "",
          description: data[0]?.description || "",
          expirationDate: data[0]?.expirationDate || "",
          idPriority: data[0]?.idPriority || "",
          idState: data[0]?.idState || "",
        }}
        onSubmit={async (values) => {
          
          const response = await axios.put( `${import.meta.env.VITE_URL_SERVER}api/notes/updateNote`,  values );
          handleSave(values)
          
          Swal.fire({
            tittle: "Info",
            text: response.data.msg,
            icon: "success"
          })
        }}
      >
        {({ values,  handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DialogTitle>
              <TextField
                sx={{ mt: 1 }}
                fullWidth
                id="title"
                name="title"
                label="Title"
                onChange={handleChange}
                value={values?.title}
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
                value={values?.description}
              />
          
              <FormControl fullWidth sx={{mt:2}}>
                <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="idPriority"
                  value={values?.idPriority}
                  label="Priority"
                  onChange={handleChange}
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
                  value={values?.idState}
                  label="State"
                  onChange={handleChange}
                >
                  <MenuItem value={1}>Pendiente</MenuItem>
                  <MenuItem value={2}>En proceso</MenuItem>
                  <MenuItem value={3}>Completado</MenuItem>
                </Select>
              </FormControl>
              
            </DialogContent>
            <DialogActions>
              <Button onClick={handleOpenDeleteDialog}>Eliminar nota</Button>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button type="submit">Guardar</Button>
            </DialogActions>
          </form>
        )}
      </Formik>

      <DeleteTask 
        id={id} 
        fetchData={fetchData}
        isOpen={isDeleteDialogOpen} 
        handleClose={handleCloseDeleteDialog} 
        handleDeleteComplete={handleDeleteComplete} 
      />
    </Dialog>
  );
};
