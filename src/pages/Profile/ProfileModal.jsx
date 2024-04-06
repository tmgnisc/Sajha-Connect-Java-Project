import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { Avatar, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { updateProfileAction } from "../../Redux/Auth/auth.action";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 2,
  outline: "none",
  overflow: "scroll-y",
  borderRadius: 3,
};

export default function ProfileModal({ open, handleClose }) {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: ""
    },
    onSubmit: (values) => {
      dispatch(updateProfileAction(values));
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={formik.handleSubmit}>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
                <p>Edit Profile</p>
              </div>
              <Button type="submit">Save</Button>
            </div>
            <div>
              <div className='h-[15rem]'>
                <img className='w-full h-full rounded-t-md' src='https://media.istockphoto.com/id/521420468/photo/boudhanath-stupa-kathmandu-nepal.jpg?s=1024x1024&w=is&k=20&c=QMe5_GVed6hB9uzegH2e8wnIn_QQgtb4Sim27oAaYrg=' alt='photo image' />
              </div>
              <div className='pl-5'>
                <Avatar className='transform -translate-y-24' sx={{ width: "10rem", height: "10rem" }} src='https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/418738104_3437412519830669_2218902941484371811_n.jpg?stp=c12.0.240.240a_dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=YFIX_PYPQ40AX_poW5S&_nc_ht=scontent.fktm7-1.fna&oh=00_AfAikzgS-UzNq1W_HN33ZTtx35gXAT73kybnFYin7D8JtA&oe=65E8B428' />
              </div>
            </div>
            <div className='space-y-3'>
              <TextField
                fullWidth
                id='firstName'
                name='firstName'
                label='First Name'
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />

              <TextField
                fullWidth
                id='lastName'
                name='lastName'
                label='Last Name'
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
