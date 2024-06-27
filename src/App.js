import React from 'react';
import './App.css';
// import Navbar from './components/navbar/Navbar'
// import Header from './components/header/Header'
// import Main from './components/main/Main'
// import Footer from './components/footer/Footer'
// import Recently from './components/recentlyView/Recently';
// import Movieinfo from './components/movieInfo/Movieinfo';
import Home from './components/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </Router> 
    // <Home />
  );
} 

export default App;
