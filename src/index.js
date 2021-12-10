import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import SingUp from './pages/signup';
import {UserStorage} from './userContext';
//import {UserContext} from './userContext';

ReactDOM.render(
  <Router>
    <UserStorage>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SingUp />} />
      </Routes>
    </UserStorage>
  </Router>,
  document.getElementById('root')
);
