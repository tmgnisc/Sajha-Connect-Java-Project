import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
  const {id}= useParams()
  return (
    <div>
     <div className='py-10 w-[70%]'>
      <div className='rounded-md'>
        <div className='h-[15rem]'>
          
        </div>

      </div>
     </div>
    </div>
  )
}

export default Profile
