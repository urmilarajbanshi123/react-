import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResponsiveAppBar from './User/UserLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/Home/Home';
import About from './User/AboutUs/About';
import Blog from './User/Blog/Blog';



function App() {
 return (<>
  <Router>
    <Routes>
      <Route path="" element={<UserLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
      </Route>
    </Routes>
  </Router>
  </>
 );
}

export default App;
