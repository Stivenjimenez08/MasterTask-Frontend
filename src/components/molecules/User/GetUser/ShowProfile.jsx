import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import "../../../../style.css";

const img = "https://www.w3schools.com/howto/img_avatar.png";

export const ShowProfile = () => {

  const user = useSelector(state => state.auth.user)

  const [data, setData] = useState([]);
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_URL_SERVER}api/user/userById/${user?.id}`
    );
    setData(response.data.users);
  };

  useEffect(() => {
    fetchData();
  }, [user?.id]);

  const handleEdit = () =>{
    navigate("/notes/EditUser")
  }
  const handleEditPassword = () =>{
    navigate("/notes/EditPassword")
  }

  return (
    
    <div className="formProfile">
      <h2>MY PROFILE</h2>
      <div className="contentprofile">
        {
          (user?.photo) ? <img src={user?.photo} className='photolayout'/>  : <img src={img} className='photolayout'/> 
        }
        
      </div>
      <form>
        <div className="contentTexfield">
          <TextField
            id="names"
            name="names"
            label="Names"
            variant="standard"
            value={data?.names}
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="lastName"
            name="lastName"
            label="Last names"
            variant="standard"
            value={data?.lastName}
            InputLabelProps={{
              shrink: true
            }}
          />
        </div>
        <div className="contentTexfield">
          <TextField
            id="userName"
            name="userName"
            label="Username"
            variant="standard"
            value={data?.userName}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value={data?.email}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>

        <div className="contentTexfield">
          <Button id="btnProfile" onClick={handleEdit}>
            {" "}
            Update Profile{" "}
          </Button>
          <Button id="btnProfile" onClick={handleEditPassword}>
           
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
};
