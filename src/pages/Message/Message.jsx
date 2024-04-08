import React from 'react'
import {Grid} from '@mui/material'


const Message = () => {
  return (
    <div>
     <Grid container className='h-screen overflow-y-hidden'>
<Grid className='px-5' item xs={3}>

<div className='flex h-full justify-between space-x-2'>
  <div className='flex space-x-4 items-center py-5'>
<h1 className='text-xl font-bold'>Home</h1>

  </div>

</div>

</Grid>
<Grid item xs={9}></Grid>

     </Grid>
    </div>
  )
}

export default Message
