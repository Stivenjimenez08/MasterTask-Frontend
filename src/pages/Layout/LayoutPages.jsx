import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogout } from '../../index';
import { ListItemBtn} from '../../components/index';

import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import TableRowsIcon from '@mui/icons-material/TableRows';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { Box, Drawer, AppBar, Toolbar, CssBaseline, Divider, List, Typography, 
ListItemButton, ListItemIcon, ListItemText} from '@mui/material';

const drawerWidth = 230;
const img = "https://www.w3schools.com/howto/img_avatar.png";

export const LayoutPages = ({children}) => {

  const user = useSelector(state => state.auth.user)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () =>{
      dispatch(fetchLogout())
      navigate('/')
  }

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <TextSnippetIcon sx={{mr:1, ml:1}}/>
          <Typography variant="h6" noWrap component="div">
            Master Task
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
      <Toolbar />
        <div className='contPhotoLayout'>
          {
            (user?.photo) ? <img src={user?.photo} className='photolayout'/> : <img src={img} className='photolayout'/> 
          }
           
          {
            (user?.userName ? <p>{user?.userName}</p> : '')
          } 
        </div>
        <Divider/>
        <Box sx={{ overflow: 'auto' }}>
          <List>
           <ListItemBtn title={'Task Board'} route={"/Boardpage"}> <TableRowsIcon/> </ListItemBtn>
           <ListItemBtn title={'Tasks'} route={"/Taskpage"}> <ListIcon/> </ListItemBtn>
           <ListItemBtn title={'Task Filter'} route={"/Filterpage"}> <FilterAltIcon/> </ListItemBtn>
           <ListItemBtn title={'Calendar'} route={"/Calendarpage"}> <InsertInvitationIcon/> </ListItemBtn>
           <ListItemBtn title={'Profile'} route={"/UserPage"}> <ManageAccountsIcon/> </ListItemBtn>

           <ListItemButton onClick={()=>{handleLogout()}} >
            <ListItemIcon> <LogoutIcon/> </ListItemIcon>
            <ListItemText>Logout</ListItemText>
           </ListItemButton>
           
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
