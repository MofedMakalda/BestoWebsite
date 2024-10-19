import { Box } from '@mui/material'
import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CoffeeIcon from '@mui/icons-material/Coffee';


export const Icons = () => {
  return (
    <Box sx={{display:"flex",marginTop:"20px" ,flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
        <LocalDiningIcon sx={{ fontSize: 30, color: "orange",  }} />
        <LunchDiningIcon sx={{ fontSize: 30, color: "orange" }} />
        <CoffeeIcon sx={{ fontSize: 30, color: "orange" }} />
    </Box> 
  )
}
