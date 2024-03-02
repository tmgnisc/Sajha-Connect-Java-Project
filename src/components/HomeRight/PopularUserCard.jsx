import React from 'react'
import {Avatar, Button, CardHeader, IconButton} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const PopularUserCard = () => {
  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            
          </Avatar>
        }
        action={
         <Button size='small'>
            Follow
         </Button>
        }
        title="Nischal Tamang"
        subheader="@nschal"
      />
    </div>
  )
}

export default PopularUserCard
