import { Box, IconButton, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
     <Typography sx={{fontSize:"13px"}}>Created By</Typography>   
     <a href='https://mofedprofile.netlify.app' >
      <Typography sx={{fontSize:"14px", fontFamily:"initial", fontWeight:"bold", color:"black"}}>Mofed Makalda</Typography>
     </a>
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <IconButton  onClick={() => window.open('https://www.instagram.com/mofedmk', '_blank')} aria-label="Instagram"
        >
        <InstagramIcon sx={{fontSize:"20px", color:"black"}} />
        </IconButton >   
        <IconButton  onClick={() => window.open('https://mofedprofile.netlify.app', '_blank')} aria-label="Instagram"
        >
        <LanguageIcon sx={{fontSize:"20px", color:"black"}} />
        </IconButton>   
    </Box>
    
    </Box>
  )
}
export default Footer