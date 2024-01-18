import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ShowTask = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

//   const id = 1;

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         `${import.meta.env.VITE_URL_SERVER}api/notes/consultNoteByUser/${id}`
//       );
//       console.log(response)
//       setData(response.data.users);
//     };
//     fetchData();
//   }, []);

  return (
    <> <h1>Hola</h1>
     <h2>hola</h2></>
   
  )
};

