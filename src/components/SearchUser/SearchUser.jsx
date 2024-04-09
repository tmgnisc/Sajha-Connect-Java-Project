import React from 'react'
import {Card, CardHeader, Avatar} from '@mui/material'

const SearchUser = () => {

  const handleSearchUser=()=>{
    console.log("search user.....")
  }

  const handleClick=(id)=>{
    console.log(id)
  }

  return (
    <div>
     <div className='py-5 relative'>
      <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full' placeholder='search user' onChange={handleSearchUser} type="text" />

     </div>
     {
      true && <Card>
<CardHeader onClick={()=>{
  handleClick()
}} avatar={<Avatar src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>}
title="nischal tamang"
subheader={"nischal tamang"}
/>

      </Card>
     }
    </div>
  )
}

export default SearchUser
