import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const posts = [1, 1, 1, 1];
const reels = [1, 1, 1, 1];
const savedPost = [1,1,1,1]
const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="my-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://media.istockphoto.com/id/521420468/photo/boudhanath-stupa-kathmandu-nepal.jpg?s=1024x1024&w=is&k=20&c=QMe5_GVed6hB9uzegH2e8wnIn_QQgtb4Sim27oAaYrg="
            alt="image head"
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24 "
            sx={{ width: "10rem", height: "10rem" }}
            src="https://scontent.fktm7-1.fna.fbcdn.net/v/t39.30808-1/418738104_3437412519830669_2218902941484371811_n.jpg?stp=c12.0.240.240a_dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=YFIX_PYPQ40AX_poW5S&_nc_ht=scontent.fktm7-1.fna&oh=00_AfAikzgS-UzNq1W_HN33ZTtx35gXAT73kybnFYin7D8JtA&oe=65E8B428"
          />

          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">Nischal Tamang</h1>
            <p>@codeWithPororo</p>
          </div>
          <div className="flex gap-2 items-center py-3">
            <span>40 post</span>
            <span>25k Followers</span>
            <span>2 Followings</span>
          </div>
          <div>
            <p>
              Hello this is test message just to make sure if it is working or
              not.{" "}
            </p>
          </div>
        </div>
        <section>
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="wrapped label tabs example"
            >
              {tabs.map((item) => (
                <Tab value={item.value} label={item.name} />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div className="border border-slate-100 rounded-md ">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10 ">
                {reels.map((item) => (
                  <UserReelCard />
                ))}
              </div>
            ):value==="saved"?   <div className="space-y-5 w-[70%] my-10">
            {posts.map((item) => (
              <div className="border border-slate-100 rounded-md ">
                <PostCard />
              </div>
            ))}
          </div> : (
              <div>repost</div>
            )}
          </div>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
