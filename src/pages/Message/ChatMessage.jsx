import React from 'react'
import {useSelector} from 'react-redux'

const ChatMessage = ({ item }) => { // Destructure 'item' directly from props
  console.log("Item:", item); // Log the item object to inspect its structure and properties
  const { message, auth } = useSelector((store) => store);
  const isReqUserMessage = auth.user?.id === item.user?.id;
  return (
    <div className={`flex ${isReqUserMessage ? "justify-start" : "justify-end"} text-white`}>
      <div className={`p-1 ${item.image ? "rounded-md" : "px-5 rounded-full"} bg-[#191c29]`}>
        {item.image && <img className='w-[12rem] h-[17rem] object-cover rounded-md' alt="img" src={item.image}/>}
        <p className={`${true ? "py-2" : "py-1"}`}>{item.content}</p>
        {console.log("content", item.content)}
      </div>
    </div>
  );
};


export default ChatMessage
