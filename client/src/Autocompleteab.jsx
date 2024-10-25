import React from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Autocompleteab = () => {

    let mern = ["html" ,"css","javascript","node.js","next.js"]

  return (
    <Autocomplete
      disablePortal
      options={mern}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Mern" />}  />
  )
}

export default Autocompleteab