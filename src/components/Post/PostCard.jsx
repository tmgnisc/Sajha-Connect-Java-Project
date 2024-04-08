import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const PostCard = ({item}) => {
  return (
    <Card className="">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName+ " "+ item.user.lastName}
        subheader={"@"+item.user.firstName.toLowerCase()+ "_"+ item.user.lastName.toLowerCase()}
      />
      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {item.caption}
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton>
            {true ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <IconButton>
            <ShareIcon/>
          </IconButton>

          <IconButton>
            <ChatBubbleIcon/>
          </IconButton>
        </div>
        <div>
          <IconButton>
          {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}
          </IconButton>
       
      </div>
      </CardActions>
<section>

  <div className="flex items-center space-x-5 mx-3 my-5">
    <Avatar sx={{}} />

<input onKeyPress={(e)=>{
  if(e.key=="Enter"){
    console.log("enter pressed--------")
  }
}} className="w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2" type="text" placeholder="write comment.." />
  </div>
</section>
   
    </Card>
  );
};

export default PostCard;
