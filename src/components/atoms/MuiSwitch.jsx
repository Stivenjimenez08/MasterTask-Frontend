import React, { useState } from 'react'
import {Box, FormControlLabel, Switch, Typography} from '@mui/material'

export const MuiSwitch = () => {

    const [checked, setChecked] = useState(false)
    const [color, setColor] = useState()

    const handleSwitch=(event) =>{
        setChecked(event.target.checked)
    }
    const getColor=()=>{
        if(checked){
            setColor("#ff0000")
        }else{
            setColor("#ffffff")
        }
        return color
    }

    return (
        <Box bgcolor={getColor}>
        <Typography variant='h4' align='center'>
            Mui switch example
        </Typography>
        <FormControlLabel label='change background' control={<Switch checked={checked} onChange={handleSwitch}/>}/>
        </Box>
    )
}
