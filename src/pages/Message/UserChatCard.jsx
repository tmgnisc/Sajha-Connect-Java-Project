import React from 'react'
import {CardHeader, Avatar, IconButton, Card} from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useSelector} from 'react-redux'

 const UserChatCard = ({chat}) => {
  const { message, auth } = useSelector((store) => store);
  return (
    <Card>
  <CardHeader avatar={
    <Avatar sx={{width:"3.5rem", height:"3.5rem", fontSize:"1.5rem", bgcolor:"#191c29", color:"rgb(88,199,250)"}} src='https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_960_720.png'/>
} action={<IconButton>
    <MoreHorizIcon/>
    </IconButton>}
    title={auth.user.id===chat.users[0].id?chat.users[1].firstName+" "+chat.users[1].lastName:chat.users[0].firstName+" "+chat.users[0].lastName}
    subheader={"new message"}
>


  </CardHeader>
    </Card>

  )
}

export default UserChatCard
