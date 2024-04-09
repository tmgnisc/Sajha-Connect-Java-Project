import React, { useState } from 'react'
import {Card, CardHeader, Avatar} from '@mui/material'

const SearchUser = () => {
const [userName, setUserName]=useState("")

  const handleSearchUser=(e)=>{
    setUserName(e.target.value)
    console.log("search user.....")
  }

  const handleClick=(id)=>{
    console.log(id)
  }

  return (
    <div>
     <div className='py-5 relative'>
      <input className='bg-transparent border border-[#3b4054] outline-none w-full px-5 py-3 rounded-full' placeholder='search user' onChange={handleSearchUser} type="text" />

      {userName && (<Card className='absoulute w-full z-10 top-[4.5rem] cursor-pointer'>
<CardHeader onClick={()=>{
  handleClick()
  setUserName("")
}} avatar={<Avatar src='https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png'/>}
title="nischal tamang"
subheader={"nischal tamang"}
/>

      </Card>
     )}
     </div>
     
  
    </div>
  )
}

export default SearchUser
