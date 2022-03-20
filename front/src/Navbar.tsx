import React,{FC} from 'react';
import {Nav , Navbar} from "react-bootstrap";
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        display: flex;
        border: 2px solid aquamarine;
        flex-wrap: wrap;
    justify-content: space-between;
    justify-content: space-around;
        background-color: #0c0c0c;

    }
    .navbar-brand, .navbar-nav .nav-link{
        background-color: #0c0c0c;
        flex: 0 1 calc(25% - 1em);
        color: #33FFDA;
        display: flex;
        border-radius: 5px;
        font-size: 2em;
        border: 2px solid aquamarine;
        background-size: auto;
        &:hover{
            color: white;
        }
    }
`;

const Navigation:FC = () => {


  return (
      <div>
        <Styles>
         <Navbar bg="dark" variant="dark">
            <Nav >
            <Nav.Link href="/" className="nav justify-content-center" >    User Menu</Nav.Link>
            </Nav>

                <Nav >
                <Nav.Link href="/list" className="nav justify-content-center">User List</Nav.Link>

                </Nav>
                <Nav >
                <Nav.Link href="/new-user" className="nav justify-content-center" >Create User</Nav.Link>
                </Nav>
   

        </Navbar>
        </Styles>
  </div>
  );
};

export default Navigation;