import { Avatar, Card } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import StoryCircle from "./StoryCircle";

const story = [11, 1, 1, 1, 1];
const MiddlePart = () => {
  return (
    <div className="px-20">
      <section className="flex items-center p-5 rounded-b-md">
        <div className="flex flex-col items-center mr-4 cursor-pointer">
          <Avatar sx={{ width: "5rem", height: "5rem" }}>
            <AddIcon sx={{ fontSize: "3rem" }} />
          </Avatar>
          <p>New</p>
        </div>
        {story.map((item) => (
          <StoryCircle />
        ))}
      </section>

      <Card className="p-5 mt-5">
        <div className="flex justify-between">
          <Avatar />
          <input className="outline-none w-[90%] rounded-full px-5 bg-transparent border-[#3b4054] border" type="text"/>
        </div>
      </Card>
    </div>
  );
};

export default MiddlePart;
