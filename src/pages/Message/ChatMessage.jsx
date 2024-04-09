import React from 'react'

const ChatMessage = () => {
  return (
    <div className={`flex ${true?"justify-start":"justify-end"} text-white`}>
      <div className={`p-1 ${true?"rounded-md":"px-5 rounded-full"} bg-[#191c29]`}>

        {true && <img className='w-[12rem] h-[17rem] object-cover rounded-md' alt="img" src='https://cdn.pixabay.com/photo/2021/09/27/03/19/bichon-6659330_960_720.jpg'/>}
<p className={`${true?"py-2":"py-1"}`}>message..</p>
      </div>
    </div>
  )
}

export default ChatMessage
