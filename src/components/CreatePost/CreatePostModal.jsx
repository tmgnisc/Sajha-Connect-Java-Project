import React, { useState } from "react";
import { Box, Modal, Avatar, IconButton, Backdrop, CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";
import { Formik, useFormik } from "formik";
import ImageIcon from '@mui/icons-material/Image';
import VideoCallIcon from '@mui/icons-material/VideoCall';



const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
  borderRadius: ".6rem",
  outline: "none",
};

const CreatePostModal = ({ handleClose, open }) => {

  const [selectedImage, setSelectedImage]=useState();
  const [selectedVideo, setSelectedVideo]=useState();
  const [isLoading, setIsLoading]=useState(false);
  const handleSelectImage=()=>{
setSelectedImage("")
  }
  const handleSelectVideo=()=>{

  }

  const formik = useFormik({
    initialValues:{
      caption:"",
      image:"",
      video:""
    },
    onSubmit:(values)=>{
      console.log("formik values", values)
    }
  });
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div className="flex space-x-4 items-center">
              <Avatar />
              <div>
                <p className="font-bold text-lg">Nischal</p>
                <p className="text-sm">@nischal</p>
              </div>
            </div>
            <textarea placeholder="what's on your mind?" onChange={formik.handleChange} value={formik.values.caption} name="caption" id="" rows="4"></textarea>
<div className="flex space-x-5 items-center mt-5">

  <div>
    <input type="file" accept="image/*" onChange={handleSelectImage} style={{display:"none"}} id="image-input" />
    <label htmlFor="image-input">
    <IconButton color="primary">

<ImageIcon/>
</IconButton>
    </label>
   <span>Image</span>
  </div>
  <div>
    <input type="file" accept="video/*" onChange={handleSelectVideo} style={{display:"none"}} id="video-input" />
    <label htmlFor="video-input">
   <IconButton color="primary">

<VideoCallIcon/>
</IconButton>

    </label>
   <span>Video</span>
  </div>
</div>

{selectedImage &&<div>
  <img className="h-[10rem]" src="{selectedImage}" alt="" />
</div>
}

<div className="flex w-full justify-end">
  <button variant="contained" type="submit" sx={{borderRadius:"1.5rem"}} >Post</button>
</div>

          </div>
        </form>
        <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={isLoading}
  onClick={handleClose}
>
  <CircularProgress color="inherit" />
</Backdrop>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
