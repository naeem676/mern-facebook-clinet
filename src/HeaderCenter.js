import React, { useState } from 'react';

const HeaderCenter = ({Icon, title}) => {
    const [show, setShow] = useState(false);
    const showTitle = () => {
          setShow(true);
    }
    const unShow =()=>{
        setShow(false);
    }
    
    return (
        <div className='items-center  flex flex-col lg:mr-3 sm:mr-1'>
            <div  onMouseOver={showTitle} onMouseLeave={unShow}
         className='cursor-pointer text-gray-500 hover:bg-gray-200 pt-2 pb-2 pl-4 pr-4 rounded-md group'>
                <Icon className='h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500'/>
               
           
        </div>
        {show && <div className='fixed top-20 text-white bg-black p-2  rounded-md'><p className='text-sm text-center'>{title}</p></div>}
        </div>
    );
};

export default HeaderCenter;