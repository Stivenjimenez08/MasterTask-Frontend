import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'
import { Dialog, DialogActions, DialogTitle,Button } from "@mui/material"

export const DeleteTask = ({ isOpen, handleClose, id, handleDeleteComplete, fetchData}) =>{
    
    const handleDetele =async() => {
        const response = await axios.delete(`${import.meta.env.VITE_URL_SERVER}api/notes/deleteNote/${id}`)

        handleDeleteComplete();
        handleClose();
        fetchData();

        Swal.fire({
            tittle: "Info",
            text: response.data.msg,
            icon: "success"
        })
    }

    return(
        <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"¿Está seguro de eliminar esta nota?"}
            </DialogTitle>
            <DialogActions>
                <Button type='submit' variant='contained' color='error' onClick={handleDetele}>
                    Eliminar
                </Button>
                <Button onClick={handleClose} color="primary">
                    Cancelar
                </Button>
            </DialogActions>
        </Dialog>
    )
}
