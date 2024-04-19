import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";
import { useSelector, useDispatch } from "react-redux";
import ProfileModal from "./ProfileModal";
import { getUsersPostAction } from "../../Redux/Post/post.action";

const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "Repost" },
];

const Profile = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState("post");
  const dispatch = useDispatch();

  const { auth, post } = useSelector((store) => store);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          await dispatch(getUsersPostAction(id));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error, e.g., set an error state or display a message to the user
        //test
      }
    };

    fetchData();
  }, [id, dispatch]);

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
            <Button
              sx={{ borderRadius: "20px" }}
              variant="outlined"
              onClick={handleOpenProfileModal}
            >
              Edit Profile
            </Button>
          ) : (
            <Button variant="outlined">Follow</Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user.lastName}
            </h1>
            <p>
              @{auth.user?.firstName.toLowerCase() +
                "_" +
                auth.user.lastName.toLowerCase()}
            </p>
          </div>
          <div className="flex gap-2 items-center py-3">
            <span>{post.posts.length} post</span>
            {/* console.log("User Posts:", post.posts) */}

            <span>25k Followers</span>
            <span>2 Followings</span>
          </div>
          <div>
            <p>Hello this is test message just to make sure if it is working or not.</p>
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
                <Tab key={item.value} value={item.value} label={item.name} />
              ))}
            </Tabs>
          </Box>
          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {post.posts.map((post) => (
                  <div key={post.id} className="border border-slate-100 rounded-md ">
                    <PostCard item={post} />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10 ">
                {post.reels.map((reel) => (
                  <UserReelCard key={reel.id} />
                ))}
              </div>
            ) : value === "saved" && post.savedPosts ? (
              <div className="space-y-5 w-[70%] my-10">
                {post.savedPosts.map((savedPost) => (
                  <div key={savedPost.id} className="border border-slate-100 rounded-md">
                    <PostCard item={savedPost} />
                  </div>
                ))}
              </div>
            ) : (
              <div>repost</div>
            )}
          </div>
        </section>
      </div>
      <section>
        <ProfileModal open={open} handleClose={handleClose} />
      </section>
    </Card>
  );
};

export default Profile;
