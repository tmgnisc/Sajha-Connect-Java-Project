import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../Redux/Auth/auth.action";
import {navigationMenu} from "./SidebarNavigation"

const Sidebar = () => {
  const { auth } = useSelector(store => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/profile/${auth.user?.id}`);
    } else if (item.title === "Message") {
      navigate(`/message`);
    } else if (item.title === "Home") {
      navigate('/');
    }
  };

  const handleLogout = () => {
    // Dispatch the logout action when the user clicks on "Logout"
    dispatch(logoutAction());
    // Close the menu
    handleClose();
    // Redirect the user to the login page or any other appropriate page
    navigate('/login');
  };

  return (
    <Card className="card h-screen flex flex-col justify-between py-5">
      <div className="space-y-8 pl-5">
        <div className="">
          <span className="logo font-bold text-xl">Sajha Connect</span>
        </div>
        <div className="space-y-8">
          {navigationMenu.map((item) => (
            <div onClick={() => handleNavigate(item)} className="cursor-pointer flex space-x-3 items-center">
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Divider />
        <div className="pl-5 flex items-center justify-between pt-5">
          <div className="flex items-center space-x-3 ">
            <Avatar src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_960_720.png" />
            <div>
              <p className="font-bold">{auth.user?.firstName + " " + auth.user?.lastName}</p>
              <p className="opacity-70">@{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
            </div>
          </div>
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {/* Add onClick handler for Logout */}
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </Card>
  );
};

export default Sidebar;
