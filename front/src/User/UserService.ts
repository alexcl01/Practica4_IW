import { User} from './User';
import axios from 'axios';

export interface Userr {
  _id: string,
  name?: string,
  surnames?: string,
  email?: string,
}
export const getUsers = async () => {
  return await axios.get<User[]>("/list");
};

export const createUser = async (user: User) => {
  return await axios.post('http://localhost:4000/create-user',
    { name: user.name,surnames: user.surnames,email: user.email } ,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      
};

export const deleteUser = async (id: string) => {
    return await axios.delete(`http://localhost:4000/${id}`);
  };

  export const editUser = async (user: Userr) => {
    return await axios.put(`http://localhost:4000/${user._id}`,{ name: user?.name,surnames: user?.surnames,email: user?.email } ,{
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
  };
