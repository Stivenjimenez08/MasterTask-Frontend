import * as React from 'react';
import { Box, Drawer, AppBar, Toolbar, CssBaseline, Divider, List, Typography} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import LogoutIcon from '@mui/icons-material/Logout';
import TableRowsIcon from '@mui/icons-material/TableRows';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import { ListItemBtn } from '../../components/atoms/ListItem';

const drawerWidth = 230;
const img = 'https://www.w3schools.com/howto/img_avatar.png'
const name='stiven jimenez'

export const LayoutPages = ({children}) => {

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
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
          <img src={img} className='photolayout'/>
          <p>{name}</p>
        </div>
        
        <Box sx={{ overflow: 'auto' }}>
          <List>
           <ListItemBtn title={'Task Board'} route={"/notes/Dragpage"}> <TableRowsIcon/> </ListItemBtn>
           <ListItemBtn title={'Tasks'} route={"/notes/Taskpage"}> <ListIcon/> </ListItemBtn>
           <ListItemBtn title={'Calendar'} route={"/notes/Calendarpage"}> <InsertInvitationIcon/> </ListItemBtn>
           <ListItemBtn title={'Profile'} route={"/notes/Userpage"}> <ManageAccountsIcon/> </ListItemBtn>
           <ListItemBtn title={'Logout'} > <LogoutIcon/> </ListItemBtn>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
