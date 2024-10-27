import { Box } from '@mui/material'
import React from 'react'
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CoffeeIcon from '@mui/icons-material/Coffee';


export const Icons = () => {
  return (
    <Box sx={{display:"flex",marginTop:"5px" ,flexDirection:"row", justifyContent:"left", alignItems:"left", width:"100%", position:"absolute", bottom:"5px", left:"5px"}}>
        <LocalDiningIcon sx={{ fontSize: 15, color: "orange",  }} />
        <LunchDiningIcon sx={{ fontSize: 15, color: "orange" }} />
        <CoffeeIcon sx={{ fontSize: 15, color: "orange" }} />
    </Box> 
  )
}
