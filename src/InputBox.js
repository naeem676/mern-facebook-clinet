import React, { useRef, useState } from 'react';
import { VideoCameraIcon, EmojiHappyIcon, PhotographIcon } from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';


const InputBox = () => {
    const [caption, setCaption] = useState('');
    const [photo, setPhoto] = useState(null);
    const [showPhoto, setShowPhoto] = useState(null);
    const user = useSelector(selectUser);
    const filePickerRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
      if(caption || photo){
        const formData = new FormData();
        formData.append('name', user?.name);
        formData.append('photo',user?.photo);
        formData.append('email', user?.email);
        if(caption){
            formData.append('caption', caption);
        }
        if(photo){
            formData.append('image', photo)
        }

     
        
        fetch('https://quiet-bayou-35420.herokuapp.com/post', {
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .catch(err => alert(err));
        
        setCaption('');
        handleRemove();
      }


    };
    const addImageToPost = (e) => {
        setPhoto(e.target.files[0]);
        const reader = new FileReader();
        if(e.target.files[0]){
           reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setShowPhoto(readerEvent.target.result)
        }
      
   };
   const handleRemove =() => {
       setPhoto(null);
       filePickerRef.current.value = null;
       setShowPhoto(null);
   };

   
   

    return (
        <div className='m-5 sm:m-1 bg-white rounded-md'>
            <div>
                <div className='flex items-center p-3'>
                <img className='object-cover w-10 h-10 rounded-full m-2' src={user?.photo} alt="Avatar"/>
                <div className="flex-grow bg-gray-200 rounded-full p-3">
                <form className='flex' onSubmit={handleSubmit}>
                <input value={caption} onChange={e=>setCaption(e.target.value)} className='w-full bg-transparent outline-none' type="text" placeholder="What's on your mind ?" />
               
               <button className=' lg:hidden' type='submit'>Post</button>
                </form>
                </div>
                {
                    showPhoto && (
                        <div className='flex flex-col  filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'>
                <img className='w-20' src={showPhoto} alt="post" />
                <p onClick={handleRemove} className='text-xs text-red-500 text-center'>remove</p>
                </div>
                    )
                }
                </div>
               
                <div className='flex items-center justify-evenly p-3 border-t-2'>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                    <VideoCameraIcon className='h-6 lg:h-8 text-red-500'/>
                    <p className='text-gray-500 font-medium'>Live</p>
                    </div>
                    <div onClick={()=> filePickerRef.current.click()} className='flex items-center space-x-2 cursor-pointer'>
                    <PhotographIcon className='h-6 lg:h-8 text-green-400'/>
                    <p className='text-gray-500 font-medium'>Photo/Video</p>
                    <input ref={filePickerRef} onChange={addImageToPost}  type="file" hidden/>
                    </div>
                    <div className='flex items-center space-x-2 cursor-pointer'>
                    <EmojiHappyIcon className='h-6 lg:h-8 text-yellow-200'/>
                    <p className='text-gray-500 font-medium'>Feelings</p>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default InputBox;