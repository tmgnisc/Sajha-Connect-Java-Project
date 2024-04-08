import React from "react";
import { Grid, Avatar, IconButton } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import VideoCallIcon from "@mui/icons-material/VideoCall";

const Message = () => {
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
                <div className="">searchUser</div>
                <div className="h-full space-y-4 mt-5 overflow-y-scoll hideScrollbar">
                  UserChatCard
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid className="h-full" item xs={9}>
          <div>
            <div className="flex justify-between items-center border-l p-5">
              <div className="flex items-center space-x-3">
                <Avatar src="https://cdn.pixabay.com/photo/2014/04/03/11/56/avatar-312603_960_720.png" />
                <p>nischal test</p>
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
  message
</div>

          </div>

          <div className="sticky bottom-0 border-l">
            input part


          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Message;
