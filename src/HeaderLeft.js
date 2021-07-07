import React, { useState } from 'react';
import './HeaderLeft.css';

const HeaderLeft = ({Icon, title}) => {
    const [show, setShow] = useState(false);
    const showTitle = () => {
          setShow(true);
    }
    const unShow =()=>{
        setShow(false);
    }
    return (
        <div className='items-center  flex flex-col m-1'>
            <div  onMouseOver={showTitle} onMouseLeave={unShow}
         className='cursor-pointer text-gray-500 rounded-full bg-gray-100 p-2 hover:bg-gray-200 '>
                {Icon && <Icon className='h-8'/>}
                
               
           
        </div>
        {show && <div className='fixed top-20 text-white bg-black p-2  rounded-md'><p className='text-sm text-center'>{title}</p></div>}
        </div>
    );
};

export default HeaderLeft;