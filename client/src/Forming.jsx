import React from 'react'
import { useState } from 'react'
import {TextField , Button , Typography ,FormGroup , FormControlLabel, Checkbox ,FormControl , InputLabel,Select,MenuItem,RadioGroup,Radio,FormLabel} from '@mui/material'


const Forming = () => {

    let [state,setState] = useState({
        name:"",
        email:"",
        password:""
    })

    let changing =({target:{name,value}})=>{
        setState({...state , [name]:value})
        // console.log(value);
    }

    let submitted =(e)=>{
        e.preventDefault();
        console.log(state)
        setState({name:"",email:"",password:""})
    }

  return (
<>
<Typography type="text" variant='h4'>Details</Typography>

<TextField name='name' type='name' id="standard-basic"  variant="standard" label="name" onChange={changing} value={state.name}/> <br/>
<TextField name='email' type='email'   variant="standard" label="email" onChange={changing} value={state.email} /> <br/>
<TextField name='password' type='password'   variant="standard" label="password" onChange={changing} value={state.password} />
<br/>
<FormGroup>
    <FormControlLabel label="i agree T&C" control={<Checkbox  />} error />
</FormGroup>


<br />
<FormControl sx={{ m: 1, minWidth: 120 }}>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </Select>

</FormControl>
<br/>
<br/>


<FormControl>
       <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
<RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue={"male"}
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>


</FormControl>

<br/>
<Button variant='contained'  >Submit</Button>

</>
)
}

export default Forming