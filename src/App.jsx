import React,{ useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ResponsiveAppBar from './User/UserLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLayout from './User/UserLayout';
import Home from './User/Home/Home';
import About from './User/AboutUs/About';
import Blog from './User/Blog/Blog';
import SingleBlog from './User/Blog/SingleBlog';
import AdminLayout from './Admin/Layout';
import AdminHome from './Admin/Home/AdminHome';
import AddBlog from './User/Blog/AddBlog';
import EditBlog from './User/Blog/EditBlog';
import Login from './Auth/Login';




function App() {
 return (<>
  <Router>
    <Routes>
      <Route path='/login' element ={<Login/>}/>
      <Route path="" element={<UserLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/blog/:id" element={<SingleBlog/>}/>
      </Route>
      <Route path='/admin/' element={<AdminLayout/>}>
        <Route path="home" element={<AdminHome/>}/>
        <Route path='add' element={<AddBlog/>}/>
        <Route path='edit/:id' element={<EditBlog/>}/>
      </Route>
    </Routes>
  </Router>
  </>
 );
}

export default App;
