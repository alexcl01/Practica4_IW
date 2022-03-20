import React, { useEffect, useState, FC } from 'react';
import axios from 'axios';
import { User } from './User';
import UserItem from './UserItem';
import { Container , Form} from "react-bootstrap";

const UserList:FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const loadUsers = async () => {
    axios({
        url: "http://localhost:4000/list"
    }).then((response) => {
        setUsers(response.data);
    }) 

  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="App">
    <Container className="App-header">
    <div className = "Cards">
      {users.map((user) => {
        return <UserItem user={user} key={user._id} />;
      })}
      </div>
      </Container>
      </div>
  );
};

export default UserList;