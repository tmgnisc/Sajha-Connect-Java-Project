import React from "react";
import { useParams } from "react-router-dom";
import {Avatar} from '@mui/material'

const Profile = () => {
  const { id } = useParams();
  return (
    <div className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://media.istockphoto.com/id/521420468/photo/boudhanath-stupa-kathmandu-nepal.jpg?s=1024x1024&w=is&k=20&c=QMe5_GVed6hB9uzegH2e8wnIn_QQgtb4Sim27oAaYrg="
            alt="image head"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar className="transform -translate-y-24 " sx={{width:"10rem", height:"10rem"}} src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/418738104_3437412519830669_2218902941484371811_n.jpg?stp=c12.0.240.240a_dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=YFIX_PYPQ40AX_poW5S&_nc_ht=scontent.fktm7-1.fna&oh=00_AfAikzgS-UzNq1W_HN33ZTtx35gXAT73kybnFYin7D8JtA&oe=65E8B428" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
