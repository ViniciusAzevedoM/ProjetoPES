import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/Home';
import SingUp from './pages/signup';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SingUp />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
