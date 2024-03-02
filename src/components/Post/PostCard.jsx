import { Avatar, Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PostCard = () => {
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
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
       <CardMedia
        component="img"
        height="194"
        image="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        alt="Paella dish"
      />
    </Card>
  );
};

export default PostCard;
