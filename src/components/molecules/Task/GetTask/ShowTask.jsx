import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { EditTask } from "../EditTask/EditTask";
import '../../../StyleComponents.css'

export const ShowTask = () => {
  
  const [update, setUpdate] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const [data, setData] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  const handleCardClick = (note) => {
    setSelectedNote(note);
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleSaveNote = (updatedNote) => {
    
    setUpdate(prevState => !prevState);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByUser/${user?.id}`
        );
        setData(response.data.note);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    fetchData();
  }, [update]);

  return (
    <>
      <div className="contentCards">
        {data.map((note) => (
          <Paper elevation={3} key={note.id} className="note" onClick={() => handleCardClick(note)}>
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
      <EditTask isOpen={isDialogOpen} handleClose={handleCloseDialog} note={selectedNote} handleSave={handleSaveNote} />
    </>
  );
};