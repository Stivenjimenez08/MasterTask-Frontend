import axios from "axios";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import '../../../StyleComponents.css'

export const FilterTask = () => {

    const[state, setState] = useState([])
    const[priority, setPriority] = useState([])
    const [selectedState, setSelectedState] = useState("");
    const [selectedPriority, setSelectedPriority] = useState("");


    const fetchDataPriority = async () => {
        try {

            const priorityResponse = await axios.get(`${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByPriority/${selectedPriority}`);
            setPriority(priorityResponse.data.note);

          } catch (error) {
            console.error("Error al obtener datos:", error);
          }
    }
    const fetchDataState = async () => {
        try {

            const stateResponse = await axios.get(`${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByState/${selectedState}`);
            setState(stateResponse.data.note);
           
          } catch (error) {
            console.error("Error al obtener datos:", error);
          }
    }

    useEffect(() => {
    fetchDataState();
  }, [selectedState]);

  useEffect(() => {
    fetchDataPriority();
  }, [selectedPriority]);

  return (

    <div className="contFilter">

      <div className="content">
        <div className="contentSelect"> 
        <p>Selecciona la prioridad</p>
        <FormControl fullWidth sx={{ mt: 2 }} >
          <InputLabel id="demo-simple-select-label">PRIORITY</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="idPriority"
            value={selectedPriority}
            label="PRIORITY"
            onChange={(e) => setSelectedPriority(e.target.value)}
          >
            <MenuItem value={1}>Baja</MenuItem>
            <MenuItem value={2}>Media</MenuItem>
            <MenuItem value={3}>Alta</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className="contentCards">
        
        {priority.map((note) => (
          <Paper elevation={3} key={note.id} className="note" >
            <h3 className="noteTitle"> {note.title} </h3>
            <p className="description">{note.description}</p>
            <div className="contDates">
              <p className="noteDate"> Expiration Date: {note.expirationDate} </p>
              <p className="notePriority"> Priority: {note.prioritie.title} </p>
                <p className="noteState"> State: {note.state.title} </p>
            </div>
            </Paper>
        ))}
      </div>
      </div>

      <div className="content">
        <div className="contentSelect">
        <p>Selecciona el estado</p>
        <FormControl fullWidth sx={{ mt: 2 }} > 
          <InputLabel id="demo-simple-select-label">STATE</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="idState"
            value={selectedState}
            label="STATE"
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <MenuItem value={1}>Pendiente</MenuItem>
            <MenuItem value={2}>En proceso</MenuItem>
            <MenuItem value={3}>Completado</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className="contentCards">
        {state.map((note) => (
          <Paper elevation={3} key={note.id} className="note" >
            <h3 className="noteTitle"> {note.title} </h3>
            <p className="description">{note.description}</p>
            <div className="contDates">
              <p className="noteDate"> Expiration Date: {note.expirationDate} </p>
              <p className="notePriority"> Priority: {note.prioritie.title} </p>
                <p className="noteState"> State: {note.state.title} </p>
            </div>
            </Paper>
        ))}
      </div>
      </div>
    </div>
  );
};
