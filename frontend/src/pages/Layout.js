import { AppBar, Avatar, Button, Toolbar, Typography, makeStyles, withStyles, withWidth } from "@material-ui/core";
import { Outlet, Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import YardIcon from '@mui/icons-material/Yard';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import './layout.css'


const Layout = () => {
  
  return (
    <>
      <AppBar position="static" className='appbar'>
        <Toolbar>
            <div>
            <ul className='list'>
              
          <li>
            <Link to="/" className='list-item'><HomeIcon fontSize="small" />Home</Link>
          </li>

              <li>
                <Link to={`/tomato`} className='list-item'><YardIcon fontSize="small" />Disease Classification</Link>
              </li>
         </ul>
        </div>
            <div className='grow' />
            <Typography className='nottitle' variant="h5">
              Tech Predators
            </Typography> 
          </Toolbar>
      </AppBar>
      <Outlet />
    </>
  )
};

export default Layout;