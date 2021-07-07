import React, {forwardRef} from 'react';
import { ThumbUpIcon, ChatIcon, DotsHorizontalIcon, ShareIcon } from '@heroicons/react/outline';


const Post = forwardRef(({name, email, photo, image, caption}, ref) => {
    return (
        <div ref={ref} className=' m-3 bg-white rounded-md mt-3 lg:m-0  transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
        <div className='flex flex-col p-3'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                       <img className='object-cover w-10 h-10 rounded-full m-2' src={photo} alt="Avatar"/> 
                       <p className='text-gray-500 font-normal'>{name}</p>
                       
                  </div>
                 <div className='cursor-pointer p-2 rounded-full hover:bg-gray-200'>
                 <DotsHorizontalIcon className='h-7 text-gray-500'/>
                 </div>
                </div>
                <div className='justify-center'>
                    {caption && <p className='text-lg font-medium p-2'>{caption}</p>}
                   {image ?  <img className='object-contain w-100 h-64' src={`data:${image?.contentType};base64,${image?.img}`} alt="post" /> : ''}
                </div>
                <div className='flex text-gray-500 justify-evenly pt-3'>
                    <div className='cursor-pointer flex items-center space-x-2'>
                    <ThumbUpIcon className='h-6 lg:h-8 '/>
                    <p className='text-xl'>Like</p>
                    </div>
                    <div className='cursor-pointer flex items-center space-x-2'>
                    <ChatIcon className='h-6 lg:h-8'/>
                    <p className='text-xl'>Comment</p>
                    </div>
                    <div className='cursor-pointer flex items-center space-x-2'>
                    <ShareIcon className='h-6 lg:h-8'/>
                    <p className='text-xl'>Share</p>
                    </div>
                </div>
            </div>
            </div>
    );
});

export default Post;