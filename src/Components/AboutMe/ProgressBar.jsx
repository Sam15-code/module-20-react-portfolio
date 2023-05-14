import { LinearProgress, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const ProgressBar = ({skill}) => {
  return (
    <Box sx={{textAlign:'left'}}>
    <LinearProgress variant='determinate' color='secondary'  sx={{height:'10px',borderRadius:'20px',background:(theme)=>theme.palette.primary.main}} value={skill?.percentage}  />
    <Box sx={{display:'flex',justifyContent:'space-between'}}>
        <Typography>{skill?.title}</Typography>
        <Typography>{skill?.percentage/10}/10</Typography>
    </Box>
    </Box>
  )
}

export default ProgressBar