import React from 'react';
import IconButton from '@mui/material/IconButton';
import {AppBar, Toolbar,Box, Typography} from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import flag from "../Images/united-states.png";
import SupportIcon from '@mui/icons-material/Support';



export const Navbar = () => {
 


  const navabarStyle = {background: "white",width:"100%"}
  const logoStyle = {color:"red",fontWeight:"600",fontSize:"2rem"}
  const helpTypoStyle = {color:'black',fontSize:"1.2rem",marginTop:"15px",marginRight:"30px"}
  const iconStyle ={ marginLeft: "15px" }


  return (
    <AppBar 
      position='relative'
      sx={navabarStyle}
      >
        <Toolbar>
            <Typography sx={logoStyle}>LOGO</Typography>


            <Box  display='flex' marginLeft="auto">
            <IconButton
              >
              <SupportIcon
                fontSize="large"
                sx={iconStyle}
              />
            </IconButton>

            <Typography sx={helpTypoStyle}>Help</Typography>
            
            <IconButton
              >
            <img
            alt="KhelManch"
            style={{width: "40px", height: "40px"}}
            src={flag}
            />
              </IconButton>
              <Typography sx={helpTypoStyle} >Deutsch | EUR</Typography>

              <IconButton
              >
              <AccountCircleOutlinedIcon
                fontSize="large"
                sx={{ marginTop: "9px", marginLeft: "15px" }}
              />
              </IconButton>
            </Box>
        </Toolbar>
    </AppBar>
  );
}
