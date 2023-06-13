import axios from 'axios';
import React from 'react'
import { baseUrl } from '../../Globals/Config';

const Home = () => {
  const [blogs, setBlogs]=React.useState([]);

  const getBlogs = async()=>{ 
    let res =await axios.get(`${baseUrl}blog_project`);
    console.log(res);
  };

  React.useEffect(()=>{
    getBlogs();
  },[]);


  return (
    <div>This is User Home</div>
  )
}

export default Home