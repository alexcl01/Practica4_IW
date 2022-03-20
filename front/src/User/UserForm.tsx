import React, { ChangeEvent, FormEvent,FC, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { User } from './User';
import * as UserService from './UserService';
import '../App.css';
import styled from "styled-components";
import {Nav, Container , Form} from "react-bootstrap";
import { toast } from 'react-toastify';

const Button = styled.button`
  background: "white";
  color: "aquamarine";

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid aquamarine;
  border-radius: 3px;
  &:hover{
            color: red;
            cursor: pointer;
        }
`;

const Styles = styled.div`
    .form {
        background-color: #0c0c0c;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        display: flex;
        text-align: center;
        
    }
    .button{
        color: #33FFDA;
        font-size: 1em;
        &:hover{
            color: white;
        }
    }
    .form-label{
        font-size: 1.5em;
        color: #33FFDA;
        justify-content: space-around;

    }
    .form-control{
        font-size: 1em;
    }
`;




const UserForm: FC = () =>  {
  const history = useHistory();
  const [user, setUser] = useState<User>({ name: "",surnames: "", email: "" });


  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await UserService.createUser(user).then(() => {history.push('/list');})
    
  };
return(
    <div className="App">
    <Container className="App-header">
        <Styles>
        <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body" >
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name </Form.Label>
                <br />
                <Form.Control  placeholder="Name" name= "name" onChange={handleInputChange}/>
                <br />
                <Form.Label>Surnames</Form.Label>
                <br />
                <Form.Control  placeholder="Surnames"  name= "surnames" onChange={handleInputChange}/>
                <br />
                <Form.Label>Email address</Form.Label>
                <br />
                <Form.Control  type="email" placeholder="Email" name = "email" onChange={handleInputChange}/>
                <br />
            <Button type = "submit" className="btn btn-primary mt-5" >
                    Create
                </Button>
            </Form>
        </div>
        </div>
        </div>
    </Styles>
    </Container>
  </div>
)

  
}

export default UserForm;
