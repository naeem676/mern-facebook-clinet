import React from 'react';

const Contact = ({name, src}) => {
    return (
        <div className='hidden lg:flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
        <img className="w-14 h-14 object-cover rounded-full" src={src} alt="none" />
         <p>{name}</p>
         <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full"></div>
            
        </div>
    );
};

export default Contact;