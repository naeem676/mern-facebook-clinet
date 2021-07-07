import React from 'react';

const SidbarRow = ({Icon, title, src}) => {
    return (
        <div className='flex items-center p-4 m-1 space-x-2 hover:bg-gray-200 rounded-xl cursor-pointer'>
            { Icon && <Icon className="h-6 w-8 text-blue-500"/>}
            {src && <img className='object-cover w-10 h-10 rounded-full m-2 ' src={src} alt={title}/>}
            <p className='hidden sm:inline-flex font-medium'>{title}</p>
        </div>
    );
};

export default SidbarRow;