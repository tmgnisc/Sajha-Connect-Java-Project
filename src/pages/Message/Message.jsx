import React, { useEffect, useState } from "react";
import { Grid, Avatar, IconButton, Backdrop, CircularProgress } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import SearchUser from "../../components/SearchUser/SearchUser";
import UserChatCard from "./UserChatCard";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, getAllChats } from "../../Redux/Message/message.action";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import uploadToCloudniry from "../../utils/uploadToCloudniry";
import SockJs from "sockjs-client"
import Stom from "stompjs"

const Message = () => {
  const dispatch = useDispatch();
  const { message, auth } = useSelector((store) => store);
  const [currentChat, setCurrentChat] = useState();
  const [messages, setMessages] = useState([]);
  const [selectedImage, setSelectedImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllChats());
  }, []);

  console.log("chats----", message.chats);

  const handleSelectImage = async (e) => {
    setLoading(true);
    console.log("handle select image");
    const imgUrl = await uploadToCloudniry(e.target.files[0], "image");
    setSelectedImage(imgUrl);
    setLoading(false);
  };

  const handleCreateMessage = (value) => {
    const message = {
      chatId: currentChat?.id,
      content: value,
      image: selectedImage,
    };
    dispatch(createMessage({message, sendMessageToServer}));
    console.log("Message created:", message); // Add this line to log the created message
  };

  useEffect(()=>{
setMessages([...messages,message.message])
  },[message.message])


  const [stomClient, setStomClient]=useState(null)
  useEffect(()=>{
  const sock=new SockJs("http://localhost:5454/ws")
const stomp= Stom.over(sock)
setStomClient(stomp)
stomp.connect({}, onConnect, onErr)

  },[]
)

const onConnect=()=>{
  console.log("websocket connected....")
}


const onErr=(error)=>{
  console.log("errr....", error)
}


useEffect(()=>{

  if(stomClient && auth.user && currentChat){
    const subscription = stomClient.subscribe(`/user/${currentChat.id}/private`,  onMessageReceive)
  }
}
)
const sendMessageToServer=(newMessage)=>{
   if(stomClient && newMessage){
    stomClient.send(`/app/chat/${currentChat?.id.toString()}`, {}, JSON.stringify(message))

   }
}
const onMessageReceive=(newMessage)=>{
  console.log("message receive from web socket", newMessage)
}
  return (
    <div>
      <Grid container className="h-screen overflow-y-hidden">
        <Grid className="px-5" item xs={3}>
          <div className="flex h-full justify-between space-x-2">
            <div className="w-full">
              <div className="flex space-x-4 items-center py-5">
                <WestIcon />
                <h1 className="text-xl font-bold">Home</h1>
              </div>
              <div className="h-[83vh]">
                <div className="">
                  <SearchUser />
                </div>
                <div className="h-full space-y-4 mt-5 overflow-y-scoll hideScrollbar">
                  {message.chats.map((item) => {
                  return <div
                      onClick={() => {
                        setCurrentChat(item);
                        setMessages(item.messages || []); // Provide an empty array if messages are null or undefined
                      }}
                    >
                      <UserChatCard chat={item} />
                    </div>
                  })}
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="h-full" item xs={9}>
          {currentChat ? 
            <div>
              <div className="flex justify-between items-center border-l p-5">
                <div className="flex items-center space-x-3">
                  <Avatar src="https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_960_720.png" />
                  <p>
                    {auth.user?.id === currentChat.users[0]?.id
                      ? currentChat.users[1].firstName +
                        " " +
                        currentChat.users[1].lastName
                      : currentChat.users[0].firstName +
                        " " +
                        currentChat.users[0].lastName}{" "}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <IconButton>
                    <AddIcCallIcon />
                  </IconButton>

                  <IconButton>
                    <VideoCallIcon />
                  </IconButton>
                </div>
              </div>
              <div className="hideScrollbar overflow-y-scroll h-[82vh] px-2 space-y-5 py-5">
                {messages.map((item) => 
                  <ChatMessage item={item} />
                )}
              </div>
              <div className="sticky bottom-0 border-l">
                {selectedImage && <img className="w-[5rem] h-[5rem] object-cover px-2" src={selectedImage} alt="" />}
                <div className="py-5 flex items-center justify-center space-x-5">
             
                  <input
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && e.target.value) {
                        handleCreateMessage(e.target.value);
                        setSelectedImage("")
                      }
                    }}
                    className="bg-transparent border border-[#3b4054] rounded-full w-[90%] py-3 px-5 "
                    placeholder="Type message...."
                    type="text"
                  />
                  <div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelectImage}
                      className="hidden"
                      id="image-input"
                    />
                    <label htmlFor="image-input">
                      <AddPhotoAlternateIcon />
                    </label>
                  </div>
                </div>
              </div>
            </div>
           : 
            <div className="h-full space-y-5 flex flex-col justify-center items-center">
              <ChatBubbleIcon sx={{ fontSize: "15rem" }} />
              <p className="text-xl font-semibold">No chat Selected</p>
            </div>
          }
        </Grid>
      </Grid>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}

      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Message;
