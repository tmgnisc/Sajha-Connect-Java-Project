import React, { useState, useEffect } from 'react';
import { Avatar, Button, CardHeader } from '@mui/material';
import axios from 'axios';
import { red } from '@mui/material/colors';
import { api } from "../../config/api";

const PopularUserCard = () => {
  const [popularUsers, setPopularUsers] = useState([]);
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    const fetchPopularUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5454/users');
        setPopularUsers(response.data);
      } catch (error) {
        console.error('Error fetching popular users:', error);
      } 
    };

    fetchPopularUsers();
  }, []);

  useEffect(() => {
    // Fetch the logged-in user's ID from localStorage or your authentication state
    const loggedInUserId = localStorage.getItem('userId');
    setLoggedInUserId(loggedInUserId);
  }, []);

  const handleFollow = async (userId) => {
    try {
      const jwt = localStorage.getItem('jwt');
      // Make the request to follow the user without including the current user's ID
      await api.put(`/api/users/follow/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      // Update the UI to reflect the user has been followed
      setPopularUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId ? { ...user, followed: true } : user
        )
      );
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const handleUnfollow = async (userId) => {
    try {
      const jwt = localStorage.getItem('jwt');
      // Make the request to unfollow the user without including the current user's ID
      await api.put(`/api/users/unfollow/${userId}`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      // Update the UI to reflect the user has been unfollowed
      setPopularUsers(prevUsers =>
        prevUsers.map(user =>
          user.id === userId ? { ...user, followed: false } : user
        )
      );
    } catch (error) {
      console.error('Error unfollowing user:', error);
    }
  };

  // Filter out the logged-in user from the list of popular users
  const filteredUsers = popularUsers.filter(user => user.id !== loggedInUserId);
  console.log("this is filetered user", filteredUsers)

  return (
    <div>
      {filteredUsers.map((user) => (
        <CardHeader
          key={user.id}
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />}
          action={
            user.followed ? ( // If user is followed, show "Unfollow" button
              <Button size="small" onClick={() => handleUnfollow(user.id)}>Unfollow</Button>
            ) : ( // Otherwise, show "Follow" button
              <Button size="small" onClick={() => handleFollow(user.id)}>Follow</Button>
            )
          }
          title={`${user.firstName} ${user.lastName}`}
          subheader={`@${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`}
        />
      ))}
    </div>
  );
};

export default PopularUserCard;
