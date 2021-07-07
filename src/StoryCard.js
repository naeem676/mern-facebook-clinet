import React from 'react';

const StoryCard = ({name, src, profile}) => {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20  lg:h-56 lg:w-32 cursor-pointer overflow-x p-3  transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
             <img className='absolute  object-cover w-10 h-10 m-2  opacity-0 lg:opacity-100 rounded-full z-50 top-10' src={profile}
                alt={name} />
                <img className='absolute object-cover h-14 filter  brightness-75 rounded-full lg:rounded-3xl md:h-60 ' src={src} alt="profile" />
                <p className='absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>{name}</p>
        </div>
    );
};

export default StoryCard;