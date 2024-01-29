import axios from "axios";
import { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import "../../../StyleComponents.css";
import { useSelector } from "react-redux";

export const FilterTask = () => {

  const [priority, setPriority] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedPriority, setSelectedPriority] = useState("");
  
  const user = useSelector((state) => state.auth.user);


  const fetchDataPriority = async () => {
    try {
      const priorityResponse = await axios.get(
        `${
          import.meta.env.VITE_URL_SERVER
        }api/notes/consultNoteByFilter/${selectedState}/${selectedPriority}/${user?.id}`
      );
      setPriority(priorityResponse.data.note);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchDataPriority();
  }, [selectedPriority, selectedState]);

  return (
    <div className="contFilter">
      <div className="content">
        <div className="contentSelect">
          <div className="cont">
            <p>Selecciona la prioridad</p>
            <FormControl fullWidth sx={{ mt: 2 }}>
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
          <div className="cont">
            <p>Selecciona el estado</p>
            <FormControl fullWidth sx={{ mt: 2 }}>
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
        </div>

        <div className="contentCards">
          {priority.map((note) => (
            <Paper elevation={3} key={note.id} className="note">
              <h3 className="noteTitle"> {note.title} </h3>
              <p className="description">{note.description}</p>
              <div className="contDates">
                <p className="noteDate">
                  {" "}
                  Expiration Date: {note.expirationDate}{" "}
                </p>
                <p className="notePriority">
                  {" "}
                  Priority: {note.prioritie.title}{" "}
                </p>
                <p className="noteState"> State: {note.state.title} </p>
              </div>
            </Paper>
          ))}
        </div>
      </div>
    </div>
  );
};
