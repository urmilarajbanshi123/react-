import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import { baseUrl } from '../../Globals/Config';
import { Box, Divider, Typography } from '@mui/material';

const SingleBlog = () => {
        const{id}=useParams();
        const[SingleBlog,setSingleBlog]=React.useState({});
        const getSingleBlog=async()=>{
            let res =await axios.get(`${baseUrl}/blog_project/${id}`);
            setSingleBlog(res.data)
        };
        React.useEffect(() =>{
            getSingleBlog();
        },[]);
  return (
   <div>
<Box>
    <Typography sx={{ fontSize:"209px",fontWeight:'800', textAlign:'center'}}>{SingleBlog.title}</Typography>
    <img src={SingleBlog.image} style={{height:"400px",width:'100%', objectFit:"contain"}}/>
    <Typography sx={{pb:2}}>{SingleBlog.author}</Typography>
    <Divider/>
    <Typography sx={{pt:3}}>{SingleBlog.description}</Typography>
</Box>

   </div>
  )
}

export default SingleBlog
