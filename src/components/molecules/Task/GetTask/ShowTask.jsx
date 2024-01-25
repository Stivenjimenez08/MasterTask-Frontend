
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { EditTask, CreateTask } from "../../../index";

import { SpeedDial, SpeedDialIcon, Paper } from '@mui/material';
import '../../../StyleComponents.css'

export const ShowTask = () => {
  
  const [update, setUpdate] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const [data, setData] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCreateTaskDialogOpen, setIsCreateTaskDialogOpen] = useState(false);

  
  const fetchData = async () => {
    try {
      const response = await axios.get( `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByUser/${user?.id}` );
      setData(response.data.note);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  const updateState = () => {
    setUpdate(prev => !prev);
  };
  const handleCardClick = (note) => {
    setSelectedNote(note);
    setIsDialogOpen(true);
  };
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleSaveNote = () => {
    setUpdate(prev => !prev);
    setIsDialogOpen(false);
  };
  const handleOpenCreateTaskDialog = () => {
    setIsCreateTaskDialogOpen(true);
  };
  

  return (
    <>
    <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 50, right: 30 }}
        icon={<SpeedDialIcon />}
        onClick={handleOpenCreateTaskDialog}
      />
      <div className="contentCards">
        {data.map((note) => (
          <Paper elevation={3} key={note.id} className="note" onClick={() => handleCardClick(note)}>
            <h3 className="noteTitle"> {note.title} </h3>
            <textarea className="noteDescription" value={note.description} />
            <div className="contDates">
              <p className="noteDate"> Expiration Date: {note.expirationDate} </p>
              <p className="notePriority"> Priority: {note.prioritie.title} </p>
                <p className="noteState"> State: {note.state.title} </p>
            </div>
            </Paper>
        ))}
      </div>
      <CreateTask isOpen={isCreateTaskDialogOpen} handleClose={() => setIsCreateTaskDialogOpen(false)} updateState={updateState}/>
      <EditTask isOpen={isDialogOpen} handleClose={handleCloseDialog} note={selectedNote} handleSave={handleSaveNote} />
    </>
  );
};