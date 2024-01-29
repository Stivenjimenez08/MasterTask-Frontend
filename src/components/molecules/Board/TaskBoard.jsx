import axios from 'axios';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { Paper } from '@mui/material';
import '../../StyleComponents.css'

export const TaskBoard = () => {

  const [pending, setPending] = useState([])
  const [process, setProcess] = useState([])
  const [complete, setComplete] = useState([])
  const user = useSelector((state) => state.auth.user);

  const fetchData = async () => {
    const pending = await axios.get( `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByState/${1}/${user?.id}` );
    const process = await axios.get( `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByState/${2}/${user?.id}` );
    const complete = await axios.get( `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByState/${3}/${user?.id}` );

    setPending(pending.data.note)
    setProcess(process.data.note)
    setComplete(complete.data.note)
  }
  useEffect(() => {
    fetchData();
  }, [user?.id]);

  return (

    <div className="containerBoard">
      <div className="column column--1">
        <p className='titleBoard'>Pendiente</p>
        {pending.map((note) => (
          <Paper elevation={3} key={note.id} className="noteBoard">
            <h3 className="titleNote"> {note.title} </h3>
            <p className="descriptionNote">{note.description}</p>
          </Paper>
        ))}
      </div>

      <div className="column column--2">
        <p className='titleBoard'>En Proceso</p>
        {process.map((note) => (
          <Paper elevation={3} key={note.id} className="noteBoard">
            <h3 className="titleNote"> {note.title} </h3>
            <p className="descriptionNote">{note.description}</p>
          </Paper>  
        ))}
      </div>

      <div className="column column--3">
        <p className='titleBoard'>Completado</p>
        {complete.map((note) => (
          <Paper elevation={3} key={note.id} className="noteBoard">
            <h3 className="titleNote"> {note.title} </h3>
            <p className="descriptionNote">{note.description}</p>
          </Paper>
        ))}
      </div>
    </div>
  )
}
