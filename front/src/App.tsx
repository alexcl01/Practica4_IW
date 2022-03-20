import React, {  FC } from 'react';

import './App.css';
import {Container } from "react-bootstrap";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './User/UserList';
import UserForm from './User/UserForm';
import Navigation from './Navbar';
import Menu from './Menu';
import UserUp from './User/UserUp';
import {  useParams } from 'react-router-dom';


function App() {
  return (
    <div className = "App">
    
    <Navigation />

    <Menu>
    <BrowserRouter>
          <Switch>

          <Route exact path="/" component={Home} />
          <Route exact  path="/list" component={UserList} />
          <Route exact path='/:id' component= {UserUp }/>
          <Route exact path="/new-user" component={UserForm} />
  
        </Switch>

    </BrowserRouter>
    </Menu>
    </div>
  );
}

export default App;


  const Home: FC = () => (
      <div className = "App"> 
      <Container  className = "App-header" >
        Web Aplication
        </Container>
          

      </div>
    )


