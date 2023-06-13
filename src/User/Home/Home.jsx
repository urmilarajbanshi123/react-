import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { baseUrl } from '../../Globals/Config';
import { Box } from '@mui/material';

export default function Home() {
  const [blogs, setBlogs]=React.useState([]);

  const getBlogs = async()=>{ 
    let res =await axios.get(`${baseUrl}blog_project`);
    setBlogs(res.data);
  }
  React.useEffect(()=>{
    getBlogs();
  },[]);

  return (
    <Box sx={{width:"95%", margin: "0 auto"}}>
      <Typography variant='h3' sx={{my: 3, textAlign:"center"}}>Blogs</Typography>
      <Box sx={{display:"flex", flexWrap:"wrap", gap:3,justifyContent:"center"}}>
        {blogs.map((blog)=>{
          return (
            <Card key={blog.id} sx={{maxWidth:345 }}>

<CardMedia
        sx={{ height: 140 }}
        image={blog.image}
        title="green iguana"
      />
      <CardContent>
        <Typography
        gutterBottom
        sx={{color:"#aaa",fontSize:'16px'}}>
          @{blog.author}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.description.slice(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
            </Card>
          );
        })}
      
      </Box>
    </Box>
  );
}