import React from 'react';
import { User } from './User';
import {   useHistory } from 'react-router-dom';
import * as UserService from './UserService';


interface Props {
  user: User;
}

function UserItem({ user }: Props) {
  const history = useHistory();
  const handleDelete = async (id: string) => {
    await UserService.deleteUser(id);
  };

  
  return (
    <div className="Card">
      <div className="card card-body ">
        <div className="d-flex justify-content-between">
          <h1 >
            {user.name}
          </h1>
          <button
            className="text-danger"
            onClick={() => user._id && handleDelete(user._id) }
          >
            {' '}
            X{' '}
          </button>
          <button
            className="text-danger"
            onClick={() => user._id && history.push(`/${ user._id}`) }
          >
            {' '}
            Edit{' '}
          </button>
        </div>
        <p>{user.surnames}</p>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

export default UserItem;