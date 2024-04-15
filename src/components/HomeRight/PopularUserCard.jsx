import React, { useState, useEffect } from 'react';
import { Avatar, Button, CardHeader } from '@mui/material';
import axios from 'axios';
import { red } from '@mui/material/colors';

const PopularUserCard = () => {
  const [popularUsers, setPopularUsers] = useState([]);

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

  return (
    <div>
      {popularUsers.map((user) => (
        <CardHeader
          key={user.id}
          avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" />}
          action={<Button size="small">Follow</Button>}
          title={`${user.firstName} ${user.lastName}`}
          subheader={`@${user.firstName.toLowerCase()}_${user.lastName.toLowerCase()}`}
        />
      ))}
    </div>
  );
};

export default PopularUserCard;
