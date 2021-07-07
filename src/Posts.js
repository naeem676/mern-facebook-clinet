import React, { useEffect, useState } from 'react';
import Post from './Post';


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    fetch('https://quiet-bayou-35420.herokuapp.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [posts]);
  
  
    return (
            <div className=''>
              
              
              <div className='flex flex-col-reverse'>
              
              {
                 
                 posts?.map((post) =><Post key={post._id} name={post.name} photo={post.photo} email={post.email} caption={post.caption} image={post.postImage} />) 
                  
               }
               
              </div>
              
              
            </div>
            
        
    );
};

export default Posts;