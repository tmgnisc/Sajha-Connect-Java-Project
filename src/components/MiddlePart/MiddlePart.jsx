import { Avatar } from '@mui/material'
import React from 'react'

const MiddlePart = () => {
  return (
    <div className='px-20'>
      <div className='py-5 flex items-center p-5 rounded-b-md'>
        <Avatar sx={{width:"5rem", height:"5rem"}} src='https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397_1280.png' className='flex flex-col items-center mr-4 cursor-pointer'/>

      </div>
     
    </div>
  )
}

export default MiddlePart
