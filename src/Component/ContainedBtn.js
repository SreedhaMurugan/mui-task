import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"
  

function ContainedBtn() {

    const navigate = useNavigate();
  
  return (
    <div>
    <Stack spacing={2} direction="row">
       <Button variant="contained" onClick={()=>navigate("/first")}>Contained</Button>
    </Stack>
    </div>
  )
}

export default ContainedBtn
