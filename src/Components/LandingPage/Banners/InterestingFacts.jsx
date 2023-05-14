import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal';
import CountUp from "react-countup";
import legalteam from '../../../assets/legalteam.webp'
const useStyle = makeStyles((theme)=>{
    return {
        container:{
            display:'flex',
            justifyContent:'center',
            background:`linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${legalteam})`
        },
        subContainer:{
            width:'100%',
            maxWidth:'1440px',
            padding:'5%',
            display:'flex',justifyContent:'space-evenly',
            alignItems:'center',gap:'20px',
            [theme.breakpoints.down('md')]:{
                flexDirection:'column',
                gap:'20px'
            }
        },ContentBox: {width:'100%',maxWidth:'250px'}
  
    }
})

const InterestingFacts = () => {

    const {container,subContainer,ContentBox} = useStyle()
    const [countingData]=useState([
        {
            count:3500,
            title:'Trusted clients'
        },
        {
            count:2000,
            title:'Solved Cases'
        },
        
        {
            count:800,
            title:'Awards Win'
        },{
            count:2450,
            title:'Winning Case'
        },
    ])
  return (
    <Box className={container}>
        

        <Box className={subContainer}>
        <Fade direction='up' className={ContentBox}>
                <Box >
                    <Typography color={'primary'}>
                        Some
                    </Typography>
                    <Typography variant='h3' sx={{color:(theme)=>theme.palette.white.main}}>
                            Interesting Facts
                    </Typography>
                </Box>
            </Fade>

              {
                countingData?.map((counting,i)=>{
                    return <Fade key={i} direction='up' duration={500*(i)} className={ContentBox}><Box  >
                        <Typography variant='h3' sx={{color:(theme)=>theme.palette.white.main}}>
                            <CountUp end={counting?.count} duration={1} />
                        </Typography>
                            <Box>
                                <Typography variant='h6' sx={{color:(theme)=>theme.palette.white.main,fontWeight:'bold'}}>
                                    {counting?.title}
                                </Typography>
                                </Box>
                        </Box></Fade>
                })
            }
        </Box>
    </Box>
  )
}

export default InterestingFacts