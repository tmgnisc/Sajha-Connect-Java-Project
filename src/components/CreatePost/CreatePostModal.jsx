import React from "react";
import { Box, Modal, Avatar, IconButon } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Formik, useFormik } from "formik";

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
  const formik = useFormik();
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
    <label htmlFor="image-input"></label>
    <IconButon>


    </IconButon>
  </div>
</div>

          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
