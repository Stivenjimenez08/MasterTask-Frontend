import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../../StyleComponents.css'
import { TextField } from "@mui/material";

export const ShowTask = () => {
  
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    // Aquí puedes hacer lo que necesites con el ID de la tarjeta
    console.log("Se hizo clic en la tarjeta con ID:", id);
    // Puedes navegar a otra página o realizar otras acciones según tu lógica
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByUser/${
          user?.id
        }`
      );
      console.log(response.data.note);
      setData(response.data.note);
    };
    fetchData();
  }, [user]);

  return (
    <>
      <div className="contentCards">
        {data.map((note, index) => (
          <div key={index} className="note" onClick={() => handleCardClick(note.id)}>
            <h3 className="noteTitle"> {note.title} </h3>
            <TextField sx={{mb:4}}
              className="noteDescription"
              label="Description"
              multiline
              maxRows={3}
              variant="filled"
              defaultValue={note.description}
              InputLabelProps={{
                shrink: true
              }}
              InputProps={{
                readOnly: true
              }}
            />
            <div className="contDates">
              <p className="noteDate"> Expiration Date: {note.expirationDate} </p>
              <p className="notePriority"> Priority: {note.idPriority} </p>
              <p className="noteState"> State: {note.idState} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};