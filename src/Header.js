import React from 'react';
import HeaderCenter from './HeaderCenter';
import HeaderLeft from './HeaderLeft';
import'./Header.css';
import { 
  SearchIcon,
  UserGroupIcon
 } from '@heroicons/react/solid';
 import { HomeIcon, OfficeBuildingIcon, ChatIcon, BellIcon, ChevronDownIcon} from '@heroicons/react/outline';
 import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
 import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
 import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import { logout, selectUser } from './userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';


const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    
    

    const signOut = () => {
        auth.signOut();
        dispatch(logout())
    }

   
    return (
        <div className='sticky top-0 z-50 flex justify-evenly items-center p-2 bg-white lg:px-5 shadow-md'>
           <div className='flex items-center'>
               <img className='w-20' src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
               <div className='hidden lg:flex items-center  ml-2 bg-gray-100 rounded-full p-2'>
                <SearchIcon className='h-6 text-gray-600'/>
                <input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type="text" placeholder='Search Facebook' />
               </div>
               
           </div>
           <div className='hidden lg:flex justify-center flex-grow'>
               <HeaderCenter Icon={HomeIcon} title='Home'/>
               <HeaderCenter Icon={OndemandVideoOutlinedIcon} title='Watch'/>
               <HeaderCenter Icon={OfficeBuildingIcon} title='Marketplace'/>
               <HeaderCenter Icon={UserGroupIcon} title='Group'/>
               <HeaderCenter Icon={DashboardOutlinedIcon} title='Gaming'/>
           </div>
           <div className='flex items-center justify-end sm:space-x-2'>
               <div className='flex ml-3 items-center cursor-pointer'>
                   {/* <Avatar src={user.photo} alt='user' /> */}
                   <img onClick={signOut} className='object-cover w-10 h-10 rounded-full m-2 ' src={user?.photo + "?type=square"} alt='Avatar' />
                <p className=''>{user?.name}</p>
               </div>
               <HeaderLeft Icon={AppsOutlinedIcon} title='Menu' />
               <HeaderLeft Icon={ChatIcon} title='Chat' />
               <HeaderLeft Icon={BellIcon} title='Notification' />
               <HeaderLeft Icon={ChevronDownIcon} title='Account' />
           </div>
        </div>
    );
};

export default Header;