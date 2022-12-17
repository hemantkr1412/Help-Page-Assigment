import React from 'react';
import { Button,Box, Typography,TextField,InputLabel} from "@mui/material";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemIcon from '@mui/material/ListItemIcon';
import ChatIcon from '@mui/icons-material/Chat';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import telegram from "../Images/telegram.png";
import whatsApp from "../Images/whatsapp.png";
import LiveChat from "../Images/comments.png";
import Twitter from "../Images/twitter.png";
import Linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import facebook from "../Images/facebook.png";
import QuizIcon from '@mui/icons-material/Quiz';
import MapIcon from '@mui/icons-material/Map';



export const Help = () => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
      };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
    const handleClick3 = () => {
      setOpen3(!open3);
  };
    
    const HeaderBoxStyle= {position:"absolute",width:"100%",height:"469px",background: "linear-gradient(1.32deg, #DCF5F5 8.23%, rgba(220, 245, 245, 0.46) 96.04%)" ,":before":{borderTopLeftRadius: "50% 100%",borderTopRightRadius:" 50% 100%"}}
    const TypoHeaderStyle= {fontSize:"2.5rem",fontWeight:"700",color:"#073A4D",fontFamily: 'Montserrat',letterSpacing: "0.02em",fontStyle:" normal",textAlign:"center"}
    const TypoSubHeaderStyle= {fontSize:"20px",fontWeight:"500",color:"#484848",fontFamily: 'Montserrat',letterSpacing: "0.02em",fontStyle:" normal",textAlign:"center",lineHeight:"24px"}
    const FAQBoxStyle= {width:"472px",height:"70px",background:"white",boxShadow: "5px 5px 10px #ccc",borderRadius:"10px",paddingTop:"15px"}
    const ListBoxStyle ={width:"800px",background:"white",boxShadow: "5px 5px 10px #ccc",borderRadius:"10px" ,marginTop:"3px"}
    const TextFieldStyle= {width:"300px"}
  return (
    <>
    <Box style={HeaderBoxStyle}>

      <Box sx={{marginTop:"100px"}}>
        
          <Typography style={TypoHeaderStyle}>Hello, how can we help you?</Typography>
          <Typography style={TypoSubHeaderStyle}>Find Travel guide, FAQ, chat,</Typography>

          <Box style={{display:"flex" ,justifyContent:"space-around",marginTop:"100px"}}>
            <Box style={FAQBoxStyle}>
                <Box style={{display:"flex",flexDirection:"row"}}>
                <QuizIcon 
                fontSize="large"
                sx={{color:'red',marginLeft:"100px"}}
                />
                <Typography style={{fontFamily: 'Montserrat',fontSize:"20px",fontWeight:"600",color:"#484848",letterSpacing: "0.02em",marginLeft:"100px"}}> FAQ</Typography>
                </Box>
                <Typography style={{fontFamily: 'Montserrat',fontSize:"15px",fontStyle:"normal",fontWeight:"600",color:"#484848",letterSpacing: "0.02em",marginLeft:"180px"}}> Lorem ipsum doolor sit amet</Typography>

            </Box>

            <Box style={FAQBoxStyle}>
                <Box style={{display:"flex",flexDirection:"row"}}>
                <MapIcon 
                fontSize="large"
                sx={{color:'red',marginLeft:"100px"}}
                />
                <Typography style={{fontFamily: 'Montserrat',fontSize:"20px",fontWeight:"600",color:"#484848",letterSpacing: "0.02em",marginLeft:"100px"}}> Travel Guide</Typography>
                </Box>
                <Typography style={{fontFamily: 'Montserrat',fontSize:"15px",fontStyle:"normal",fontWeight:"600",color:"#484848",letterSpacing: "0.02em",marginLeft:"180px"}}> Lorem ipsum doolor sit amet</Typography>
            </Box>
          
          </Box>

      </Box>

    </Box>
    <Box style={{position:"relative",display:"flex",justifyContent:"center",margin:"500px"}}>
    <Box sx={{}}>
        <List
        sx={ListBoxStyle}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
              <ListItemButton onClick={handleClick}>
                <ListItemIcon >
                    <ChatIcon 
                    fontSize="large"
                    sx={{color:'red'}}
                    />
                </ListItemIcon>
                <ListItemText primary="Chat" secondary="Lorem ipsum doolor sit amet" sx={{color:"black",fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700", fontSize: "80px", lineHeight: "108.92%"}} />
                  {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                <Box disablePadding sx={{bgcolor:"white" ,width:"760px",display:"flex",justifyContent:"space-around"}}>

                <Box>
                <img
                alt="Telegram"
                style={{width: "40px", height: "40px"}}
                src={telegram}
                />
                <Typography>Telegram</Typography>
                </Box>


                <Box>
                <img
                alt="WhatsApp"
                style={{width: "40px", height: "40px"}}
                src={whatsApp}
                />
                <Typography>WhatsApp</Typography>
                </Box>

                <Box>
                <img
                alt="Live Chat"
                style={{width: "40px", height: "40px"}}
                src={LiveChat}
                />
                <Typography>Live Chat</Typography>
                </Box>


                </Box>
              </Collapse>
        </List>

        <List
        sx={ListBoxStyle}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
              <ListItemButton onClick={handleClick2}>
                <ListItemIcon >
                <Diversity3Icon 
                fontSize="large"
                sx={{color:'red'}}
                
                />
                </ListItemIcon>
                <ListItemText primary="Social" secondary="Lorem ipsum doolor sit amet" sx={{color:"black",fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700", fontSize: "80px", lineHeight: "108.92%"}} />
                  {open2 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                <Box disablePadding sx={{bgcolor:"white" ,width:"760",display:"flex",justifyContent:"space-around"}}>

                <Box>
                <img
                alt="Telegram"
                style={{width: "40px", height: "40px"}}
                src={facebook}
                />
                <Typography>Facebook</Typography>
                </Box>

                <Box>
                <img
                alt="WhatsApp"
                style={{width: "40px", height: "40px"}}
                src={instagram}
                />
                <Typography>Instagram</Typography>
                </Box>

                <Box>
                <img
                alt="WhatsApp"
                style={{width: "40px", height: "40px"}}
                src={Twitter}
                />
                <Typography>Twitter</Typography>
                </Box>


                <Box>
                <img
                alt="WhatsApp"
                style={{width: "40px", height: "40px"}}
                src={Linkedin}
                />
                <Typography>Linkedin</Typography>
                </Box>


                </Box>
               </Collapse>
        </List>
        <List
        sx={ListBoxStyle}
        component="nav"
        aria-labelledby="nested-list-subheader"
        >
              <ListItemButton onClick={handleClick3}>
                <ListItemIcon >
                    <ContactMailIcon
                    fontSize="large"
                    sx={{color:'red'}}
                    
                    />
                </ListItemIcon>
                <ListItemText primary="Send Query" secondary="Lorem ipsum doolor sit amet" sx={{color:"black",fontFamily: 'Inter', fontStyle: "normal", fontWeight: "700", fontSize: "80px", lineHeight: "108.92%"}} />
                  {open3 ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
                  <Collapse in={open3} timeout="auto" unmountOnExit>
                  <Box disablePadding sx={{bgcolor:"white" ,width:"760px"}}>
                    
                    <Box sx={{display:"flex",justifyContent:"space-around"}}>
                      <Box>
                      <InputLabel >Name</InputLabel>
                      <TextField style={TextFieldStyle} name='name' placeholder='Name' />
                      </Box>


                      <Box>
                      <InputLabel >Email</InputLabel>
                      <TextField style={TextFieldStyle} name='email' placeholder='Email' />
                      </Box>
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"space-around"}}>
                      <Box>
                      <InputLabel >Subject</InputLabel>
                      <TextField style={TextFieldStyle} name='subject' placeholder='Subject' />
                      </Box>

                      <Box>
                      <InputLabel >Order No</InputLabel>
                      <TextField style={TextFieldStyle} name='orderNo' placeholder='Order Number' />
                      </Box>
                    </Box>

                    <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                      <Box>
                        <InputLabel >Query</InputLabel>
                        <TextField
                        placeholder="Write a Query"
                        multiline
                        sx={{width:"680px"}}
                        rows={7}
                        maxRows={8}
                        />
                      </Box>
                      <Button sx={{width:"150px" , marginTop:"20px",color:"white",bgcolor:'red'}} type="submit" variant="contained"  >
                      Send Message
                      </Button>
                    </Box>
                </Box>
              </Collapse>
        </List>
        </Box>
    </Box>
    </>
  )
}
